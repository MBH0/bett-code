// Package app is the entrypoint wiring: flag handling, version/help output,
// and launching the Bubbletea program that drives the harness TUI. Also
// exposes a small non-interactive CLI surface used by the install scripts
// to seed SDD profiles and per-phase model assignments.
package app

import (
	"encoding/json"
	"fmt"
	"io"
	"os"

	tea "github.com/charmbracelet/bubbletea"

	"github.com/MBH0/bett-code/internal/harness"
	"github.com/MBH0/bett-code/internal/model"
	"github.com/MBH0/bett-code/internal/tui"
)

// Version is the build version of the harness, set at compile time.
const Version = "0.1.0"

// usage is printed for --help.
const usage = `bett-ai-harness — wire bett-ai persistent memory into OpenCode

Usage:
  bett-ai-harness                       launch the interactive harness (TUI)
  bett-ai-harness --version             print the version and exit
  bett-ai-harness --help                show this help and exit

Non-interactive subcommands (used by the install scripts):
  bett-ai-harness seed-profiles [agent]    seed default SDD profile set
                                            (default agent: opencode)
  bett-ai-harness list-profiles [agent]    print profiles as JSON
  bett-ai-harness set-model <agent> <profile> <phase> <model-id>
                                          assign a model to a phase
  bett-ai-harness get-model <agent> <phase>
                                          print the active model for a phase
  bett-ai-harness toggle-profile <agent> <profile>
                                          flip the enabled flag on a profile
  bett-ai-harness activate-profile <agent> <profile>
                                          enable <profile>, disable the others

Phase names: orchestrator, explore, propose, spec, design, tasks,
             apply, verify, archive.

The interactive TUI detects your OpenCode and bett-ai installs, then offers:
  1. Wire bett-ai (plugin + MCP + server)
  2. Install Commands & Skills
  3. Re-sync (both)
  4. Select Agent (OpenCode / Claude Code)
  5. SDD Profiles (multi-mode)
  6. MCP Servers
  7. Review Mode (RDD)
  8. Doctor / Health Check
`

// Run parses command-line flags. Non-interactive flags print to w and return
// nil; otherwise the TUI runs to completion. Errors are written to errW.
func Run(args []string, w io.Writer, errW io.Writer) error {
	if len(args) == 0 {
		return runTUI(w, errW)
	}
	switch args[0] {
	case "-v", "--version":
		fmt.Fprintf(w, "bett-ai-harness %s\n", Version)
		return nil
	case "-h", "--help":
		fmt.Fprint(w, usage)
		return nil
	case "seed-profiles":
		return runSeedProfiles(args[1:], w, errW)
	case "list-profiles":
		return runListProfiles(args[1:], w, errW)
	case "set-model":
		return runSetModel(args[1:], w, errW)
	case "get-model":
		return runGetModel(args[1:], w, errW)
	case "toggle-profile":
		return runToggleProfile(args[1:], w, errW)
	case "activate-profile":
		return runActivateProfile(args[1:], w, errW)
	}
	fmt.Fprintf(errW, "unknown command %q\n\n", args[0])
	fmt.Fprint(errW, usage)
	return fmt.Errorf("unknown command %q", args[0])
}

func runTUI(w io.Writer, errW io.Writer) error {
	p := tea.NewProgram(tui.New(), tea.WithAltScreen())
	if _, err := p.Run(); err != nil {
		fmt.Fprintf(errW, "harness error: %v\n", err)
		return err
	}
	return nil
}

// ─── Non-interactive subcommands ────────────────────────────────────────────

// parseAgent extracts the optional agent argument, defaulting to opencode.
func parseAgent(args []string) (model.AgentKind, error) {
	if len(args) == 0 {
		return model.AgentOpenCode, nil
	}
	switch args[0] {
	case "opencode":
		return model.AgentOpenCode, nil
	case "claude-code", "claude":
		return model.AgentClaudeCode, nil
	default:
		return "", fmt.Errorf("unknown agent %q (expected: opencode | claude-code)", args[0])
	}
}

