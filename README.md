# bett-ai-harness

A small Go terminal harness that wires [Engram](https://github.com/gentleman-programming/engram) persistent memory into [OpenCode](https://opencode.ai). It detects your OpenCode installation, installs the Engram OpenCode plugin, registers the Engram MCP server, and installs slash commands and skills — all from one interactive menu.

## What it does

Run `bett-ai-harness` to get a status panel plus a three-action menu:

1. **Wire Engram** — installs `engram.ts` into OpenCode's plugin dir, registers the `engram` MCP server in `opencode.json`, and ensures `engram serve` is running.
2. **Install Commands & Skills** — copies the bundled slash commands and skills into OpenCode's config dir.
3. **Re-sync** — does both, and returns to a completion screen.

## Install

```bash
go build -o bett-ai-harness ./cmd/bett-harness
./bett-ai-harness --help
```

Prerequisites: `opencode` on PATH and the `engram` binary (e.g. `brew install gentleman-programming/tap/engram`).

## What gets installed

| Artifact | Destination |
| --- | --- |
| `internal/assets/plugins/engram.ts` | `~/.config/opencode/plugins/engram.ts` |
| MCP server `engram` (local stdio) | `~/.config/opencode/opencode.json` |
| `/doctor`, `/mem`, `/mem-search`, `/skill-registry` | `~/.config/opencode/commands/` |
| `memory-protocol` skill | `~/.config/opencode/skills/memory-protocol/SKILL.md` |

## Layout

```
cmd/bett-harness/main.go   entrypoint
internal/app/app.go        flag parsing + program launch
internal/tui/              Bubbletea model, views, styles
internal/harness/          orchestration of install/re-sync operations
internal/opencode/         OpenCode config dir, MCP + plugin registration
internal/engram/           Engram binary/server detection and wiring
internal/model/            shared status types
internal/assets/           embedded plugin, commands, and skills (go:embed)
```

## Development

```bash
gofmt -l .
go vet ./...
go build ./...
```

## Testing

Unit tests run without any external dependencies:

```bash
go test ./...
```

End-to-end tests drive the real Bubbletea TUI (same key path a user takes)
and assert that OpenCode gets configured on disk, that Engram's MCP server
comes up and speaks the protocol OpenCode expects, and that a real `opencode`
binary accepts the generated config:

```bash
go test ./e2e/ -v
```

The e2e tests skip automatically when `engram`/`opencode` are not on PATH.
They use throwaway `XDG_CONFIG_HOME` and `HOME` dirs, so your real config and
`~/.engram` are never touched. Run with `-race` to check for data races.
