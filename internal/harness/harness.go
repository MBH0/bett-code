// Package harness orchestrates the concrete operations the TUI drives:
// detecting the current state across all supported agents, wiring Engram
// into the selected agent, installing slash commands and skills, and
// managing SDD profiles, MCP servers, and review mode. The TUI only
// renders; all side effects live here.
package harness

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"bett-ai-harness/internal/assets"
	"bett-ai-harness/internal/claudecode"
	"bett-ai-harness/internal/engram"
	"bett-ai-harness/internal/model"
	"bett-ai-harness/internal/opencode"
)

// Step is one line of an operation result, shown as ✓/✗ in the TUI.
type Step struct {
	OK   bool
	Text string
}

// ServerName is the MCP server name the harness registers in each agent.
const ServerName = "bett-ai"

// ─── Detection ───────────────────────────────────────────────────────────────

// DetectStatus assembles the current system state across every supported
// agent for the welcome screen.
func DetectStatus() model.Status {
	ocFound, ocBin := opencode.Detect()
	clFound, clBin := claudecode.Detect()
	egFound, egBin := engram.DetectBinary()

	// Pick the first agent whose binary is present; otherwise default to
	// OpenCode so the welcome screen always has a target.
	selected := model.AgentOpenCode
	if ocFound {
		selected = model.AgentOpenCode
	} else if clFound {
		selected = model.AgentClaudeCode
	}

	return model.Status{
		OpenCode: model.OpenCodeStatus{
			BinaryFound:     ocFound,
			BinaryPath:      ocBin,
			ConfigDir:       opencode.ConfigDir(),
			HasEngramMCP:    opencode.HasMCP(ServerName),
			HasEngramPlugin: engram.PluginInstalled(opencode.PluginDir()),
			Commands:        opencode.ExistingCommands(),
			Skills:          opencode.ExistingSkills(),
		},
		Claude: model.ClaudeStatus{
			BinaryFound:  clFound,
			BinaryPath:   clBin,
			ConfigDir:    claudecode.ConfigDir(),
			HasEngramMCP: claudecode.HasMCP(ServerName),
			Commands:     claudecode.ExistingCommands(),
			Skills:       claudecode.ExistingSkills(),
			OutputStyles: claudecode.ExistingOutputStyles(),
		},
		Engram: model.EngramStatus{
			BinaryFound: egFound,
			BinaryPath:  egBin,
			Port:        engram.DefaultPort,
			ServerUp:    engram.ServerRunning(engram.DefaultPort),
		},
		SelectedAgent: selected,
		ReviewMode:    loadReviewMode(),
		SDDProfiles:   loadSDDProfiles(),
	}
}

// ─── Agent-agnostic wiring ───────────────────────────────────────────────────

// WireAgent installs the Engram plugin (when applicable) and registers the
// MCP server in the selected agent's config. Steps are independent — one
// failure does not block the rest.
func WireAgent(kind model.AgentKind) []Step {
	switch kind {
	case model.AgentClaudeCode:
		return wireClaudeCode()
	default:
		return WireEngram()
	}
}

func wireClaudeCode() []Step {
	var steps []Step

	found, bin := engram.DetectBinary()
	if found {
		steps = append(steps, Step{OK: true, Text: fmt.Sprintf("Engram binary: %s", bin)})
	} else {
		steps = append(steps, Step{OK: false, Text: "Engram binary not found on PATH. Install it: brew install gentleman-programming/tap/engram"})
	}

	changed, err := claudecode.RegisterMCP(ServerName, engram.ResolveCommand(), []string{"mcp", "--tools=agent"})
	switch {
	case err != nil:
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Register MCP in mcp.json: %v", err)})
	case changed:
		steps = append(steps, Step{OK: true, Text: fmt.Sprintf("MCP server '%s' registered in Claude Code mcp.json", ServerName)})
	default:
		steps = append(steps, Step{OK: true, Text: fmt.Sprintf("MCP server '%s' already registered", ServerName)})
	}

	// Claude Code writes CLAUDE.md sections managed by `gentle-ai` style
	// markdown markers; we append a managed block identifying the harness.
	if err := writeClaudeMDSection(); err != nil {
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Update CLAUDE.md: %v", err)})
	} else {
		steps = append(steps, Step{OK: true, Text: "CLAUDE.md section updated"})
	}

	if !found {
		steps = append(steps, Step{OK: false, Text: "Skipping `engram serve` (binary not installed)"})
		return steps
	}
	started, err := engram.EnsureServer(engram.DefaultPort)
	switch {
	case err != nil:
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Start engram serve: %v", err)})
	case started:
		steps = append(steps, Step{OK: true, Text: "Started `engram serve` on 127.0.0.1:7437"})
	default:
		steps = append(steps, Step{OK: true, Text: "`engram serve` already running on 127.0.0.1:7437"})
	}

	return steps
}

