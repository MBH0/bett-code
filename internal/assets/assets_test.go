package assets

import (
	"strings"
	"testing"
)

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
	want := []string{
		"mcp-management",
		"memory-protocol",
		"organic-routing",
		"rdd-review",
		"sdd-orchestrator",
		"skill-registry",
	}
	if len(skills) != len(want) {
		t.Fatalf("got %d skills, want %d: %v", len(skills), len(want), skills)
	}
	for i, w := range want {
		if skills[i].Name != w {
			t.Errorf("skill[%d] = %q, want %q", i, skills[i].Name, w)
		}
		if len(skills[i].Source) == 0 {
			t.Errorf("skill %q has empty source", skills[i].Name)
		}
	}
}

// TestSkillFrontmatter verifies every bundled skill has YAML frontmatter
// with a non-empty description field (used by skill pickers in the agents).
func TestSkillFrontmatter(t *testing.T) {
	skills, err := Skills()
	if err != nil {
		t.Fatalf("Skills() error: %v", err)
	}
	for _, s := range skills {
		body := string(s.Source)
		if len(body) < 4 || body[:4] != "---\n" {
			t.Errorf("skill %q missing YAML frontmatter opener", s.Name)
			continue
		}
		end := -1
		for i := 4; i < len(body)-3; i++ {
			if body[i:i+4] == "\n---" {
				end = i
				break
			}
		}
		if end == -1 {
			t.Errorf("skill %q missing YAML frontmatter closer", s.Name)
			continue
		}
		fm := body[4:end]
		if !strings.Contains(fm, "description:") {
			t.Errorf("skill %q frontmatter has no description", s.Name)
		}
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
