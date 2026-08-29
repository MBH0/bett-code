---
description: Add, remove, list, and debug MCP servers across supported agents without clobbering user config
---

# MCP Management

MCP (Model Context Protocol) servers extend the agent with external tools. This skill covers adding, removing, listing, and debugging them across the agents this harness targets — without destroying user-managed entries.

## Where each agent keeps MCP config

| Agent | File | Type field | Format |
| --- | --- | --- | --- |
| OpenCode | `~/.config/opencode/opencode.json` → `mcp` | `local` | `{command: [..args], enabled: true}` |
| Claude Code | `~/.claude/mcp.json` → `mcpServers` | `stdio` | `{command: "...", args: [...]}` |

The harness writes to the active agent's file via `opencode.RegisterMCP` or `claudecode.RegisterMCP`. Always preserve unknown keys.

## Add a server

1. Verify the server binary is on PATH or resolve its absolute path.
2. Decide: local stdio vs remote (HTTP/SSE). Stdio is the default.
3. Call the appropriate `RegisterMCP(name, command, args)` function from `internal/harness`.
4. The function returns `(changed bool, err error)`. `changed=false` means the server was already registered — no-op.
5. If the server requires the agent to restart, prompt the user.

## Remove a server

1. Read the config file, delete the entry under the appropriate block (`mcp` or `mcpServers`).
2. Preserve every other key.
3. Write back with two-space indent.

## List servers

The harness reads the config file on every status detection. Use `harness.DetectStatus()` to populate the TUI's MCP manager view.

## Debug a server

- `ServerUp` check: TCP connect to the configured port (Engram default 7437).
- Stdio servers: check the binary exists and runs (`binary --help`).
- HTTP/SSE servers: `curl -fsS https://.../health` if exposed.
- Always re-run detection after edits: open the TUI's "Doctor / Health Check".

## Anti-patterns

- Clobbering the entire config to add one entry — always merge into the existing block.
- Hard-coding absolute paths in user-visible commands — prefer `which <name>` or PATH resolution.
- Adding servers the user did not request.
- Skipping the "already registered" short-circuit (writes are still writes even if no-op).
