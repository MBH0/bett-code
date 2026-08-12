package tui

import (
	"fmt"
	"strings"

	"bett-ai-harness/internal/harness"
)

// viewWelcome renders the status panel plus the action menu. The menu can be
// navigated with the arrow keys; the status is whatever was detected by Init.
func (m Model) viewWelcome() string {
	var b strings.Builder

	b.WriteString(titleStyle.Render("bett-ai-harness"))
	b.WriteString("\n")
	b.WriteString(mutedStyle.Render("Wire bett-ai persistent memory into OpenCode."))
	b.WriteString("\n\n")

	b.WriteString(m.viewStatus())

	b.WriteString("\n")
	for i, label := range menuItems {
		if i == m.cursor {
			b.WriteString(menuSelStyle.Render("▸ " + label))
		} else {
			b.WriteString(menuItemStyle.Render("  " + label))
		}
		b.WriteString("\n")
	}

	b.WriteString(footerStyle.Render("↑/↓ or 1-3 select · enter run · r re-sync · q quit"))
	return b.String()
}

// viewStatus renders the detected OpenCode + Engram state as checkmark lines.
func (m Model) viewStatus() string {
	var b strings.Builder

	b.WriteString(boxStyle.Render(func() string {
		var inner strings.Builder
		if m.statusErr != nil {
			inner.WriteString(errStyle.Render("Status detection failed: " + m.statusErr.Error()))
			return inner.String()
		}

		s := m.status

		inner.WriteString(headerStyle.Render("OpenCode"))
		inner.WriteString("\n")
		inner.WriteString(statusLine("binary", s.OpenCode.BinaryFound, s.OpenCode.BinaryPath))
		inner.WriteString(statusLine("config", s.OpenCode.ConfigDir != "", s.OpenCode.ConfigDir))
		inner.WriteString(statusLine(harness.ServerName+" MCP", s.OpenCode.HasEngramMCP, mcpState(s.OpenCode.HasEngramMCP)))
		inner.WriteString(statusLine(harness.ServerName+" plugin", s.OpenCode.HasEngramPlugin, pluginState(s.OpenCode.HasEngramPlugin)))
		inner.WriteString(statusLine("commands", len(s.OpenCode.Commands) > 0, strings.Join(s.OpenCode.Commands, ", ")))
		inner.WriteString(statusLine("skills", len(s.OpenCode.Skills) > 0, strings.Join(s.OpenCode.Skills, ", ")))

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
