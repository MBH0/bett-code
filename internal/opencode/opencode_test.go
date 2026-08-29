package opencode

import (
	"encoding/json"
	"os"
	"path/filepath"
	"testing"
)

// withConfigDir points ConfigDir() at a fresh temp dir for the test and
// returns a cleanup func.
func withConfigDir(t *testing.T) string {
	t.Helper()
	dir := t.TempDir()
	t.Setenv("XDG_CONFIG_HOME", dir)
	oc := filepath.Join(dir, "opencode")
	if err := os.MkdirAll(oc, 0o755); err != nil {
		t.Fatalf("mkdir config dir: %v", err)
	}
	return oc
}

func writeConfig(t *testing.T, dir, name, content string) {
	t.Helper()
	path := filepath.Join(dir, name)
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		t.Fatalf("mkdir: %v", err)
	}
	if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
		t.Fatalf("write %s: %v", name, err)
	}
}

func readConfig(t *testing.T, dir, name string) map[string]any {
	t.Helper()
	data, err := os.ReadFile(filepath.Join(dir, name))
	if err != nil {
		t.Fatalf("read %s: %v", name, err)
	}
	var root map[string]any
	if err := json.Unmarshal(data, &root); err != nil {
		t.Fatalf("unmarshal %s: %v\n%s", name, err, data)
	}
	return root
}

// TestRegisterMCPAddsServer verifies a new MCP entry is added without
// clobbering existing config keys.
func TestRegisterMCPAddsServer(t *testing.T) {
	dir := withConfigDir(t)
	writeConfig(t, dir, "opencode.json", `{
  "mcp": { "existing": { "type": "remote", "url": "https://example.com/mcp" } }
}`)

	changed, err := RegisterMCP("engram", "/usr/local/bin/engram", []string{"mcp", "--tools=agent"})
	if err != nil {
		t.Fatalf("RegisterMCP error: %v", err)
	}
	if !changed {
		t.Fatal("expected changed=true for new server")
	}

	root := readConfig(t, dir, "opencode.json")
	mcp, ok := root["mcp"].(map[string]any)
	if !ok {
		t.Fatalf("mcp block missing: %v", root)
	}
	if _, ok := mcp["existing"]; !ok {
		t.Error("existing server was clobbered")
	}
	entry, ok := mcp["engram"].(map[string]any)
	if !ok {
		t.Fatalf("engram entry missing: %v", mcp)
	}
	if entry["type"] != "local" {
		t.Errorf("type = %v, want local", entry["type"])
	}
	cmd, ok := entry["command"].([]any)
	if !ok || len(cmd) != 3 {
		t.Fatalf("command = %v, want 3 elements", entry["command"])
	}
	if cmd[0] != "/usr/local/bin/engram" || cmd[2] != "--tools=agent" {
		t.Errorf("command = %v, want [engram mcp --tools=agent]", cmd)
	}
}

// TestRegisterMCPIdempotent verifies re-registering the same server is a no-op.
func TestRegisterMCPIdempotent(t *testing.T) {
	dir := withConfigDir(t)
	writeConfig(t, dir, "opencode.json", `{"mcp": {}}`)

	if _, err := RegisterMCP("engram", "engram", []string{"mcp"}); err != nil {
		t.Fatalf("first RegisterMCP: %v", err)
	}
	changed, err := RegisterMCP("engram", "engram", []string{"mcp"})
	if err != nil {
		t.Fatalf("second RegisterMCP: %v", err)
	}
	if changed {
		t.Error("expected changed=false for existing server")
	}
}

// TestRegisterMCPWritesJSONC verifies a .jsonc config keeps its extension and
// stays parseable after comments are stripped.
func TestRegisterMCPWritesJSONC(t *testing.T) {
	dir := withConfigDir(t)
	writeConfig(t, dir, "opencode.jsonc", `{
  // existing comment
  "mcp": {}
}`)

	if _, err := RegisterMCP("engram", "engram", nil); err != nil {
		t.Fatalf("RegisterMCP error: %v", err)
	}
	// ConfigPath() must still resolve to the .jsonc file.
	if got := filepath.Base(ConfigPath()); got != "opencode.jsonc" {
		t.Fatalf("ConfigPath = %q, want opencode.jsonc", got)
	}
	root := readConfig(t, dir, "opencode.jsonc")
	if _, ok := root["mcp"].(map[string]any); !ok {
		t.Fatal("mcp block missing after jsonc write")
	}
}

// TestHasMCP reports registered servers.
func TestHasMCP(t *testing.T) {
	dir := withConfigDir(t)
	writeConfig(t, dir, "opencode.json", `{"mcp": {"engram": {"type": "local"}}}`)
	if !HasMCP("engram") {
		t.Error("HasMCP(engram) = false, want true")
	}
	if HasMCP("nonexistent") {
		t.Error("HasMCP(nonexistent) = true, want false")
	}
}

// TestAddPlugin appends to tui.json without duplicates.
func TestAddPlugin(t *testing.T) {
	dir := withConfigDir(t)
	writeConfig(t, dir, "tui.json", `{"plugin": ["@opencode-ai/plugin-bash"]}`)

	changed, err := AddPlugin("@opencode-ai/plugin-engram")
	if err != nil {
		t.Fatalf("AddPlugin error: %v", err)
	}
	if !changed {
		t.Error("expected changed=true for new plugin")
	}
	if !HasPlugin("@opencode-ai/plugin-engram") {
		t.Error("HasPlugin(new) = false, want true")
	}

	changed, err = AddPlugin("@opencode-ai/plugin-engram")
	if err != nil {
		t.Fatalf("second AddPlugin: %v", err)
	}
	if changed {
		t.Error("expected changed=false for existing plugin")
	}
}

// TestStripJSONC removes comments but keeps quoted strings intact.
func TestStripJSONC(t *testing.T) {
	src := []byte(`{
  // line comment
  "a": "http://example.com/x", /* block */
  "b": "// not a comment"
}`)
	got := string(stripJSONC(src))
	var root map[string]any
	if err := json.Unmarshal([]byte(got), &root); err != nil {
		t.Fatalf("stripped output not valid JSON: %v\n%s", err, got)
	}
	if root["a"] != "http://example.com/x" {
		t.Errorf("a = %v", root["a"])
	}
	if root["b"] != "// not a comment" {
		t.Errorf("b = %v", root["b"])
	}
}

// TestExistingCommandsAndSkills lists installed files from the config dir.
func TestExistingCommandsAndSkills(t *testing.T) {
	dir := withConfigDir(t)
	writeConfig(t, dir, "commands/doctor.md", "# /doctor")
	writeConfig(t, dir, "commands/mem.md", "# /mem")
	writeConfig(t, dir, "skills/memory-protocol/SKILL.md", "# Memory Protocol")

	cmds := ExistingCommands()
	if len(cmds) != 2 {
		t.Fatalf("ExistingCommands = %v, want 2", cmds)
	}
	skills := ExistingSkills()
	if len(skills) != 1 || skills[0] != "memory-protocol" {
		t.Fatalf("ExistingSkills = %v, want [memory-protocol]", skills)
	}
}
