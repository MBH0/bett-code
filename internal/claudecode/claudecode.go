// Package claudecode owns the Claude Code configuration surface: where its
// config lives, how to read mcp.json safely, and how to register MCP servers
// without clobbering user settings. Mirrors internal/opencode for symmetry.
package claudecode

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"sort"
	"strings"
)

// LookPath is a package-level seam so tests can stub binary detection.
var LookPath = exec.LookPath

// ConfigDir returns Claude Code's global config directory:
//   - macOS/Linux: ~/.claude/
//   - Windows:     %USERPROFILE%\.claude\
func ConfigDir() string {
	if runtime.GOOS == "windows" {
		home, err := os.UserHomeDir()
		if err != nil {
			return filepath.Join(".claude")
		}
		return filepath.Join(home, ".claude")
	}
	home, err := os.UserHomeDir()
	if err != nil {
		return ".claude"
	}
	return filepath.Join(home, ".claude")
}

// ConfigPath returns the settings file path. Claude Code stores MCP servers
// in a separate mcp.json file, so settings.json holds non-MCP configuration.
func ConfigPath() string {
	return filepath.Join(ConfigDir(), "settings.json")
}

// MCPConfigPath returns the dedicated mcp.json file Claude Code reads for
// MCP server registrations.
func MCPConfigPath() string {
	return filepath.Join(ConfigDir(), "mcp.json")
}

// CommandsDir returns the directory for slash-command markdown files.
func CommandsDir() string {
	return filepath.Join(ConfigDir(), "commands")
}

// SkillsDir returns the directory for skill folders (each with a SKILL.md).
func SkillsDir() string {
	return filepath.Join(ConfigDir(), "skills")
}

// OutputStylesDir returns the directory for output-style markdown files.
func OutputStylesDir() string {
	return filepath.Join(ConfigDir(), "output-styles")
}

// CLAUDEMDPath returns the path to CLAUDE.md (system prompt markdown).
func CLAUDEMDPath() string {
	return filepath.Join(ConfigDir(), "CLAUDE.md")
}

// Detect reports whether the `claude` binary is on PATH.
func Detect() (found bool, path string) {
	p, err := LookPath("claude")
	if err != nil || p == "" {
		return false, ""
	}
	return true, p
}

// ─── MCP JSON I/O ────────────────────────────────────────────────────────────

// readJSON reads a JSON file into a map. Missing files yield an empty map.
func readJSON(path string) (map[string]any, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		if os.IsNotExist(err) {
			return map[string]any{}, nil
		}
		return nil, err
	}
	root := map[string]any{}
	if len(data) == 0 {
		return root, nil
	}
	if err := json.Unmarshal(data, &root); err != nil {
		return nil, fmt.Errorf("parse %s: %w", path, err)
	}
	return root, nil
}

// writeJSON marshals the config back to disk with two-space indentation.
func writeJSON(path string, root map[string]any) error {
	out, err := json.MarshalIndent(root, "", "  ")
	if err != nil {
		return err
	}
	out = append(out, '\n')
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	return os.WriteFile(path, out, 0o644)
}

// mcpServersBlock returns the "mcpServers" object, creating it if missing.
func mcpServersBlock(root map[string]any) map[string]any {
	raw, ok := root["mcpServers"]
	if !ok {
		m := map[string]any{}
		root["mcpServers"] = m
		return m
	}
	if m, ok := raw.(map[string]any); ok {
		return m
	}
	m := map[string]any{}
	root["mcpServers"] = m
	return m
}

// HasMCP reports whether the given server name is registered in mcp.json.
func HasMCP(name string) bool {
	root, err := readJSON(MCPConfigPath())
	if err != nil {
		return false
	}
	_, ok := mcpServersBlock(root)[name]
	return ok
}

// RegisterMCP adds a local stdio MCP server entry under "mcpServers". It is
// a no-op when the server is already registered.
func RegisterMCP(name string, cmd string, args []string) (changed bool, err error) {
	path := MCPConfigPath()
	root, err := readJSON(path)
	if err != nil {
		return false, err
	}
	block := mcpServersBlock(root)
	if _, exists := block[name]; exists {
		return false, nil
	}
	entry := map[string]any{
		"type":    "stdio",
		"command": cmd,
		"args":    args,
	}
	block[name] = entry
	if err := writeJSON(path, root); err != nil {
		return false, err
	}
	return true, nil
}

// ─── Slash command / skill discovery ────────────────────────────────────────

// ExistingCommands lists slash-command files already installed.
func ExistingCommands() []string {
	entries, err := os.ReadDir(CommandsDir())
	if err != nil {
		return nil
	}
	var names []string
	for _, e := range entries {
		if !e.IsDir() && strings.HasSuffix(e.Name(), ".md") {
			names = append(names, strings.TrimSuffix(e.Name(), ".md"))
		}
	}
	sort.Strings(names)
	return names
}

// ExistingSkills lists skill folders already installed (dirs with SKILL.md).
func ExistingSkills() []string {
	entries, err := os.ReadDir(SkillsDir())
	if err != nil {
		return nil
	}
	var names []string
	for _, e := range entries {
		if e.IsDir() {
			if _, err := os.Stat(filepath.Join(SkillsDir(), e.Name(), "SKILL.md")); err == nil {
				names = append(names, e.Name())
			}
		}
	}
	sort.Strings(names)
	return names
}

// ExistingOutputStyles lists output-style markdown files already installed.
func ExistingOutputStyles() []string {
	entries, err := os.ReadDir(OutputStylesDir())
	if err != nil {
		return nil
	}
	var names []string
	for _, e := range entries {
		if !e.IsDir() && strings.HasSuffix(e.Name(), ".md") {
			names = append(names, strings.TrimSuffix(e.Name(), ".md"))
		}
	}
	sort.Strings(names)
	return names
}
