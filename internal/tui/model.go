// Package tui implements the Bubbletea terminal UI for the bett harness.
// Follows the Gentleman Bubbletea patterns: screen constants as iota, a
// single Model holding all state, Update() with a type switch, and tea.Cmd
// wrappers around the harness operations. Multi-agent orchestration adds
// sub-screens for agent selection, SDD profiles, MCP management, and
// review-mode toggling (gentle-ai style).
package tui

import (
	"fmt"

	"github.com/charmbracelet/bubbles/spinner"
	tea "github.com/charmbracelet/bubbletea"

	"github.com/MBH0/bett-code/internal/harness"
	"github.com/MBH0/bett-code/internal/model"
)

// ─── Screens ─────────────────────────────────────────────────────────────────

type Screen int

const (
	ScreenWelcome Screen = iota
	ScreenAgentSelect
	ScreenWorking
	ScreenResult
	ScreenComplete
	ScreenSDDProfiles
	ScreenMCPServers
	ScreenReviewMode
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

type reviewToggleMsg struct {
	mode model.ReviewMode
	err  error
}

type sddToggleMsg struct {
	profile model.SDDProfile
	err     error
}

// ─── Menu items ──────────────────────────────────────────────────────────────

type menuAction int

const (
	actionWireAgent menuAction = iota
	actionInstallAssets
	actionResync
	actionSelectAgent
	actionSDDProfiles
	actionMCPServers
	actionReviewMode
	actionDoctor
)

var menuItems = []struct {
	label  string
	action menuAction
}{
	{"Wire bett-ai into selected agent", actionWireAgent},
	{"Install Commands & Skills", actionInstallAssets},
	{"Re-sync (both)", actionResync},
	{"Select Agent (OpenCode / Claude Code)", actionSelectAgent},
	{"SDD Profiles (multi-mode)", actionSDDProfiles},
	{"MCP Servers", actionMCPServers},
	{"Review Mode (RDD)", actionReviewMode},
	{"Doctor / Health Check", actionDoctor},
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
	subCursor    int // for sub-screen lists (SDD profiles, MCP servers, etc.)
	subMessage   string
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

func runWireEngram(kind model.AgentKind) tea.Cmd {
	return func() tea.Msg {
		return opResultMsg{steps: harness.WireAgent(kind)}
	}
}

func runInstallAssets(kind model.AgentKind) tea.Cmd {
	return func() tea.Msg {
		return opResultMsg{steps: harness.InstallAssetsForAgent(kind)}
	}
}

func runResync(kind model.AgentKind) tea.Cmd {
	return func() tea.Msg {
		steps := append(harness.WireAgent(kind), harness.InstallAssetsForAgent(kind)...)
		return opResultMsg{steps: steps, resync: true}
	}
}

func runToggleReview(kind model.AgentKind, current model.ReviewMode) tea.Cmd {
	return func() tea.Msg {
		next := model.ReviewEnabled
		if current == model.ReviewEnabled {
			next = model.ReviewDisabled
		}
		if err := harness.SetReviewModeFor(kind, next); err != nil {
			return reviewToggleMsg{err: err}
		}
		return reviewToggleMsg{mode: next}
	}
}

func runToggleSDD(kind model.AgentKind, name string) tea.Cmd {
	return func() tea.Msg {
		profile, err := harness.ToggleSDDProfile(kind, name)
		return sddToggleMsg{profile: profile, err: err}
	}
}

func runDetect() tea.Cmd {
	return func() tea.Msg {
		return statusLoadedMsg{status: harness.DetectStatus()}
	}
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

	case reviewToggleMsg:
		if msg.err != nil {
			m.subMessage = "Error: " + msg.err.Error()
		} else {
			m.status.ReviewMode = msg.mode
			m.subMessage = fmt.Sprintf("Review mode: %s", msg.mode)
		}
		return m, nil

	case sddToggleMsg:
		if msg.err != nil {
			m.subMessage = "Error: " + msg.err.Error()
		} else {
			for i := range m.status.SDDProfiles {
				if m.status.SDDProfiles[i].Name == msg.profile.Name {
					m.status.SDDProfiles[i].Enabled = msg.profile.Enabled
					break
				}
			}
			state := "enabled"
			if !msg.profile.Enabled {
				state = "disabled"
			}
			m.subMessage = fmt.Sprintf("Profile %q %s", msg.profile.Name, state)
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
		return m.updateWelcomeKeys(msg)
	case ScreenAgentSelect:
		return m.updateAgentSelectKeys(msg)
	case ScreenSDDProfiles:
		return m.updateSDDKeys(msg)
	case ScreenMCPServers:
		return m.updateMCPKeys(msg)
	case ScreenReviewMode:
		return m.updateReviewKeys(msg)
	case ScreenWorking:
		// Ignore keys while working.
	case ScreenResult, ScreenComplete:
		switch msg.String() {
		case "enter", "esc", "q":
			m.screen = ScreenWelcome
			m.subMessage = ""
			return m, nil
		}
	}
	return m, nil
}

func (m Model) updateWelcomeKeys(msg tea.KeyMsg) (tea.Model, tea.Cmd) {
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
	case "enter":
		return m.runMenuAction(menuItems[m.cursor].action)
	}
	return m, nil
}

func (m Model) updateAgentSelectKeys(msg tea.KeyMsg) (tea.Model, tea.Cmd) {
	switch msg.String() {
	case "q", "ctrl+c", "esc":
		m.screen = ScreenWelcome
		return m, nil
	case "up", "k":
		if m.subCursor > 0 {
			m.subCursor--
		}
		return m, nil
	case "down", "j":
		if m.subCursor < len(model.AllAgents)-1 {
			m.subCursor++
		}
		return m, nil
	case "enter":
		selected := model.AllAgents[m.subCursor]
		m.status.SelectedAgent = selected
		m.status.ReviewMode = harness_loadReviewFor(selected)
		m.status.SDDProfiles = harness_loadSDDFor(selected)
		m.subMessage = fmt.Sprintf("Selected agent: %s", model.AgentLabel(selected))
		m.screen = ScreenWelcome
		return m, nil
	}
	return m, nil
}

func (m Model) updateSDDKeys(msg tea.KeyMsg) (tea.Model, tea.Cmd) {
	switch msg.String() {
	case "q", "ctrl+c", "esc":
		m.screen = ScreenWelcome
		return m, nil
	case "up", "k":
		if m.subCursor > 0 {
			m.subCursor--
		}
		return m, nil
	case "down", "j":
		if m.subCursor < len(m.status.SDDProfiles)-1 {
			m.subCursor++
		}
		return m, nil
	case "enter", " ":
		if m.subCursor >= 0 && m.subCursor < len(m.status.SDDProfiles) {
			name := m.status.SDDProfiles[m.subCursor].Name
			return m, runToggleSDD(m.status.SelectedAgent, name)
		}
		return m, nil
	}
	return m, nil
}

func (m Model) updateMCPKeys(msg tea.KeyMsg) (tea.Model, tea.Cmd) {
	switch msg.String() {
	case "q", "ctrl+c", "esc":
		m.screen = ScreenWelcome
		return m, nil
	}
	return m, nil
}

func (m Model) updateReviewKeys(msg tea.KeyMsg) (tea.Model, tea.Cmd) {
	switch msg.String() {
	case "q", "ctrl+c", "esc":
		m.screen = ScreenWelcome
		return m, nil
	case "enter", " ":
		return m, runToggleReview(m.status.SelectedAgent, m.status.ReviewMode)
	}
	return m, nil
}

// ─── Menu dispatch ───────────────────────────────────────────────────────────

func (m Model) runMenuAction(a menuAction) (tea.Model, tea.Cmd) {
	switch a {
	case actionWireAgent:
		m.screen = ScreenWorking
		m.workingLabel = fmt.Sprintf("Wiring bett-ai into %s…", model.AgentLabel(m.status.SelectedAgent))
		return m, tea.Batch(m.spinner.Tick, runWireEngram(m.status.SelectedAgent))
	case actionInstallAssets:
		m.screen = ScreenWorking
		m.workingLabel = fmt.Sprintf("Installing commands & skills for %s…", model.AgentLabel(m.status.SelectedAgent))
		return m, tea.Batch(m.spinner.Tick, runInstallAssets(m.status.SelectedAgent))
	case actionResync:
		m.screen = ScreenWorking
		m.workingLabel = fmt.Sprintf("Re-syncing %s…", model.AgentLabel(m.status.SelectedAgent))
		return m, tea.Batch(m.spinner.Tick, runResync(m.status.SelectedAgent))
	case actionSelectAgent:
		m.screen = ScreenAgentSelect
		for i, k := range model.AllAgents {
			if k == m.status.SelectedAgent {
				m.subCursor = i
				break
			}
		}
		return m, nil
	case actionSDDProfiles:
		m.screen = ScreenSDDProfiles
		m.subCursor = 0
		return m, nil
	case actionMCPServers:
		m.screen = ScreenMCPServers
		m.subCursor = 0
		return m, nil
	case actionReviewMode:
		m.screen = ScreenReviewMode
		return m, nil
	case actionDoctor:
		m.screen = ScreenWorking
		m.workingLabel = "Running doctor…"
		return m, tea.Batch(m.spinner.Tick, detectStatus)
	}
	return m, nil
}

// ─── View ────────────────────────────────────────────────────────────────────

func (m Model) View() string {
	switch m.screen {
	case ScreenWelcome:
		return m.viewWelcome()
	case ScreenAgentSelect:
		return m.viewAgentSelect()
	case ScreenWorking:
		return m.viewWorking()
	case ScreenResult:
		return m.viewResult()
	case ScreenComplete:
		return m.viewComplete()
	case ScreenSDDProfiles:
		return m.viewSDDProfiles()
	case ScreenMCPServers:
		return m.viewMCPServers()
	case ScreenReviewMode:
		return m.viewReviewMode()
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

// harness_loadReviewFor / harness_loadSDDFor are thin wrappers to keep the
// model package free of direct harness imports in view code paths.
func harness_loadReviewFor(kind model.AgentKind) model.ReviewMode {
	// Re-detect so the welcome screen reflects any external state changes.
	s := harness.DetectStatus()
	for _, p := range s.SDDProfiles {
		_ = p
	}
	return s.ReviewMode
}

func harness_loadSDDFor(kind model.AgentKind) []model.SDDProfile {
	s := harness.DetectStatus()
	return s.SDDProfiles
}
