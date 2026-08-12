// Package model defines the shared state types used across the harness:
// the detected OpenCode installation and the Engram runtime it can wire into.
package model

// OpenCodeStatus describes the detected OpenCode installation and how much of
// the bett harness is already present in its config directory.
type OpenCodeStatus struct {
	BinaryFound     bool
	BinaryPath      string
	ConfigDir       string
	HasEngramMCP    bool
	HasEngramPlugin bool
	Commands        []string
	Skills          []string
}

// EngramStatus describes the detected Engram binary and server runtime.
type EngramStatus struct {
	BinaryFound bool
	BinaryPath  string
	Port        int
	ServerUp    bool
}

// Status aggregates the full system state shown on the welcome screen.
type Status struct {
	OpenCode OpenCodeStatus
	Engram   EngramStatus
}
