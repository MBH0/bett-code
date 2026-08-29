// Package opencode owns the OpenCode configuration surface: where its config
// lives, how to read/merge opencode.json(/.jsonc) safely, and how to register
// MCP servers and plugins without clobbering user settings.
package opencode

import (
	"bytes"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"sort"
	"strings"
)

// LookPath is a package-level seam so tests can stub binary detection.
var LookPath = exec.LookPath

// OpenCodeConfigDir is the cross-package alias used by the model package to
// compose multi-agent paths. Identical to ConfigDir; kept separate so callers
// do not need to import internal/opencode just for path composition.
func OpenCodeConfigDir() string { return opencodeConfigDir() }

// ConfigDir returns OpenCode's global config directory. OpenCode always uses
// ~/.config/opencode (or $XDG_CONFIG_HOME/opencode) on every platform.
func ConfigDir() string {
	return opencodeConfigDir()
}

// opencodeConfigDir is the unexported worker; exported as ConfigDir so that
// the model package can compose multi-agent paths without import cycles.
func opencodeConfigDir() string {
	if xdg := os.Getenv("XDG_CONFIG_HOME"); xdg != "" {
		return filepath.Join(xdg, "opencode")
	}
	home, err := os.UserHomeDir()
	if err != nil {
		return "opencode"
	}
	return filepath.Join(home, ".config", "opencode")
}

// ConfigPath returns opencode.jsonc when present, otherwise opencode.json.
func ConfigPath() string {
	dir := ConfigDir()
	if _, err := os.Stat(filepath.Join(dir, "opencode.jsonc")); err == nil {
		return filepath.Join(dir, "opencode.jsonc")
	}
	return filepath.Join(dir, "opencode.json")
}

// TUIConfigPath returns tui.jsonc when present, otherwise tui.json.
func TUIConfigPath() string {
	dir := ConfigDir()
	if _, err := os.Stat(filepath.Join(dir, "tui.jsonc")); err == nil {
		return filepath.Join(dir, "tui.jsonc")
	}
	return filepath.Join(dir, "tui.json")
}

// PluginDir returns the directory for local .ts plugin files.
func PluginDir() string {
	return filepath.Join(ConfigDir(), "plugins")
}

// CommandsDir returns the directory for slash-command markdown files.
func CommandsDir() string {
	return filepath.Join(ConfigDir(), "commands")
}

// SkillsDir returns the directory for skill folders (each with a SKILL.md).
func SkillsDir() string {
	return filepath.Join(ConfigDir(), "skills")
}

// Detect reports whether the opencode binary is on PATH.
func Detect() (found bool, path string) {
	p, err := LookPath("opencode")
	if err != nil || p == "" {
		return false, ""
	}
	return true, p
}

// readFileJSONC reads a config file and unmarshals it as JSON, stripping
// JSONC comments while preserving everything else. Missing files yield an
// empty map without error.
func readFileJSONC(path string) (map[string]any, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		if os.IsNotExist(err) {
			return map[string]any{}, nil
		}
		return nil, err
	}

	cleaned := stripJSONC(data)
	root := map[string]any{}
	if len(bytes.TrimSpace(cleaned)) == 0 {
		return root, nil
	}
	if err := json.Unmarshal(cleaned, &root); err != nil {
		return nil, fmt.Errorf("parse %s: %w", path, err)
	}
	return root, nil
}

// writeFileJSON marshals the config back to disk with two-space indentation,
// preserving the original file name (jsonc stays jsonc).
func writeFileJSON(path string, root map[string]any) error {
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

// stripJSONC removes // line comments and /* */ block comments while keeping
// content inside quoted strings intact. JSONC is a superset of JSON, so the
// result is still valid JSON.
func stripJSONC(src []byte) []byte {
	var out []byte
	inString := false
	escaped := false
	for i := 0; i < len(src); i++ {
		c := src[i]
		if inString {
			out = append(out, c)
			switch {
			case escaped:
				escaped = false
			case c == '\\':
				escaped = true
			case c == '"':
				inString = false
			}
			continue
		}
		switch {
		case c == '"':
			inString = true
			out = append(out, c)
		case c == '/' && i+1 < len(src) && src[i+1] == '/':
			for i < len(src) && src[i] != '\n' {
				i++
			}
			out = append(out, '\n')
		case c == '/' && i+1 < len(src) && src[i+1] == '*':
			for i+1 < len(src) && !(src[i] == '*' && src[i+1] == '/') {
				i++
			}
			i++ // consume closing '/'
		default:
			out = append(out, c)
		}
	}
	return out
}

// mcpBlock returns the "mcp" object from a config, creating it if missing.
func mcpBlock(root map[string]any) map[string]any {
	raw, ok := root["mcp"]
	if !ok {
		m := map[string]any{}
		root["mcp"] = m
		return m
	}
	if m, ok := raw.(map[string]any); ok {
		return m
	}
	m := map[string]any{}
	root["mcp"] = m
	return m
}

// HasMCP reports whether the given server name is registered in opencode.json.
func HasMCP(name string) bool {
	root, err := readFileJSONC(ConfigPath())
	if err != nil {
		return false
	}
	_, ok := mcpBlock(root)[name]
	return ok
}

// RegisterMCP adds (or replaces) a local MCP server entry under the "mcp"
// object, preserving every other key in the config. It is a no-op when the
// server is already registered.
func RegisterMCP(name string, cmd string, args []string) (changed bool, err error) {
	path := ConfigPath()
	root, err := readFileJSONC(path)
	if err != nil {
		return false, err
	}

	block := mcpBlock(root)
	if _, exists := block[name]; exists {
		return false, nil
	}

	entry := map[string]any{
		"type":    "local",
		"command": append([]string{cmd}, args...),
		"enabled": true,
	}
	block[name] = entry

	if err := writeFileJSON(path, root); err != nil {
		return false, err
	}
	return true, nil
}

// HasPlugin reports whether the given package/plugin is listed in tui.json.
func HasPlugin(pkg string) bool {
	root, err := readFileJSONC(TUIConfigPath())
	if err != nil {
		return false
	}
	raw, ok := root["plugin"]
	if !ok {
		return false
	}
	list, ok := raw.([]any)
	if !ok {
		return false
	}
	for _, item := range list {
		if s, ok := item.(string); ok && s == pkg {
			return true
		}
	}
	return false
}

// AddPlugin appends a plugin package to tui.json's "plugin" array if missing.
func AddPlugin(pkg string) (changed bool, err error) {
	path := TUIConfigPath()
	root, err := readFileJSONC(path)
	if err != nil {
		return false, err
	}

	var list []any
	if raw, ok := root["plugin"]; ok {
		if l, ok := raw.([]any); ok {
			list = l
		}
	}
	for _, item := range list {
		if s, ok := item.(string); ok && s == pkg {
			return false, nil
		}
	}
	list = append(list, pkg)
	root["plugin"] = list

	if err := writeFileJSON(path, root); err != nil {
		return false, err
	}
	return true, nil
}

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
