// Package assets embeds the harness payloads that get installed into OpenCode:
// the Engram plugin, slash-command markdown, and skills.
package assets

import (
	"embed"
	"io/fs"
	"sort"
	"strings"
)

// FS is the embedded asset tree. Layout:
//
//	plugins/engram.ts        OpenCode plugin that bridges to `engram serve`
//	commands/*.md            /slash-command files
//	skills/<name>/SKILL.md   skill folders
//
//go:embed plugins/engram.ts commands/*.md skills/*/SKILL.md
var FS embed.FS

// Command is a slash-command asset: its invocation name and markdown source.
type Command struct {
	Name   string
	Source []byte
}

// Skill is a skill asset: its folder name and SKILL.md source.
type Skill struct {
	Name   string
	Source []byte
}

// PluginSource returns the Engram OpenCode plugin source.
func PluginSource() ([]byte, error) {
	return FS.ReadFile("plugins/engram.ts")
}

// Commands lists embedded slash commands sorted by name.
func Commands() ([]Command, error) {
	entries, err := fs.Glob(FS, "commands/*.md")
	if err != nil {
		return nil, err
	}
	var cmds []Command
	for _, path := range entries {
		name := strings.TrimSuffix(strings.TrimPrefix(path, "commands/"), ".md")
		src, err := FS.ReadFile(path)
		if err != nil {
			return nil, err
		}
		cmds = append(cmds, Command{Name: name, Source: src})
	}
	sort.Slice(cmds, func(i, j int) bool { return cmds[i].Name < cmds[j].Name })
	return cmds, nil
}

// Skills lists embedded skills sorted by name.
func Skills() ([]Skill, error) {
	entries, err := fs.Glob(FS, "skills/*/SKILL.md")
	if err != nil {
		return nil, err
	}
	var skills []Skill
	for _, path := range entries {
		parts := strings.Split(path, "/")
		name := parts[1]
		src, err := FS.ReadFile(path)
		if err != nil {
			return nil, err
		}
		skills = append(skills, Skill{Name: name, Source: src})
	}
	sort.Slice(skills, func(i, j int) bool { return skills[i].Name < skills[j].Name })
	return skills, nil
}
