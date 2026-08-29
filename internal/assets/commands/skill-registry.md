---
description: List installed skills and suggest when to use them
---

# /skill-registry

Inspect the skills installed for this agent and surface the ones relevant to the current task.

## What to do

1. Scan the skills available (built-in `Skill` tool or the `~/.config/opencode/skills/` directory).
2. Return a concise table: skill name — one-line description — when to trigger it.
3. If the current conversation matches a skill's trigger criteria, note that you are invoking it.

## Guidance

- Skills are invoked proactively when they match the task; you do not need the user to ask.
- Prefer the most specific skill for the job (e.g. a testing skill over a generic one).
- Report installed skills as a checklist so the user sees what the harness provides.
