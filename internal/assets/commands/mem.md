---
description: Show recent project memory from Engram
---

# /mem

Show the most recent Engram observations for this project and how to search deeper.

## How it works

This project has Engram persistent memory wired via MCP. Call `mem_context` (project) to load recent session history, or `mem_search` with keywords for anything specific.

## Usage

1. Run `mem_context` — this returns recent session summaries and observations for the current project.
2. If you need something specific, call `mem_search` with 2-3 relevant keywords.
3. For a full observation, call `mem_get_observation` with the returned observation ID.

If `mem_context` returns nothing, the project has no saved memory yet — call `mem_save` after the next meaningful piece of work.
