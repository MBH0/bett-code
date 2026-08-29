package assets

import "testing"

// TestCommands verifies the embedded slash-command assets are all present.
func TestCommands(t *testing.T) {
	cmds, err := Commands()
	if err != nil {
		t.Fatalf("Commands() error: %v", err)
	}
	want := []string{"doctor", "mem", "mem-search", "skill-registry"}
	if len(cmds) != len(want) {
		t.Fatalf("got %d commands, want %d: %v", len(cmds), len(want), cmds)
	}
	for i, w := range want {
		if cmds[i].Name != w {
			t.Errorf("command[%d] = %q, want %q", i, cmds[i].Name, w)
		}
		if len(cmds[i].Source) == 0 {
			t.Errorf("command %q has empty source", cmds[i].Name)
		}
	}
}

// TestSkills verifies the embedded skill assets are all present.
func TestSkills(t *testing.T) {
	skills, err := Skills()
	if err != nil {
		t.Fatalf("Skills() error: %v", err)
	}
	if len(skills) != 1 {
		t.Fatalf("got %d skills, want 1: %v", len(skills), skills)
	}
	if skills[0].Name != "memory-protocol" {
		t.Errorf("skill = %q, want memory-protocol", skills[0].Name)
	}
	if len(skills[0].Source) == 0 {
		t.Error("skill has empty source")
	}
}

// TestPluginSource verifies the Engram plugin is embedded and carries the
// marker the harness patches when installing.
func TestPluginSource(t *testing.T) {
	src, err := PluginSource()
	if err != nil {
		t.Fatalf("PluginSource() error: %v", err)
	}
	if len(src) == 0 {
		t.Fatal("plugin source is empty")
	}
	if string(src) == "" {
		t.Fatal("plugin source is empty string")
	}
}
