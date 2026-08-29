// Package model defines the shared state types used across the harness:
// the detected agent installations (OpenCode, Claude Code) and the Engram
// runtime that can be wired into them. Multi-agent support follows the
// gentle-ai pattern: a common Agent interface + per-agent status types.
package model

import "github.com/MBH0/bett-code/internal/opencode"

// AgentKind enumerates the supported coding agents the harness can target.
type AgentKind string

const (
	AgentOpenCode   AgentKind = "opencode"
	AgentClaudeCode AgentKind = "claude-code"
)

// AllAgents lists every agent the harness knows about, in display order.
var AllAgents = []AgentKind{AgentOpenCode, AgentClaudeCode}

// AgentLabel returns the human-friendly label for a given agent kind.
func AgentLabel(k AgentKind) string {
	switch k {
	case AgentOpenCode:
		return "OpenCode"
	case AgentClaudeCode:
		return "Claude Code"
	default:
		return string(k)
	}
}

// AgentConfigDir returns the global config directory for the given agent,
// cross-platform (XDG-aware on POSIX, %USERPROFILE% on Windows).
func AgentConfigDir(k AgentKind) string {
	switch k {
	case AgentOpenCode:
		return opencode.OpenCodeConfigDir()
	case AgentClaudeCode:
		return ClaudeConfigDir()
	default:
		return ""
	}
}

// AgentBinary returns the canonical binary name to look up on PATH.
func AgentBinary(k AgentKind) string {
	switch k {
	case AgentOpenCode:
		return "opencode"
	case AgentClaudeCode:
		return "claude"
	default:
		return ""
	}
}

// ─── OpenCode ────────────────────────────────────────────────────────────────

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

// ─── Claude Code ─────────────────────────────────────────────────────────────

// ClaudeStatus describes the detected Claude Code installation. Claude Code
// stores MCP servers in mcp.json (separate from settings.json) and slash
// commands under commands/, mirroring OpenCode's shape.
type ClaudeStatus struct {
	BinaryFound  bool
	BinaryPath   string
	ConfigDir    string
	HasEngramMCP bool
	Commands     []string
	Skills       []string
	OutputStyles []string
}

// ─── Engram ──────────────────────────────────────────────────────────────────

// EngramStatus describes the detected Engram binary and server runtime.
type EngramStatus struct {
	BinaryFound bool
	BinaryPath  string
	Port        int
	ServerUp    bool
}

// ─── Orchestration ───────────────────────────────────────────────────────────

// SDDPhase enumerates the phases of the SDD orchestrator. Each phase can be
// assigned its own model within an SDD profile, mirroring gentle-ai's
// per-phase model routing (orchestrator / explore / design / apply / verify).
type SDDPhase string

const (
	PhaseOrchestrator SDDPhase = "orchestrator" // main conductor
	PhaseExplore      SDDPhase = "explore"      // investigate the codebase
	PhasePropose      SDDPhase = "propose"      // draft a proposal
	PhaseSpec         SDDPhase = "spec"         // requirements + scenarios
	PhaseDesign       SDDPhase = "design"       // architecture decisions
	PhaseTasks        SDDPhase = "tasks"        // ordered deliverable checklist
	PhaseApply        SDDPhase = "apply"        // implementation
	PhaseVerify       SDDPhase = "verify"       // independent verification
	PhaseArchive      SDDPhase = "archive"      // close the cycle
)

// AllPhases lists every SDD phase in execution order. Useful for the model
// picker and for building default profile values.
var AllPhases = []SDDPhase{
	PhaseOrchestrator, PhaseExplore, PhasePropose, PhaseSpec,
	PhaseDesign, PhaseTasks, PhaseApply, PhaseVerify, PhaseArchive,
}

// SDDProfile is one named model profile used by an SDD-capable agent. Each
// profile is a bundle of per-phase model assignments (gentle-orchestrator
// style — a "cheap" profile uses a cheap model on every phase, a "premium"
// uses Opus, etc.).
type SDDProfile struct {
	Name    string                            // e.g. "default", "cheap", "premium"
	Models  map[SDDPhase]string               // phase → provider/model
	Enabled bool                              // whether this profile is active
}

// ReviewMode represents the RDD (Receipt-Driven Development) state.
type ReviewMode string

const (
	ReviewDisabled ReviewMode = "disabled"
	ReviewEnabled  ReviewMode = "enabled"
	ReviewAuto     ReviewMode = "auto"
)

// MCPServer describes a registered MCP server entry for an agent.
type MCPServer struct {
	Name    string
	Type    string // "local" | "remote"
	Command string
	Args    []string
	Enabled bool
}

// ─── Status aggregator ───────────────────────────────────────────────────────

// Status aggregates the full system state shown on the welcome screen.
type Status struct {
	OpenCode      OpenCodeStatus
	Claude        ClaudeStatus
	Engram        EngramStatus
	SelectedAgent AgentKind
	ReviewMode    ReviewMode
	SDDProfiles   []SDDProfile
}

// ClaudeConfigDir is implemented in claudecode_helpers.go (separate file to
// avoid pulling the full claudecode package into model consumers).
