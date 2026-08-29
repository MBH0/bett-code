package tui

import (
	"fmt"
	"strings"

	"github.com/MBH0/bett-code/internal/harness"
	"github.com/MBH0/bett-code/internal/model"
)

// viewWelcome renders the multi-agent status panel plus the orchestrated menu.
func (m Model) viewWelcome() string {
	var b strings.Builder

	b.WriteString(titleStyle.Render("bett-ai-harness"))
	b.WriteString("\n")
	b.WriteString(mutedStyle.Render("Multi-agent orchestration for Engram persistent memory."))
	b.WriteString("\n\n")

	b.WriteString(m.viewStatus())

	b.WriteString("\n")
	b.WriteString(headerStyle.Render("Actions"))
	b.WriteString("\n")
	for i, item := range menuItems {
		if i == m.cursor {
			b.WriteString(menuSelStyle.Render("▸ " + item.label))
		} else {
			b.WriteString(menuItemStyle.Render("  " + item.label))
		}
		b.WriteString("\n")
	}

	if m.subMessage != "" {
		b.WriteString("\n")
		b.WriteString(subtleStyle.Render(m.subMessage))
		b.WriteString("\n")
	}

	b.WriteString(footerStyle.Render("↑/↓ select · enter run · q quit"))
	return b.String()
}

// viewStatus renders the detected state for both supported agents.
func (m Model) viewStatus() string {
	var b strings.Builder

	b.WriteString(boxStyle.Render(func() string {
		var inner strings.Builder
		if m.statusErr != nil {
			inner.WriteString(errStyle.Render("Status detection failed: " + m.statusErr.Error()))
			return inner.String()
		}

		s := m.status

		// Active agent banner
		inner.WriteString(headerStyle.Render("Active agent"))
		inner.WriteString("\n")
		inner.WriteString("  ")
		inner.WriteString(activeStyle.Render(model.AgentLabel(s.SelectedAgent)))
		inner.WriteString(mutedStyle.Render(
			fmt.Sprintf("  ·  review=%s  ·  profiles=%d",
				s.ReviewMode, len(s.SDDProfiles))))
		inner.WriteString("\n\n")

		// OpenCode block
		inner.WriteString(headerStyle.Render("OpenCode"))
		inner.WriteString("\n")
		inner.WriteString(statusLine("binary", s.OpenCode.BinaryFound, s.OpenCode.BinaryPath))
		inner.WriteString(statusLine("config", s.OpenCode.ConfigDir != "", s.OpenCode.ConfigDir))
		inner.WriteString(statusLine(harness.ServerName+" MCP", s.OpenCode.HasEngramMCP, mcpState(s.OpenCode.HasEngramMCP)))
		inner.WriteString(statusLine(harness.ServerName+" plugin", s.OpenCode.HasEngramPlugin, pluginState(s.OpenCode.HasEngramPlugin)))
		inner.WriteString(statusLine("commands", len(s.OpenCode.Commands) > 0, strings.Join(s.OpenCode.Commands, ", ")))
		inner.WriteString(statusLine("skills", len(s.OpenCode.Skills) > 0, strings.Join(s.OpenCode.Skills, ", ")))

		// Claude Code block
		inner.WriteString("\n")
		inner.WriteString(headerStyle.Render("Claude Code"))
		inner.WriteString("\n")
		inner.WriteString(statusLine("binary", s.Claude.BinaryFound, s.Claude.BinaryPath))
		inner.WriteString(statusLine("config", s.Claude.ConfigDir != "", s.Claude.ConfigDir))
		inner.WriteString(statusLine(harness.ServerName+" MCP", s.Claude.HasEngramMCP, mcpState(s.Claude.HasEngramMCP)))
		inner.WriteString(statusLine("commands", len(s.Claude.Commands) > 0, strings.Join(s.Claude.Commands, ", ")))
		inner.WriteString(statusLine("skills", len(s.Claude.Skills) > 0, strings.Join(s.Claude.Skills, ", ")))
		inner.WriteString(statusLine("output-styles", len(s.Claude.OutputStyles) > 0, strings.Join(s.Claude.OutputStyles, ", ")))

		// Engram block
		inner.WriteString("\n")
		inner.WriteString(headerStyle.Render("bett-ai"))
		inner.WriteString("\n")
		inner.WriteString(statusLine("binary", s.Engram.BinaryFound, s.Engram.BinaryPath))
		inner.WriteString(statusLine("server", s.Engram.ServerUp, fmt.Sprintf("127.0.0.1:%d", s.Engram.Port)))
		return inner.String()
	}()))

	return b.String()
}

