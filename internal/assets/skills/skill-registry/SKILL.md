---
description: Scan installed skills, build a searchable registry, surface relevant ones per task
---

# Skill Registry

The skill registry is the agent's index of "what skills exist, where they live, and which one fits this task". Maintain it as part of session hygiene; let it go stale and the agent picks the wrong skill or duplicates work.

## On session start

1. Call `gentle-ai skill-registry refresh` (or the harness equivalent).
2. Search the registry for skills matching the first user message's intent before reaching for a generic solution.
3. Read the full SKILL.md of the chosen skill — descriptions are summaries, not contracts.

## Skill taxonomy in this harness

| Skill | Use when |
| --- | --- |
| `memory-protocol` | Persisting or recalling context across sessions |
| `sdd-orchestrator` | Multi-phase durable planning |
| `organic-routing` | Picking direct vs delegated vs SDD |
| `skill-registry` | Discovering / refreshing skill index (this skill) |
| `rdd-review` | Receipt-Driven Development bounded review |
| `mcp-management` | Adding, removing, or debugging MCP servers |

## When to add a new skill

Add a skill when:

- The same multi-step workflow gets requested 3+ times in different sessions.
- Existing skills can't cover it without losing precision.
- The workflow is portable across projects (otherwise it stays in a project-local rule).

Each new skill must ship:

- YAML frontmatter with a one-line `description` (this is what the picker shows).
- A SKILL.md with: when-to-use, decision rules, anti-patterns, related skills.
- A test fixture if the skill has runtime logic.

## Registry scope

- Global: `~/.config/opencode/skills/` or `~/.claude/skills/`. Visible to every project.
- Workspace: `<project>/.opencode/skills/` or `<project>/.claude/skills/`. Wins over global when names collide.
- Bundled: shipped with the harness via `internal/assets/skills/`. Installed on first wire.

## Anti-patterns

- One mega-skill covering many unrelated workflows.
- Skills that silently call destructive actions (always require explicit user intent).
- Skills whose description doesn't match what they actually do.
