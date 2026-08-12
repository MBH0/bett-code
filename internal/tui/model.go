// Package tui implements the Bubbletea terminal UI for the bett harness.
// It follows the Gentleman Bubbletea patterns: screen constants as iota, a
// single Model holding all state, Update() with a type switch, and tea.Cmd
// wrappers around the harness operations.
package tui

import (
	"fmt"

	"github.com/charmbracelet/bubbles/spinner"
	tea "github.com/charmbracelet/bubbletea"

	"bett-ai-harness/internal/harness"
	"bett-ai-harness/internal/model"
)

// ─── Screens ─────────────────────────────────────────────────────────────────

type Screen int

const (
	ScreenWelcome Screen = iota
	ScreenWorking
	ScreenResult
	ScreenComplete
)

// ─── Custom messages ─────────────────────────────────────────────────────────

type statusLoadedMsg struct {
	status model.Status
	err    error
}

type opResultMsg struct {
	steps  []harness.Step
	err    error
	resync bool
}

// ─── Menu ────────────────────────────────────────────────────────────────────

type menuItem struct {
	key   string
	label string
	run   func(tea.Cmd) // unused; actions dispatched by key
}

var menuItems = []string{
	"Wire bett-ai (plugin + MCP + server)",
	"Install Commands & Skills",
	"Re-sync (both)",
}

// ─── Model ───────────────────────────────────────────────────────────────────

type Model struct {
	screen       Screen
	width        int
	height       int
	cursor       int
	status       model.Status
	statusErr    error
	workingLabel string
	spinner      spinner.Model
	result       []harness.Step
	resultErr    error
}

// New creates the TUI model. Status is loaded asynchronously by Init.
func New() Model {
	sp := spinner.New()
	sp.Style = spinnerStyle
	sp.Spinner = spinner.Dot
	return Model{
		screen:  ScreenWelcome,
		spinner: sp,
	}
}

// Screen returns the current screen. Exported for tests.
func (m Model) Screen() Screen { return m.screen }

// Result returns the steps from the last finished operation. Exported for tests.
func (m Model) Result() []harness.Step { return m.result }

// ResultErr returns the error from the last finished operation, if any.
func (m Model) ResultErr() error { return m.resultErr }

// Init starts the async status detection and the spinner.
func (m Model) Init() tea.Cmd {
	return tea.Batch(detectStatus, m.spinner.Tick)
}

// ─── Commands (async work) ───────────────────────────────────────────────────

func detectStatus() tea.Msg {
	return statusLoadedMsg{status: harness.DetectStatus()}
}

func runWireEngram() tea.Msg {
	return opResultMsg{steps: harness.WireEngram()}
}

func runInstallAssets() tea.Msg {
	return opResultMsg{steps: harness.InstallAssets()}
}

func runResync() tea.Msg {
	return opResultMsg{steps: append(harness.WireEngram(), harness.InstallAssets()...), resync: true}
}

// ─── Update ──────────────────────────────────────────────────────────────────

func (m Model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		m.width = msg.Width
		m.height = msg.Height
		return m, nil

	case tea.KeyMsg:
		return m.updateKeys(msg)

	case statusLoadedMsg:
		m.status = msg.status
		m.statusErr = msg.err
		return m, nil

	case opResultMsg:
		m.result = msg.steps
		m.resultErr = msg.err
		if msg.resync {
			m.screen = ScreenComplete
		} else {
			m.screen = ScreenResult
		}
		return m, nil

	case spinner.TickMsg:
		var cmd tea.Cmd
		m.spinner, cmd = m.spinner.Update(msg)
		return m, cmd
	}

	return m, nil
}

func (m Model) updateKeys(msg tea.KeyMsg) (tea.Model, tea.Cmd) {
	switch m.screen {
	case ScreenWelcome:
		switch msg.String() {
		case "q", "ctrl+c", "esc":
			return m, tea.Quit
		case "up", "k":
			if m.cursor > 0 {
				m.cursor--
			}
			return m, nil
		case "down", "j", "tab":
			if m.cursor < len(menuItems)-1 {
				m.cursor++
			}
			return m, nil
		case "enter", "1", "2", "3":
			idx := m.cursor
			if msg.String() == "1" {
				idx = 0
			} else if msg.String() == "2" {
				idx = 1
			} else if msg.String() == "3" {
				idx = 2
			}
			m.cursor = idx
			return m.startOp(idx)
		case "r":
			return m, runResync
		}

	case ScreenWorking:
		// Ignore keys while working so the async op completes untouched.

	case ScreenResult, ScreenComplete:
		switch msg.String() {
		case "enter", "esc", "q":
			m.screen = ScreenWelcome
			return m, nil
		}
	}

	return m, nil
}

func (m Model) startOp(idx int) (tea.Model, tea.Cmd) {
	m.screen = ScreenWorking
	switch idx {
	case 0:
		m.workingLabel = "Wiring bett-ai into OpenCode…"
		return m, tea.Batch(m.spinner.Tick, runWireEngram)
	case 1:
		m.workingLabel = "Installing commands & skills…"
		return m, tea.Batch(m.spinner.Tick, runInstallAssets)
	default:
		m.workingLabel = "Re-syncing harness…"
		return m, tea.Batch(m.spinner.Tick, runResync)
	}
}

// ─── View ────────────────────────────────────────────────────────────────────

func (m Model) View() string {
	switch m.screen {
	case ScreenWelcome:
		return m.viewWelcome()
	case ScreenWorking:
		return m.viewWorking()
	case ScreenResult:
		return m.viewResult()
	case ScreenComplete:
		return m.viewComplete()
	}
	return ""
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

func checkmark(ok bool) string {
	if ok {
		return okStyle.Render("✓")
	}
	return errStyle.Render("✗")
}

func statusLine(key string, ok bool, val string) string {
	mark := checkmark(ok)
	if val == "" {
		val = "not found"
	}
	return fmt.Sprintf("  %s %s %s", mark, statusKeyStyle.Render(key), statusValStyle.Render(val))
}
