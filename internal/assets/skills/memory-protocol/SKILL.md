---
description: Persist important context to Engram and recall it across sessions
---

# Memory Protocol

Engram gives this agent a persistent memory that survives restarts and context compaction. Use it deliberately: save what matters, search before assuming, and summarize at session close.

## When to save (mandatory)

Call `mem_save` immediately after:

- A bug fix is completed
- An architecture or design decision is made
- A non-obvious discovery about the codebase
- Configuration changes or environment setup
- A pattern or convention is established
- A user preference or constraint is learned

### Save format

Use `mem_save` with:

- **title** — verb + what, short and searchable (e.g. "Fixed N+1 query in UserList")
- **type** — `bugfix` | `decision` | `architecture` | `discovery` | `pattern` | `config` | `preference`
- **scope** — `project` (default) or `personal`
- **topic_key** — a stable key for evolving topics (e.g. `architecture/auth-model`); reuse it to update instead of duplicating
- **content** — structured as:

```text
What: one sentence — what was done
Why: the motivation (user request, bug, perf, etc.)
Where: files or paths affected
Learned: gotchas, edge cases, surprises (omit if none)
```

## When to search

When the user references past work — "remember", "recall", "what did we do", "how did we solve", or a topic you lack context on:

1. Call `mem_context` first (cheap recent-history check).
2. If nothing, call `mem_search` with relevant keywords.
3. On a match, `mem_get_observation` for the full untruncated content.

Search proactively at session start when the first user message references a project, feature, or problem — prior sessions may already cover it.

## Session close protocol

Before ending a session or saying "done", always call `mem_session_summary`:

```text
## Goal
## Instructions
## Discoveries
## Accomplished
## Next Steps
## Relevant Files
```

This is not optional — skipping it leaves the next session blind.

## Compaction

If you see a compaction message or "FIRST ACTION REQUIRED", the protocol is:

1. Immediately call `mem_session_summary` with the compacted content.
2. Call `mem_context` to recover prior context.
3. Only then continue working.