func runSeedProfiles(args []string, w io.Writer, errW io.Writer) error {
	agent, err := parseAgent(args)
	if err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	// Triggering loadSDDProfilesFor with no existing file will return defaults
	// and then save them — but that happens inside the load path. The simplest
	// explicit seed is: read whatever is there (defaults if absent), then
	// save. That ensures the file lands on disk and the user can edit it.
	profiles := harness.LoadSDDProfilesFor(agent)
	if len(profiles) == 0 {
		profiles = harness.DefaultSDDProfiles()
	}
	if err := harness.SaveSDDProfilesFor(agent, profiles); err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	fmt.Fprintf(w, "Seeded %d SDD profiles for %s at %s\n",
		len(profiles), model.AgentLabel(agent), harness.SDDProfilesFileFor(agent))
	for _, p := range profiles {
		state := "disabled"
		if p.Enabled {
			state = "enabled"
		}
		fmt.Fprintf(w, "  • %-10s [%s]\n", p.Name, state)
		for _, phase := range model.AllPhases {
			if m, ok := p.Models[phase]; ok && m != "" {
				fmt.Fprintf(w, "      %-12s %s\n", phase, m)
			}
		}
	}
	return nil
}

func runListProfiles(args []string, w io.Writer, errW io.Writer) error {
	agent, err := parseAgent(args)
	if err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	profiles := harness.LoadSDDProfilesFor(agent)
	enc := json.NewEncoder(w)
	enc.SetIndent("", "  ")
	return enc.Encode(profiles)
}

func runSetModel(args []string, w io.Writer, errW io.Writer) error {
	if len(args) != 4 {
		fmt.Fprintf(errW, "usage: bett-ai-harness set-model <agent> <profile> <phase> <model-id>\n")
		return fmt.Errorf("expected 4 arguments, got %d", len(args))
	}
	agent, err := parseAgent([]string{args[0]})
	if err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	profileName := args[1]
	phase := model.SDDPhase(args[2])
	modelID := args[3]
	if !validPhase(phase) {
		fmt.Fprintf(errW, "unknown phase %q (valid: %v)\n", phase, model.AllPhases)
		return fmt.Errorf("unknown phase %q", phase)
	}
	if err := harness.SetProfilePhaseModel(agent, profileName, phase, modelID); err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	fmt.Fprintf(w, "Set %s/%s/%s = %s\n", model.AgentLabel(agent), profileName, phase, modelID)
	return nil
}

func runGetModel(args []string, w io.Writer, errW io.Writer) error {
	if len(args) != 2 {
		fmt.Fprintf(errW, "usage: bett-ai-harness get-model <agent> <phase>\n")
		return fmt.Errorf("expected 2 arguments, got %d", len(args))
	}
	agent, err := parseAgent([]string{args[0]})
	if err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	phase := model.SDDPhase(args[1])
	if !validPhase(phase) {
		fmt.Fprintf(errW, "unknown phase %q (valid: %v)\n", phase, model.AllPhases)
		return fmt.Errorf("unknown phase %q", phase)
	}
	m := harness.ProfileForPhase(agent, phase)
	fmt.Fprintln(w, m)
	return nil
}

func runToggleProfile(args []string, w io.Writer, errW io.Writer) error {
	if len(args) != 2 {
		fmt.Fprintf(errW, "usage: bett-ai-harness toggle-profile <agent> <profile>\n")
		return fmt.Errorf("expected 2 arguments, got %d", len(args))
	}
	agent, err := parseAgent([]string{args[0]})
	if err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	p, err := harness.ToggleSDDProfile(agent, args[1])
	if err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	state := "disabled"
	if p.Enabled {
		state = "enabled"
	}
	fmt.Fprintf(w, "Profile %q is now %s\n", p.Name, state)
	return nil
}

func runActivateProfile(args []string, w io.Writer, errW io.Writer) error {
	if len(args) != 2 {
		fmt.Fprintf(errW, "usage: bett-ai-harness activate-profile <agent> <profile>\n")
		return fmt.Errorf("expected 2 arguments, got %d", len(args))
	}
	agent, err := parseAgent([]string{args[0]})
	if err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	if err := harness.ActivateProfile(agent, args[1]); err != nil {
		fmt.Fprintln(errW, err)
		return err
	}
	fmt.Fprintf(w, "Profile %q is now the active one\n", args[1])
	return nil
}

func validPhase(p model.SDDPhase) bool {
	for _, known := range model.AllPhases {
		if p == known {
			return true
		}
	}
	return false
}

// Main is a convenience wrapper for cmd main() that exits with a non-zero
// status on failure.
func Main() {
	if err := Run(os.Args[1:], os.Stdout, os.Stderr); err != nil {
		os.Exit(1)
	}
}