func mcpState(ok bool) string {
	if ok {
		return "registered"
	}
	return ""
}

func pluginState(ok bool) string {
	if ok {
		return "installed"
	}
	return ""
}

// viewAgentSelect renders the agent picker.
func (m Model) viewAgentSelect() string {
	var b strings.Builder
	b.WriteString(titleStyle.Render("Select Agent"))
	b.WriteString("\n")
	b.WriteString(mutedStyle.Render("Choose the active coding agent for this session."))
	b.WriteString("\n\n")

	for i, k := range model.AllAgents {
		label := model.AgentLabel(k)
		// mark presence
		var present string
		switch k {
		case model.AgentOpenCode:
			if m.status.OpenCode.BinaryFound {
				present = okStyle.Render("installed")
			} else {
				present = mutedStyle.Render("not detected")
			}
		case model.AgentClaudeCode:
			if m.status.Claude.BinaryFound {
				present = okStyle.Render("installed")
			} else {
				present = mutedStyle.Render("not detected")
			}
		}
		if i == m.subCursor {
			b.WriteString(menuSelStyle.Render("▸ " + label))
		} else {
			b.WriteString(menuItemStyle.Render("  " + label))
		}
		b.WriteString("  ")
		b.WriteString(present)
		b.WriteString("\n")
	}

	b.WriteString("\n")
	b.WriteString(footerStyle.Render("↑/↓ select · enter confirm · esc back"))
	return b.String()
}

// viewSDDProfiles renders the SDD profile list with enable/disable toggles.
func (m Model) viewSDDProfiles() string {
	var b strings.Builder
	b.WriteString(titleStyle.Render("SDD Profiles"))
	b.WriteString("\n")
	b.WriteString(mutedStyle.Render(fmt.Sprintf("Multi-mode profiles for %s — press enter to toggle.",
		model.AgentLabel(m.status.SelectedAgent))))
	b.WriteString("\n\n")

	if len(m.status.SDDProfiles) == 0 {
		b.WriteString(mutedStyle.Render("No profiles configured."))
	} else {
		for i, p := range m.status.SDDProfiles {
			mark := "○"
			if p.Enabled {
				mark = okStyle.Render("●")
			}
			line := fmt.Sprintf("%s  %-10s  phase=%-12s  model=%s",
				mark, p.Name, p.Phase, p.Model)
			if i == m.subCursor {
				b.WriteString(menuSelStyle.Render("▸ " + line))
			} else {
				b.WriteString(menuItemStyle.Render("  " + line))
			}
			b.WriteString("\n")
		}
	}

	if m.subMessage != "" {
		b.WriteString("\n")
		b.WriteString(subtleStyle.Render(m.subMessage))
		b.WriteString("\n")
	}

	b.WriteString("\n")
	b.WriteString(footerStyle.Render("↑/↓ select · enter toggle · esc back"))
	return b.String()
}

