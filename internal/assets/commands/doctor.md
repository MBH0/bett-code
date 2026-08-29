---
description: Run read-only health checks for OpenCode and Engram
---

# /doctor

Diagnose the bett harness: OpenCode config, Engram binary and server reachability, MCP registration, and installed skills.

## Checks

1. **OpenCode binary** — is `opencode` on PATH?
2. **Engram binary** — is `engram` on PATH?
3. **Engram server** — is `engram serve` reachable on 127.0.0.1:7437? (call the health endpoint)
4. **MCP wiring** — is the `engram` server registered in `~/.config/opencode/opencode.json`?
5. **Skills** — list skill folders present under `~/.config/opencode/skills/`.

## Output

Report each check as a clear pass/fail line. For failures, give the exact fix command:

```bash
# Engram binary missing
brew install gentleman-programming/tap/engram

# Server not running (used by the plugin's HTTP bridge)
engram serve
```

If everything passes, confirm the harness is healthy and mention that memory persists across sessions.