// WireEngram installs the Engram plugin, registers the MCP server in
// opencode.json, and makes sure `engram serve` is running. Kept for
// backwards compatibility with the original OpenCode-only flow.
func WireEngram() []Step {
	var steps []Step

	found, bin := engram.DetectBinary()
	if found {
		steps = append(steps, Step{OK: true, Text: fmt.Sprintf("Engram binary: %s", bin)})
	} else {
		steps = append(steps, Step{OK: false, Text: "Engram binary not found on PATH. Install it: brew install gentleman-programming/tap/engram"})
	}

	pluginSrc, err := assets.PluginSource()
	if err != nil {
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Embedded plugin unavailable: %v", err)})
	} else {
		dest, err := engram.InstallPlugin(opencode.PluginDir(), pluginSrc)
		if err != nil {
			steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Install plugin: %v", err)})
		} else {
			steps = append(steps, Step{OK: true, Text: fmt.Sprintf("Plugin written: %s", dest)})
		}
	}

	changed, err := opencode.RegisterMCP(ServerName, engram.ResolveCommand(), []string{"mcp", "--tools=agent"})
	switch {
	case err != nil:
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Register MCP in opencode.json: %v", err)})
	case changed:
		steps = append(steps, Step{OK: true, Text: fmt.Sprintf("MCP server '%s' registered in opencode.json", ServerName)})
	default:
		steps = append(steps, Step{OK: true, Text: fmt.Sprintf("MCP server '%s' already registered", ServerName)})
	}

	if !found {
		steps = append(steps, Step{OK: false, Text: "Skipping `engram serve` (binary not installed)"})
		return steps
	}
	started, err := engram.EnsureServer(engram.DefaultPort)
	switch {
	case err != nil:
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Start engram serve: %v", err)})
	case started:
		steps = append(steps, Step{OK: true, Text: "Started `engram serve` on 127.0.0.1:7437"})
	default:
		steps = append(steps, Step{OK: true, Text: "`engram serve` already running on 127.0.0.1:7437"})
	}

	return steps
}

// ─── Asset installation ─────────────────────────────────────────────────────

// InstallAssets writes slash commands and skills into the selected agent's
// config dir.
func InstallAssets() []Step { return InstallAssetsForAgent(model.AgentOpenCode) }

// InstallAssetsForAgent is the polymorphic form.
func InstallAssetsForAgent(kind model.AgentKind) []Step {
	var steps []Step

	cmdsDir, skillsDir, err := agentPaths(kind)
	if err != nil {
		steps = append(steps, Step{OK: false, Text: err.Error()})
		return steps
	}

	cmds, err := assets.Commands()
	if err != nil {
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Load commands: %v", err)})
	} else {
		var names []string
		for _, c := range cmds {
			dest := filepath.Join(cmdsDir, c.Name+".md")
			if err := os.MkdirAll(filepath.Dir(dest), 0o755); err != nil {
				steps = append(steps, Step{OK: false, Text: fmt.Sprintf("mkdir commands: %v", err)})
				continue
			}
			if err := os.WriteFile(dest, c.Source, 0o644); err != nil {
				steps = append(steps, Step{OK: false, Text: fmt.Sprintf("write /%s: %v", c.Name, err)})
				continue
			}
			names = append(names, "/"+c.Name)
		}
		sort.Strings(names)
		steps = append(steps, Step{OK: len(names) > 0, Text: "Slash commands installed: " + strings.Join(names, ", ")})
	}

	skills, err := assets.Skills()
	if err != nil {
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Load skills: %v", err)})
	} else {
		var names []string
		for _, s := range skills {
			dir := filepath.Join(skillsDir, s.Name)
			dest := filepath.Join(dir, "SKILL.md")
			if err := os.MkdirAll(dir, 0o755); err != nil {
				steps = append(steps, Step{OK: false, Text: fmt.Sprintf("mkdir skill %s: %v", s.Name, err)})
				continue
			}
			if err := os.WriteFile(dest, s.Source, 0o644); err != nil {
				steps = append(steps, Step{OK: false, Text: fmt.Sprintf("write skill %s: %v", s.Name, err)})
				continue
			}
			names = append(names, s.Name)
		}
		sort.Strings(names)
		steps = append(steps, Step{OK: len(names) > 0, Text: "Skills installed: " + strings.Join(names, ", ")})
	}

	return steps
}

// agentPaths returns (commandsDir, skillsDir, error) for the given agent.
func agentPaths(kind model.AgentKind) (string, string, error) {
	switch kind {
	case model.AgentOpenCode:
		return opencode.CommandsDir(), opencode.SkillsDir(), nil
	case model.AgentClaudeCode:
		return claudecode.CommandsDir(), claudecode.SkillsDir(), nil
	default:
		return "", "", fmt.Errorf("unknown agent: %s", kind)
	}
}

// ─── SDD profiles (gentle-orchestrator style) ───────────────────────────────

const sddProfilesPath = "sdd-profiles.json"

