package engram

import (
	"net"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

// TestDetectBinaryWithLookPathStub verifies binary detection honors the
// package-level LookPath seam.
func TestDetectBinaryWithLookPathStub(t *testing.T) {
	orig := LookPath
	defer func() { LookPath = orig }()

	LookPath = func(name string) (string, error) {
		if name == "engram" {
			return "/opt/homebrew/bin/engram", nil
		}
		return "", os.ErrNotExist
	}
	found, path := DetectBinary()
	if !found || path != "/opt/homebrew/bin/engram" {
		t.Fatalf("got found=%v path=%q", found, path)
	}
	if got := ResolveCommand(); got != "/opt/homebrew/bin/engram" {
		t.Errorf("ResolveCommand = %q", got)
	}

	LookPath = func(string) (string, error) { return "", os.ErrNotExist }
	if found, _ := DetectBinary(); found {
		t.Error("expected not found")
	}
	if got := ResolveCommand(); got != "engram" {
		t.Errorf("ResolveCommand fallback = %q, want engram", got)
	}
}

// TestServerRunning verifies the health probe against a live HTTP server.
func TestServerRunning(t *testing.T) {
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
	}))
	defer srv.Close()

	port := srv.Listener.Addr().(*net.TCPAddr).Port
	if !ServerRunning(port) {
		t.Errorf("ServerRunning(%d) = false, want true", port)
	}
	// Closed port should report down.
	if ServerRunning(1) {
		t.Error("ServerRunning(1) = true, want false")
	}
}

// TestPatchPluginBINNoPath replaces the marker with the Bun.which fallback.
func TestPatchPluginBINNoPath(t *testing.T) {
	src := []byte("const ENGRAM_BIN = process.env.ENGRAM_BIN ?? \"engram\"\n")
	got := string(PatchPluginBIN(src, "engram"))
	if !strings.Contains(got, `Bun.which("engram")`) {
		t.Errorf("patch missing Bun.which fallback:\n%s", got)
	}
	// The original unresolvable fallback must be replaced entirely.
	if strings.Contains(got, "process.env.ENGRAM_BIN ?? \"engram\"") {
		t.Errorf("original fallback still present:\n%s", got)
	}
}

// TestPatchPluginBINWithPath bakes in an absolute binary path.
func TestPatchPluginBINWithPath(t *testing.T) {
	src := []byte("const ENGRAM_BIN = process.env.ENGRAM_BIN ?? \"engram\"\n")
	got := string(PatchPluginBIN(src, "/opt/homebrew/bin/engram"))
	if !strings.Contains(got, `?? "/opt/homebrew/bin/engram"`) {
		t.Errorf("patch missing baked-in path:\n%s", got)
	}
}

// TestInstallPlugin writes a patched plugin into the given directory.
func TestInstallPlugin(t *testing.T) {
	dir := t.TempDir()
	src := []byte(`
// before
const ENGRAM_BIN = process.env.ENGRAM_BIN ?? "engram"
// after
`)
	dest, err := InstallPlugin(dir, src)
	if err != nil {
		t.Fatalf("InstallPlugin: %v", err)
	}
	if filepath.Base(dest) != "engram.ts" {
		t.Errorf("dest = %q, want engram.ts", dest)
	}
	if !PluginInstalled(dir) {
		t.Error("PluginInstalled = false, want true")
	}
	data, err := os.ReadFile(dest)
	if err != nil {
		t.Fatalf("read plugin: %v", err)
	}
	if !strings.Contains(string(data), `Bun.which("engram")`) {
		t.Error("installed plugin was not patched")
	}
}
