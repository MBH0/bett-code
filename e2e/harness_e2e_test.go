// Package e2e runs the harness TUI end-to-end against a real Engram binary
// and a throwaway OpenCode config dir. It verifies that driving the TUI
// actually configures OpenCode (plugin + MCP + commands + skills) and that
// the registered MCP server speaks the protocol OpenCode expects.
package e2e

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"os/exec"
	"path/filepath"
	"sync"
	"testing"
	"time"

	tea "github.com/charmbracelet/bubbletea"

	"bett-ai-harness/internal/engram"
	"bett-ai-harness/internal/harness"
	"bett-ai-harness/internal/opencode"
	"bett-ai-harness/internal/tui"
)

// requireEngram skips the test when the engram binary is not installed.
func requireEngram(t *testing.T) {
	t.Helper()
	if _, err := exec.LookPath("engram"); err != nil {
		t.Skip("engram binary not on PATH; skipping e2e")
	}
}

// requireOpenCode skips the test when the opencode binary is not installed.
func requireOpenCode(t *testing.T) {
	t.Helper()
	if _, err := exec.LookPath("opencode"); err != nil {
		t.Skip("opencode binary not on PATH; skipping e2e")
	}
}

// withTempConfig sets XDG_CONFIG_HOME and HOME to temp dirs and seeds a
// minimal opencode.json so the harness merges into something realistic.
// Isolating HOME keeps engram's own DB (~/.engram) out of the real one.
func withTempConfig(t *testing.T) string {
	t.Helper()
	dir := t.TempDir()
	t.Setenv("XDG_CONFIG_HOME", dir)
	t.Setenv("HOME", dir)
	oc := filepath.Join(dir, "opencode")
	if err := os.MkdirAll(oc, 0o755); err != nil {
		t.Fatalf("mkdir config: %v", err)
	}
	seed := `{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "context7": { "type": "remote", "url": "https://mcp.context7.com/mcp" }
  }
}`
	if err := os.WriteFile(filepath.Join(oc, "opencode.json"), []byte(seed), 0o644); err != nil {
		t.Fatalf("seed config: %v", err)
	}
	return oc
}

// stagedInput lets the test feed keystrokes to a running bubbletea program
// at the right moments, instead of racing on fixed delays.
type stagedInput struct {
	send chan string
	quit chan struct{}
}

func newStagedInput() *stagedInput {
	return &stagedInput{send: make(chan string, 8), quit: make(chan struct{})}
}

func (s *stagedInput) Read(p []byte) (int, error) {
	select {
	case data := <-s.send:
		n := copy(p, data)
		return n, nil
	case <-s.quit:
		return 0, io.EOF
	}
}

func (s *stagedInput) close() {
	select {
	case <-s.quit:
	default:
		close(s.quit)
	}
}

// runTUI launches the real bubbletea program for the TUI model. Keystrokes
// are delivered via the returned input channel, and the program's stdout is
// captured so tests can assert on the rendered result.
func runTUI(t *testing.T) (*stagedInput, chan error, *bytes.Buffer) {
	t.Helper()
	in := newStagedInput()
	var out bytes.Buffer
	p := tea.NewProgram(tui.New(),
		tea.WithInput(in),
		tea.WithOutput(&out),
		tea.WithoutRenderer(),
	)
	done := make(chan error, 1)
	go func() {
		_, err := p.Run()
		done <- err
	}()
	// Give the program a moment to boot before the first keystroke arrives.
	time.Sleep(300 * time.Millisecond)
	return in, done, &out
}

// press sends a key string to the running program.
func press(t *testing.T, in *stagedInput, key string) {
	t.Helper()
	select {
	case in.send <- key:
	case <-time.After(2 * time.Second):
		t.Fatalf("timed out sending key %q", key)
	}
}

// quit sends the keystrokes that exit the TUI from the result screen and
// waits for the program to return. Pauses give the event loop time to land
// on the result screen before the first key is delivered.
func quit(t *testing.T, in *stagedInput, done chan error) {
	t.Helper()
	time.Sleep(500 * time.Millisecond)
	press(t, in, "q") // result screen -> welcome
	time.Sleep(200 * time.Millisecond)
	press(t, in, "q") // welcome -> quit
	in.close()
	select {
	case err := <-done:
		if err != nil {
			t.Fatalf("program exited with error: %v", err)
		}
	case <-time.After(10 * time.Second):
		t.Fatal("program did not exit")
	}
}

