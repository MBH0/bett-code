package harness

import (
	"os"
	"path/filepath"
	"strings"
	"testing"

	"bett-ai-harness/internal/engram"
	"bett-ai-harness/internal/opencode"
)

// stubLookPaths makes opencode and engram appear installed so harness tests
// exercise the real wiring paths without touching the host system.
func stubLookPaths(t *testing.T) {
	t.Helper()
	origOpen := opencode.LookPath
	origEngram := engram.LookPath
	bin := t.TempDir()
	openEngram := filepath.Join(bin, "engram")
	if err := os.WriteFile(openEngram, []byte("#!/bin/sh\nexit 0\n"), 0o755); err != nil {
		t.Fatalf("write fake engram: %v", err)
	}

	opencode.LookPath = func(name string) (string, error) {
		if name == "opencode" {
			return "/opt/homebrew/bin/opencode", nil
		}
		return "", os.ErrNotExist
	}
	engram.LookPath = func(name string) (string, error) {
		if name == "engram" {
			return openEngram, nil
		}
		return "", os.ErrNotExist
	}
	t.Cleanup(func() {
		opencode.LookPath = origOpen
		engram.LookPath = origEngram
	})
}

// TestDetectStatus reports opencode/engram presence and no MCP registration.
func TestDetectStatus(t *testing.T) {
	stubLookPaths(t)
	dir := t.TempDir()
	t.Setenv("XDG_CONFIG_HOME", dir)

	s := DetectStatus()
	if !s.OpenCode.BinaryFound {
		t.Error("OpenCode.BinaryFound = false, want true")
	}
	if !s.Engram.BinaryFound {
		t.Error("Engram.BinaryFound = false, want true")
	}
	if s.OpenCode.HasEngramMCP {
		t.Error("HasEngramMCP should be false on a fresh config")
	}
	if s.OpenCode.ConfigDir == "" {
		t.Error("ConfigDir should be set")
	}
}

// TestInstallAssetsWritesCommandsAndSkills verifies the assets land in the
// OpenCode config dir.
func TestInstallAssetsWritesCommandsAndSkills(t *testing.T) {
	stubLookPaths(t)
	dir := t.TempDir()
	t.Setenv("XDG_CONFIG_HOME", dir)

	steps := InstallAssets()
	if len(steps) == 0 {
		t.Fatal("InstallAssets returned no steps")
	}
	for _, s := range steps {
		if !s.OK {
			t.Errorf("unexpected failing step: %s", s.Text)
		}
	}

	oc := filepath.Join(dir, "opencode")
	for _, cmd := range []string{"doctor", "mem", "mem-search", "skill-registry"} {
		p := filepath.Join(oc, "commands", cmd+".md")
		if _, err := os.Stat(p); err != nil {
			t.Errorf("command not installed: %s (%v)", p, err)
		}
	}
	skill := filepath.Join(oc, "skills", "memory-protocol", "SKILL.md")
	if _, err := os.Stat(skill); err != nil {
		t.Errorf("skill not installed: %s (%v)", skill, err)
	}
}

// TestWireEngramWritesPluginAndMCP verifies wiring registers the MCP server
// and installs the plugin into a temp config. The engram binary is fake, so
// the server step is expected to be skipped or fail softly.
func TestWireEngramWritesPluginAndMCP(t *testing.T) {
	stubLookPaths(t)
	dir := t.TempDir()
	t.Setenv("XDG_CONFIG_HOME", dir)

	steps := WireEngram()
	if len(steps) == 0 {
		t.Fatal("WireEngram returned no steps")
	}

	oc := filepath.Join(dir, "opencode")
	if !opencode.HasMCP("engram") {
		t.Error("engram MCP server not registered")
	}
	plugin := filepath.Join(oc, "plugins", "engram.ts")
	if _, err := os.Stat(plugin); err != nil {
		t.Errorf("plugin not installed: %v", err)
	}
	data, err := os.ReadFile(plugin)
	if err != nil {
		t.Fatalf("read plugin: %v", err)
	}
	if !strings.Contains(string(data), `Bun.which("engram")`) {
		t.Error("installed plugin not patched with Bun.which fallback")
	}

	// Existing MCP registration should not break a second wiring pass.
	steps = WireEngram()
	registered := 0
	for _, s := range steps {
		if strings.Contains(s.Text, "already registered") {
			registered++
		}
	}
	if registered == 0 {
		t.Error("second WireEngram did not report server already registered")
	}
}
