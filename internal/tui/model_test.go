package tui

import (
	"strings"
	"testing"

	tea "github.com/charmbracelet/bubbletea"

	"bett-ai-harness/internal/harness"
)

// keyMsg builds a tea.KeyMsg for the given key string, mirroring how
// bubbletea decodes a single pressed key.
func keyMsg(k string) tea.KeyMsg {
	return tea.KeyMsg{Type: tea.KeyRunes, Runes: []rune(k)}
}

// upd runs Update and returns the concrete Model.
func upd(t *testing.T, m Model, msg tea.Msg) Model {
	t.Helper()
	got, _ := m.Update(msg)
	return got.(Model)
}

func TestMenuNavigation(t *testing.T) {
	m := New()
	// Move down twice and check the cursor advances.
	m = upd(t, m, keyMsg("down"))
	if m.cursor != 1 {
		t.Errorf("cursor after down = %d, want 1", m.cursor)
	}
	m = upd(t, m, keyMsg("j"))
	if m.cursor != 2 {
		t.Errorf("cursor after j = %d, want 2", m.cursor)
	}
	// Push past the end; cursor must clamp at last item.
	for i := 0; i < len(menuItems)+2; i++ {
		m = upd(t, m, keyMsg("down"))
	}
	last := len(menuItems) - 1
	if m.cursor != last {
		t.Errorf("cursor should clamp at %d, got %d", last, m.cursor)
	}
	m = upd(t, m, keyMsg("up"))
	if m.cursor != last-1 {
		t.Errorf("cursor after up = %d, want %d", m.cursor, last-1)
	}
}

func TestEnterSelectsOperation(t *testing.T) {
	m := New()
	// Move to "Install Commands & Skills" (idx 1) then press enter.
	m = upd(t, m, keyMsg("down"))
	m = upd(t, m, keyMsg("enter"))
	if m.screen != ScreenWorking {
		t.Fatalf("screen = %v, want ScreenWorking", m.screen)
	}
	if !strings.Contains(m.workingLabel, "commands") {
		t.Errorf("workingLabel = %q (expected to mention commands)", m.workingLabel)
	}
}

func TestOpResultRoutesToResultScreen(t *testing.T) {
	m := New()
	m = upd(t, m, keyMsg("enter"))
	m = upd(t, m, opResultMsg{
		steps: []harness.Step{{OK: true, Text: "ok"}, {OK: false, Text: "fail"}},
	})
	if m.screen != ScreenResult {
		t.Fatalf("screen = %v, want ScreenResult", m.screen)
	}
	if len(m.result) != 2 {
		t.Errorf("result steps = %d, want 2", len(m.result))
	}
}

func TestResyncRoutesToCompleteScreen(t *testing.T) {
	m := New()
	// navigate to "Re-sync (both)" (idx 2) then press enter
	m = upd(t, m, keyMsg("down"))
	m = upd(t, m, keyMsg("down"))
	m = upd(t, m, keyMsg("enter"))
	m = upd(t, m, opResultMsg{steps: []harness.Step{{OK: true, Text: "ok"}}, resync: true})
	if m.screen != ScreenComplete {
		t.Fatalf("screen = %v, want ScreenComplete", m.screen)
	}
}

func TestQuitFromWelcome(t *testing.T) {
	m := New()
	_, cmd := m.Update(keyMsg("q"))
	if cmd == nil {
		t.Fatal("expected quit cmd on q")
	}
}

func TestStatusLoadedUpdatesModel(t *testing.T) {
	m := New()
	m = upd(t, m, statusLoadedMsg{status: harness.DetectStatus()})
	if m.status.OpenCode.BinaryFound && m.status.OpenCode.BinaryPath == "" {
		t.Error("status populated without binary path")
	}
}

func TestViewRendersMenu(t *testing.T) {
	m := New()
	view := m.View()
	for _, item := range menuItems {
		if !strings.Contains(view, item.label) {
			t.Errorf("view missing menu item %q", item.label)
		}
	}
}

func TestResultViewRendersSteps(t *testing.T) {
	m := New()
	m = upd(t, m, opResultMsg{
		steps: []harness.Step{{OK: true, Text: "plugin written"}, {OK: false, Text: "binary missing"}},
	})
	view := m.View()
	if !strings.Contains(view, "plugin written") {
		t.Error("result view missing success step")
	}
	if !strings.Contains(view, "binary missing") {
		t.Error("result view missing failure step")
	}
}