// viewMCPServers renders the list of MCP servers for the active agent.
func (m Model) viewMCPServers() string {
	var b strings.Builder
	b.WriteString(titleStyle.Render("MCP Servers"))
	b.WriteString("\n")
	b.WriteString(mutedStyle.Render(fmt.Sprintf("MCP servers registered for %s.",
		model.AgentLabel(m.status.SelectedAgent))))
	b.WriteString("\n\n")

	servers := []string{harness.ServerName}
	var details []string
	switch m.status.SelectedAgent {
	case model.AgentOpenCode:
		if m.status.OpenCode.HasEngramMCP {
			details = append(details, fmt.Sprintf("%s: registered in opencode.json", harness.ServerName))
		} else {
			details = append(details, fmt.Sprintf("%s: not registered", harness.ServerName))
		}
	case model.AgentClaudeCode:
		if m.status.Claude.HasEngramMCP {
			details = append(details, fmt.Sprintf("%s: registered in mcp.json", harness.ServerName))
		} else {
			details = append(details, fmt.Sprintf("%s: not registered", harness.ServerName))
		}
	}

	for i, s := range servers {
		if i == m.subCursor {
			b.WriteString(menuSelStyle.Render("▸ " + s))
		} else {
			b.WriteString(menuItemStyle.Render("  " + s))
		}
		b.WriteString("\n")
	}
	for _, d := range details {
		b.WriteString(mutedStyle.Render("  " + d))
		b.WriteString("\n")
	}

	b.WriteString("\n")
	b.WriteString(footerStyle.Render("↑/↓ select · esc back"))
	return b.String()
}

// viewReviewMode renders the RDD review-mode toggle.
func (m Model) viewReviewMode() string {
	var b strings.Builder
	b.WriteString(titleStyle.Render("Review Mode (RDD)"))
	b.WriteString("\n")
	b.WriteString(mutedStyle.Render("Receipt-Driven Development — bounded native review after each candidate."))
	b.WriteString("\n\n")

	mode := m.status.ReviewMode
	bullet := func(label string, active bool) string {
		if active {
			return okStyle.Render("● " + label)
		}
		return mutedStyle.Render("○ " + label)
	}
	b.WriteString("  ")
	b.WriteString(bullet("disabled", mode == model.ReviewDisabled))
	b.WriteString("\n  ")
	b.WriteString(bullet("enabled", mode == model.ReviewEnabled))
	b.WriteString("\n  ")
	b.WriteString(bullet("auto", mode == model.ReviewAuto))
	b.WriteString("\n")

	if m.subMessage != "" {
		b.WriteString("\n")
		b.WriteString(subtleStyle.Render(m.subMessage))
		b.WriteString("\n")
	}

	b.WriteString("\n")
	b.WriteString(footerStyle.Render("press enter to toggle disabled ↔ enabled · esc back"))
	return b.String()
}

// viewWorking renders the spinner plus the label of the operation running.
func (m Model) viewWorking() string {
	var b strings.Builder
	b.WriteString(titleStyle.Render("bett-ai-harness"))
	b.WriteString("\n\n")
	b.WriteString(m.spinner.View())
	b.WriteString(" ")
	b.WriteString(m.workingLabel)
	b.WriteString("\n")

	return b.String()
}

// viewResult renders the steps of a finished operation as ✓/✗ lines.
func (m Model) viewResult() string {
	return m.viewSteps("Done", "Press enter to return to the menu · q quit")
}

// viewComplete renders the resync result as a finished, re-synced harness.
func (m Model) viewComplete() string {
	return m.viewSteps("Harness synced", "Press enter to return to the menu · q quit")
}

func (m Model) viewSteps(heading, footer string) string {
	var b strings.Builder

	b.WriteString(titleStyle.Render("bett-ai-harness"))
	b.WriteString("\n\n")
	b.WriteString(headerStyle.Render(heading))
	b.WriteString("\n\n")

	if m.resultErr != nil {
		b.WriteString(errStyle.Render(m.resultErr.Error()))
		b.WriteString("\n\n")
	}

	if len(m.result) == 0 {
		b.WriteString(mutedStyle.Render("Nothing to report."))
	} else {
		for _, step := range m.result {
			b.WriteString(fmt.Sprintf("  %s %s\n", checkmark(step.OK), step.Text))
		}
	}

	b.WriteString(footerStyle.Render(footer))
	return b.String()
}
