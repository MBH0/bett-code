---
description: Spec-Driven Development orchestrator — route work through explore/propose/spec/design/tasks/apply/verify
---

# SDD Orchestrator

Spec-Driven Development (SDD) is the durable-planning route through this agent. Use it when the work would materially benefit from versioned artifacts the user can review and iterate on. Do not invoke SDD for trivial 1–3 file changes — those stay direct or delegated.

## When to enter SDD

Enter SDD only after an explicit user request ("let's spec this", "plan it first") OR after the user accepts an offer to plan. Size, file count, or perceived risk never select SDD on their own.

Phases in order:

1. **explore** — investigate the codebase, surface constraints and prior decisions. Search Engram before scanning files when the question is project-related.
2. **propose** — draft intent · scope · approach as a short proposal. The user approves, rejects, or iterates.
3. **spec** — concrete requirements + acceptance scenarios. Each scenario must be independently checkable.
4. **design** — architecture decisions and tradeoffs. Reference existing patterns from Engram when they apply.
5. **tasks** — ordered deliverable checklist. Each task is ≤1 PR's worth of work.
6. **apply** — sub-agent implementation against specs. Read spec/design/tasks first; never invent scope.
7. **verify** — independent verification of spec/design/task coverage. RED/GREEN evidence required for TDD tasks.

## Routing rules

- 1–3 files, mechanical change understood → stay direct inline. Skip SDD.
- 4+ files, reading prepares a write, or broad research → delegate one focused writer. Skip SDD.
- Durable proposal/spec/design/tasks would reduce substantial ambiguity → offer SDD. Wait for explicit ask.

## Agent-specific wiring

- **OpenCode** — uses `gentle-orchestrator` (default) or named profiles (`sdd-orchestrator-{cheap,premium,…}`). Switch with Tab key in the TUI.
- **Claude Code** — runs SDD inline (no multi-mode routing). Use sub-agents (Task tool) for the apply phase.

## Engram hooks

- Save the final approved spec as an observation with topic_key `sdd/<feature-slug>`.
- The verify phase must reference the spec observation by ID in its report.
- Archive a session summary at the close of every cycle.

## Out of scope

- Do not produce specs for cosmetic refactors, dependency bumps, or formatting changes.
- Do not skip the user-approval gate between propose and spec.
- Do not merge SDD with organic routes — one route per candidate, one review per candidate.
