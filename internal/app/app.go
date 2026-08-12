// Package app is the entrypoint wiring: flag handling, version/help output,
// and launching the Bubbletea program that drives the harness TUI.
package app

import (
	"fmt"
	"io"
	"os"

	tea "github.com/charmbracelet/bubbletea"

	"bett-ai-harness/internal/tui"
)

// Version is the build version of the harness, set at compile time.
const Version = "0.1.0"

// usage is printed for --help.
const usage = `bett-ai-harness — wire Engram persistent memory into OpenCode

Usage:
  bett-ai-harness            launch the interactive harness
  bett-ai-harness --version  print the version and exit
  bett-ai-harness --help     show this help and exit

The interactive TUI detects your OpenCode and Engram installs, then offers:
  1. Wire Engram (plugin + MCP + server)
  2. Install commands & skills
  3. Re-sync (both)
`

// Run parses command-line flags. Non-interactive flags print to w and return
// nil; otherwise the TUI runs to completion. Errors are written to errW.
func Run(args []string, w io.Writer, errW io.Writer) error {
	switch {
	case len(args) == 1 && (args[0] == "-v" || args[0] == "--version"):
		fmt.Fprintf(w, "bett-ai-harness %s\n", Version)
		return nil
	case len(args) == 1 && (args[0] == "-h" || args[0] == "--help"):
		fmt.Fprint(w, usage)
		return nil
	case len(args) > 0:
		fmt.Fprintf(errW, "unknown argument %q\n\n", args[0])
		fmt.Fprint(errW, usage)
		return fmt.Errorf("unknown argument %q", args[0])
	}

	p := tea.NewProgram(tui.New(), tea.WithAltScreen())
	if _, err := p.Run(); err != nil {
		fmt.Fprintf(errW, "harness error: %v\n", err)
		return err
	}
	return nil
}

// Main is a convenience wrapper for cmd main() that exits with a non-zero
// status on failure.
func Main() {
	if err := Run(os.Args[1:], os.Stdout, os.Stderr); err != nil {
		os.Exit(1)
	}
}
