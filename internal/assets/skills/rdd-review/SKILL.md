---
description: Receipt-Driven Development — bounded native review after implementation, opt-in, never blocks delivery
---

# RDD Review (Receipt-Driven Development)

Receipt-Driven Development (RDD) is an opt-in post-implementation review that freezes the candidate, derives review effort from evidence, and emits an informational outcome. It never authorizes, blocks, or governs delivery.

## Enable / disable

Review mode is **user-owned** and off by default. Turn it on with:

```bash
gentle-ai review mode enable --scope global --cwd .
gentle-ai review mode disable --cwd .
gentle-ai review mode status --cwd .
```

In the bett-ai-harness TUI: open "Review Mode (RDD)" from the main menu and press Enter to toggle disabled ↔ enabled.

## What it does

After the implementation route finishes, RDD:

1. Freezes the exact bytes of the candidate (no further writes during review).
2. Picks risk level: `low` → structural readback (0 lenses, silent); `standard` → 1 focus lens with consent; `high` → 4R canonical lenses with consent + forecast.
3. Inspectors run, producing findings with severity.
4. If severe findings exist → one bounded correction within budget → fix validator (read-only, immutable trees).
5. Emits an `approved` outcome (informational only).

## What it does NOT do

- Does not block commit, push, PR, or release. Those remain ordinary repository policy.
- Does not auto-merge. Merge decisions belong to the user / repo rules.
- Does not run twice on unchanged content. Replays are readbacks.
- Does not invent findings. No findings = approved.

## CLI knobs

| Knob | Default | Effect |
| --- | --- | --- |
| `--scope` | `global` | `global` is the only way in; `--scope clone` opts out per clone |
| `--projection` | `workspace` | `staged` freezes the complete existing git index |
| `--risk` | derived | Override risk floor (use sparingly) |

## When to enable

Enable RDD when:

- You want bounded review evidence on a specific candidate before merging.
- The team agrees to act on `severe` findings but never let review block delivery.
- You're working on shared worktrees or monorepos where the staged projection matters.

## When NOT to enable

- For exploratory work — review will chase transient state.
- When you need the candidate to keep mutating during inspection.
- When the project policy requires a different review authority (PR-based, branch protection, etc.) — RDD is informational, not a replacement.
