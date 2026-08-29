---
description: Search Engram memory for past decisions and discoveries
argument-hint: "<query>"
---

# /mem-search <query>

Search persistent memory for past decisions, bug fixes, and context relevant to a query.

## Usage

1. Accept the query argument.
2. Call `mem_search` with the query keywords (`match_mode: "any"` for broader recall).
3. Return the top results verbatim: title, type, project, date, and the What/Why/Where/Learned summary.
4. When a result looks relevant, offer to load the full observation with `mem_get_observation`.

## Tips

- Start with the user's exact keywords; if no match, retry with looser synonyms.
- Prioritize the most recent observations and `decision` / `architecture` / `bugfix` types.
- If memory is empty for this project, say so and suggest what would be worth saving.
