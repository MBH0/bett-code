// Package harness orchestrates the concrete operations the TUI drives:
// detecting the current state, wiring Engram into OpenCode, and installing
// slash commands and skills. The TUI only renders; all side effects live here.
package harness

import (
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"bett-ai-harness/internal/assets"
	"bett-ai-harness/internal/engram"
	"bett-ai-harness/internal/model"
	"bett-ai-harness/internal/opencode"
)

// Step is one line of an operation result, shown as ✓/✗ in the TUI.
type Step struct {
	OK   bool
	Text string
}

// DetectStatus assembles the current system state for the welcome screen.
func DetectStatus() model.Status {
	ocFound, ocBin := opencode.Detect()
	egFound, egBin := engram.DetectBinary()

	return model.Status{
		OpenCode: model.OpenCodeStatus{
			BinaryFound:     ocFound,
			BinaryPath:      ocBin,
			ConfigDir:       opencode.ConfigDir(),
			HasEngramMCP:    opencode.HasMCP("engram"),
			HasEngramPlugin: engram.PluginInstalled(opencode.PluginDir()),
			Commands:        opencode.ExistingCommands(),
			Skills:          opencode.ExistingSkills(),
		},
		Engram: model.EngramStatus{
			BinaryFound: egFound,
			BinaryPath:  egBin,
			Port:        engram.DefaultPort,
			ServerUp:    engram.ServerRunning(engram.DefaultPort),
		},
	}
}

// WireEngram installs the Engram plugin, registers the MCP server in
// opencode.json, and makes sure `engram serve` is running. Every step is
// independent: one failure does not block the rest.
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

	changed, err := opencode.RegisterMCP("engram", engram.ResolveCommand(), []string{"mcp", "--tools=agent"})
	switch {
	case err != nil:
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Register MCP in opencode.json: %v", err)})
	case changed:
		steps = append(steps, Step{OK: true, Text: "MCP server 'engram' registered in opencode.json"})
	default:
		steps = append(steps, Step{OK: true, Text: "MCP server 'engram' already registered"})
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

// InstallAssets writes slash commands and skills into the OpenCode config dir.
func InstallAssets() []Step {
	var steps []Step
	missing := 0

	cmds, err := assets.Commands()
	if err != nil {
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("Load commands: %v", err)})
	} else {
		var names []string
		for _, c := range cmds {
			dest := filepath.Join(opencode.CommandsDir(), c.Name+".md")
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
			dir := filepath.Join(opencode.SkillsDir(), s.Name)
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

	if missing > 0 {
		steps = append(steps, Step{OK: false, Text: fmt.Sprintf("%d files could not be written", missing)})
	}
	return steps
}
