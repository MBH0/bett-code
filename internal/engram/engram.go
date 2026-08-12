// Package engram talks to the Engram binary and its local HTTP server. The
// harness never reimplements Engram's logic: it detects the binary, keeps
// `engram serve` running, installs the OpenCode plugin, and lets OpenCode's
// MCP stdio bridge do the rest.
package engram

import (
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"
)

// DefaultPort matches Engram's default HTTP server port.
const DefaultPort = 7437

// LookPath is a package-level seam so tests can stub binary detection.
var LookPath = exec.LookPath

// DetectBinary reports whether the engram binary is on PATH.
func DetectBinary() (found bool, path string) {
	p, err := LookPath("engram")
	if err != nil || p == "" {
		return false, ""
	}
	return true, p
}

// ResolveCommand returns the most stable command to launch engram: the
// absolute binary path when it can be resolved, else the bare name.
func ResolveCommand() string {
	if _, p := DetectBinary(); p != "" {
		return p
	}
	return "engram"
}

// ServerRunning probes the HTTP health endpoint on the given port.
func ServerRunning(port int) bool {
	client := &http.Client{Timeout: 800 * time.Millisecond}
	url := fmt.Sprintf("http://127.0.0.1:%d/health", port)
	resp, err := client.Get(url)
	if err != nil {
		return false
	}
	defer resp.Body.Close()
	return resp.StatusCode >= 200 && resp.StatusCode < 300
}

// EnsureServer starts `engram serve` in the background when it is not already
// running. It returns true when a server was started. Failures are soft: the
// plugin and MCP wiring still install, and OpenCode can launch the MCP
// subprocess itself.
func EnsureServer(port int) (started bool, err error) {
	if ServerRunning(port) {
		return false, nil
	}

	cmd := exec.Command(ResolveCommand(), "serve")
	cmd.Stdout = nil
	cmd.Stderr = nil
	cmd.Stdin = nil
	cmd.SysProcAttr = detachAttr()
	if err := cmd.Start(); err != nil {
		return false, err
	}

	// Give the server a moment to bind the port.
	for i := 0; i < 20; i++ {
		if ServerRunning(port) {
			return true, nil
		}
		time.Sleep(100 * time.Millisecond)
	}
	return true, nil
}

// PluginBINMarker is the line in the plugin template that gets patched with a
// baked-in absolute binary path so headless environments find engram.
const PluginBINMarker = `const ENGRAM_BIN = process.env.ENGRAM_BIN ?? "engram"`

// PatchPluginBIN replaces the ENGRAM_BIN fallback line so the installed plugin
// tries env override, then Bun.which, then a baked-in absolute path.
func PatchPluginBIN(src []byte, absBin string) []byte {
	if absBin == "engram" {
		return []byte(strings.Replace(string(src), PluginBINMarker,
			`const ENGRAM_BIN = process.env.ENGRAM_BIN ?? Bun.which("engram") ?? "engram"`, 1))
	}
	replacement := fmt.Sprintf(`const ENGRAM_BIN = process.env.ENGRAM_BIN ?? Bun.which("engram") ?? %q`, absBin)
	return []byte(strings.Replace(string(src), PluginBINMarker, replacement, 1))
}

// InstallPlugin writes the OpenCode plugin into the given plugin directory,
// patching the binary fallback so the plugin can auto-start `engram serve`.
func InstallPlugin(pluginDir string, src []byte) (string, error) {
	if err := os.MkdirAll(pluginDir, 0o755); err != nil {
		return "", err
	}
	dest := filepath.Join(pluginDir, "engram.ts")
	patched := PatchPluginBIN(src, ResolveCommand())
	if err := os.WriteFile(dest, patched, 0o644); err != nil {
		return "", err
	}
	return dest, nil
}

// PluginInstalled reports whether the engram plugin is already present.
func PluginInstalled(pluginDir string) bool {
	_, err := os.Stat(filepath.Join(pluginDir, "engram.ts"))
	return err == nil
}