// waitFor polls cond until it is true or the test times out.
func waitFor(t *testing.T, cond func() bool) {
	t.Helper()
	deadline := time.Now().Add(15 * time.Second)
	for time.Now().Before(deadline) {
		if cond() {
			return
		}
		time.Sleep(50 * time.Millisecond)
	}
	t.Fatal("condition not met before timeout")
}

// TestTUWiresEngramIntoOpenCode is the core e2e: it drives the TUI's
// "Re-sync" action (key "3", which runs both Wire Engram and Install
// Commands & Skills) against a real engram binary and asserts the OpenCode
// config dir now contains the plugin, MCP registration, and assets.
func TestTUWiresEngramIntoOpenCode(t *testing.T) {
	requireEngram(t)
	oc := withTempConfig(t)

	in, done, _ := runTUI(t)
	press(t, in, "3")

	// Wait for the real side effects to land on disk.
	waitFor(t, func() bool { return opencode.HasMCP(harness.ServerName) })
	waitFor(t, func() bool {
		_, err := os.Stat(filepath.Join(oc, "plugins", "engram.ts"))
		return err == nil
	})

	// The plugin must be patched with a resolved binary path.
	data, err := os.ReadFile(filepath.Join(oc, "plugins", "engram.ts"))
	if err != nil {
		t.Fatalf("read plugin: %v", err)
	}
	if !bytes.Contains(data, []byte("Bun.which(\"engram\")")) {
		t.Error("plugin not patched with Bun.which fallback")
	}

	// MCP registration preserved the pre-existing remote server.
	if !opencode.HasMCP("context7") {
		t.Error("existing context7 server was clobbered")
	}

	// Commands and skills installed (InstallAssets finishes right after the
	// MCP wiring in the resync operation, so wait for them too).
	for _, c := range []string{"doctor", "mem", "mem-search", "skill-registry"} {
		c := c
		waitFor(t, func() bool {
			_, err := os.Stat(filepath.Join(oc, "commands", c+".md"))
			return err == nil
		})
		if _, err := os.Stat(filepath.Join(oc, "commands", c+".md")); err != nil {
			t.Errorf("command %q not installed: %v", c, err)
		}
	}
	waitFor(t, func() bool {
		_, err := os.Stat(filepath.Join(oc, "skills", "memory-protocol", "SKILL.md"))
		return err == nil
	})
	if _, err := os.Stat(filepath.Join(oc, "skills", "memory-protocol", "SKILL.md")); err != nil {
		t.Errorf("skill not installed: %v", err)
	}

	// Engram server reachable (the MCP bridge depends on it).
	waitFor(t, func() bool { return engram.ServerRunning(engram.DefaultPort) })

	// The TUI should return cleanly from the result screen.
	quit(t, in, done)
}

// TestTUIInstallsAssets verifies the "Install Commands & Skills" action.
func TestTUIInstallsAssets(t *testing.T) {
	requireEngram(t)
	oc := withTempConfig(t)

	in, done, _ := runTUI(t)
	press(t, in, "2")

	waitFor(t, func() bool {
		_, err := os.Stat(filepath.Join(oc, "commands", "doctor.md"))
		return err == nil
	})
	for _, c := range []string{"doctor", "mem", "mem-search", "skill-registry"} {
		if _, err := os.Stat(filepath.Join(oc, "commands", c+".md")); err != nil {
			t.Errorf("command %q not installed: %v", c, err)
		}
	}
	if _, err := os.Stat(filepath.Join(oc, "skills", "memory-protocol", "SKILL.md")); err != nil {
		t.Errorf("skill not installed: %v", err)
	}

	quit(t, in, done)
}

