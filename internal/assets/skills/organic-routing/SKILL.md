---
description: Decide between direct, delegated, or SDD implementation routes based on the size and shape of the task
---

# Organic Implementation Routing

The smallest useful route wins. This skill is the decision table that picks between direct inline, one bounded delegated worker, and optional SDD. Review strength is orthogonal to route selection.

## Decision table

| Situation | Route |
| --- | --- |
| 1–3 files, mechanical change already understood | Direct inline in this conversation |
| 4+ files, reading prepares a write, broad research | One delegated worker with focused mission |
| One writer changes 2+ non-trivial files | Delegate, even if file count is small |
| Durable proposal/spec/design/tasks would reduce substantial ambiguity | Offer SDD; only proceed after explicit ask |
| Cosmetic refactor, dependency bump, formatting | Direct inline, no SDD |

## Delegation rules (Hermes-style)

When delegating, the worker mission must be self-contained:

- Exact goal (what success looks like).
- File paths or targets.
- Relevant prior context (don't make the worker re-discover).
- Constraints (style, dependencies, forbidden changes).
- Expected evidence (test output, lint result, screenshot).
- Toolset / MCP / skills the worker may use.

Workers do NOT inherit parent MCP/skills by default — pass them explicitly.

## Provider-owned state

- Native commands own repository identity, candidate scope, lifecycle transitions.
- Per-action test, build, install, or review workers do not change the selected route.
- Provider status, recovery, and reconciliation own interrupted operations.
- Do not infer authority or replay safety from agent narration.

## What this skill is NOT

- It does not decide review strength. RDD review is a separate, user-owned toggle.
- It does not authorize commit, push, PR, or release. Those remain ordinary repository policy.
- It does not run SDD on its own. SDD requires an explicit request or accepted proposal.