// sddProfilesFile returns the per-agent config dir path for SDD profiles.
func sddProfilesFile(kind model.AgentKind) string {
	return filepath.Join(model.AgentConfigDir(kind), sddProfilesPath)
}

// loadSDDProfiles reads the configured profiles for the active agent. Missing
// files yield the default profile set.
func loadSDDProfiles() []model.SDDProfile {
	return loadSDDProfilesFor(model.AgentOpenCode)
}

// loadSDDProfilesFor loads profiles for a specific agent.
func loadSDDProfilesFor(kind model.AgentKind) []model.SDDProfile {
	path := sddProfilesFile(kind)
	data, err := os.ReadFile(path)
	if err != nil {
		return defaultSDDProfiles()
	}
	var profiles []model.SDDProfile
	if err := json.Unmarshal(data, &profiles); err != nil {
		return defaultSDDProfiles()
	}
	if len(profiles) == 0 {
		return defaultSDDProfiles()
	}
	return profiles
}

// saveSDDProfilesFor persists the profile list for an agent.
func saveSDDProfilesFor(kind model.AgentKind, profiles []model.SDDProfile) error {
	path := sddProfilesFile(kind)
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	data, err := json.MarshalIndent(profiles, "", "  ")
	if err != nil {
		return err
	}
	data = append(data, '\n')
	return os.WriteFile(path, data, 0o644)
}

// defaultSDDProfiles returns the gentle-orchestrator default profile set.
func defaultSDDProfiles() []model.SDDProfile {
	return []model.SDDProfile{
		{Name: "default", Phase: "orchestrator", Model: "anthropic/claude-sonnet-4-20250514", Enabled: true},
		{Name: "cheap", Phase: "apply", Model: "openrouter/qwen/qwen3-30b-a3b:free", Enabled: false},
		{Name: "premium", Phase: "design", Model: "anthropic/claude-sonnet-4-20250514", Enabled: false},
	}
}

// ToggleSDDProfile enables/disables the named profile for the active agent.
func ToggleSDDProfile(kind model.AgentKind, name string) (model.SDDProfile, error) {
	profiles := loadSDDProfilesFor(kind)
	var target model.SDDProfile
	for i := range profiles {
		if profiles[i].Name == name {
			profiles[i].Enabled = !profiles[i].Enabled
			target = profiles[i]
			break
		}
	}
	if target.Name == "" {
		return target, fmt.Errorf("profile %q not found", name)
	}
	if err := saveSDDProfilesFor(kind, profiles); err != nil {
		return target, err
	}
	return target, nil
}

// ─── Review mode (RDD) ──────────────────────────────────────────────────────

const reviewModePath = "review-mode.json"

// reviewModeFile returns the per-agent path for the review-mode state file.
func reviewModeFile(kind model.AgentKind) string {
	return filepath.Join(model.AgentConfigDir(kind), reviewModePath)
}

// loadReviewMode returns the current review mode for the OpenCode agent.
func loadReviewMode() model.ReviewMode {
	return loadReviewModeFor(model.AgentOpenCode)
}

// loadReviewModeFor returns the review mode for a specific agent.
func loadReviewModeFor(kind model.AgentKind) model.ReviewMode {
	path := reviewModeFile(kind)
	data, err := os.ReadFile(path)
	if err != nil {
		return model.ReviewDisabled
	}
	var rm model.ReviewMode
	if err := json.Unmarshal(data, &rm); err != nil {
		return model.ReviewDisabled
	}
	return rm
}

// SetReviewModeFor persists the new review mode for the given agent.
func SetReviewModeFor(kind model.AgentKind, mode model.ReviewMode) error {
	path := reviewModeFile(kind)
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	data, err := json.MarshalIndent(mode, "", "  ")
	if err != nil {
		return err
	}
	data = append(data, '\n')
	return os.WriteFile(path, data, 0o644)
}

// ─── CLAUDE.md managed section ──────────────────────────────────────────────

const claudeMDSection = `<!-- gentle-ai:bett-harness -->
This agent is configured by the bett-ai-harness. Engram persistent memory is
available via the bett-ai MCP server. Skill registry: /skill-registry.
<!-- /gentle-ai:bett-harness -->`

// writeClaudeMDSection appends the managed harness section to CLAUDE.md if
// it is not already present (idempotent).
func writeClaudeMDSection() error {
	path := claudecode.CLAUDEMDPath()
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	existing, err := os.ReadFile(path)
	if err != nil && !os.IsNotExist(err) {
		return err
	}
	if strings.Contains(string(existing), "<!-- gentle-ai:bett-harness -->") {
		return nil
	}
	f, err := os.OpenFile(path, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0o644)
	if err != nil {
		return err
	}
	defer f.Close()
	if len(existing) > 0 && !strings.HasSuffix(string(existing), "\n") {
		if _, err := f.WriteString("\n"); err != nil {
			return err
		}
	}
	_, err = f.WriteString("\n" + claudeMDSection + "\n")
	return err
}