// TestOpenCodeReadsGeneratedConfig verifies the config produced by the TUI
// (via Wire Engram) is accepted by a real opencode binary: the engram server
// must show up in `opencode mcp list`.
func TestOpenCodeReadsGeneratedConfig(t *testing.T) {
	requireEngram(t)
	requireOpenCode(t)
	oc := withTempConfig(t)

	in, done, _ := runTUI(t)
	press(t, in, "1")
	waitFor(t, func() bool { return opencode.HasMCP(harness.ServerName) })
	quit(t, in, done)

	cmd := exec.Command("opencode", "mcp", "list")
	cmd.Env = append(os.Environ(), "XDG_CONFIG_HOME="+filepath.Dir(oc), "HOME="+filepath.Dir(oc))
	out, err := cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("opencode mcp list failed: %v\n%s", err, out)
	}
	if !bytes.Contains(out, []byte(harness.ServerName)) {
		t.Errorf("opencode mcp list did not show %s server:\n%s", harness.ServerName, out)
	}
}

// TestMCPHandshake verifies the registered MCP server starts over stdio and
// exposes the memory tools — the exact contract OpenCode relies on.
func TestMCPHandshake(t *testing.T) {
	requireEngram(t)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cmd := exec.CommandContext(ctx, "engram", "mcp", "--tools=agent")
	stdin, err := cmd.StdinPipe()
	if err != nil {
		t.Fatalf("stdin: %v", err)
	}
	stdout, err := cmd.StdoutPipe()
	if err != nil {
		t.Fatalf("stdout: %v", err)
	}
	if err := cmd.Start(); err != nil {
		t.Fatalf("start engram mcp: %v", err)
	}
	defer func() {
		_ = stdin.Close()
		_ = cmd.Wait()
	}()
	// Read stdout in a goroutine so responses land in a slice as they arrive.
	var mu sync.Mutex
	var lines []string
	done := make(chan struct{})
	go func() {
		defer close(done)
		sc := bufio.NewScanner(stdout)
		for sc.Scan() {
			mu.Lock()
			lines = append(lines, sc.Text())
			mu.Unlock()
		}
	}()

	send := func(id int, method string, params map[string]any) {
		req := map[string]any{"jsonrpc": "2.0", "id": id, "method": method}
		if params != nil {
			req["params"] = params
		}
		b, _ := json.Marshal(req)
		fmt.Fprintf(stdin, "%s\n", b)
	}

	send(1, "initialize", map[string]any{
		"protocolVersion": "2024-11-05",
		"capabilities":    map[string]any{},
		"clientInfo":      map[string]any{"name": "bett-e2e", "version": "1.0"},
	})
	send(2, "tools/list", nil)

	// Wait until at least two response lines arrive (or the deadline).
	deadline := time.Now().Add(10 * time.Second)
	for {
		mu.Lock()
		n := len(lines)
		mu.Unlock()
		if n >= 2 {
			break
		}
		if time.Now().After(deadline) {
			break
		}
		select {
		case <-ctx.Done():
		case <-time.After(50 * time.Millisecond):
		}
	}

	mu.Lock()
	respLines := append([]string(nil), lines...)
	mu.Unlock()

	if len(respLines) < 2 {
		t.Fatalf("expected initialize + tools/list responses, got %d lines: %v", len(respLines), respLines)
	}

	// Response order may vary; look for the tools list response.
	var tools []map[string]any
	for _, line := range respLines {
		var resp struct {
			ID     int `json:"id"`
			Result struct {
				Tools []map[string]any `json:"tools"`
			} `json:"result"`
		}
		if err := json.Unmarshal([]byte(line), &resp); err != nil || resp.Result.Tools == nil {
			continue
		}
		tools = resp.Result.Tools
	}
	if len(tools) == 0 {
		t.Fatalf("no tools returned in MCP handshake; lines=%v", respLines)
	}
	names := make(map[string]bool)
	for _, tool := range tools {
		name, _ := tool["name"].(string)
		names[name] = true
	}
	for _, want := range []string{"mem_save", "mem_search", "mem_context", "mem_session_summary"} {
		if !names[want] {
			t.Errorf("MCP tools missing %q; have %v", want, names)
		}
	}

	// Close stdin so the MCP server exits, unblocking the reader goroutine.
	_ = stdin.Close()
	select {
	case <-done:
	case <-time.After(5 * time.Second):
		t.Fatal("reader goroutine did not finish after closing stdin")
	}
}
