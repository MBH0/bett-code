# bett-ai-harness

A small Go terminal harness that wires [Engram](https://github.com/gentleman-programming/engram) persistent memory into [OpenCode](https://opencode.ai) and [Claude Code](https://claude.ai/download). It detects your agent installations, installs the Engram plugin, registers MCP servers, installs slash commands and skills, manages SDD profiles, and toggles review mode — all from one multi-agent orchestrated TUI.

## What it does

Run `bett-ai-harness` to get a multi-agent status panel plus an 8-action orchestrated menu:

1. **Wire bett-ai into selected agent** — installs the plugin (OpenCode) or registers MCP (Claude Code), and ensures `engram serve` is running.
2. **Install Commands & Skills** — copies bundled slash commands and skills into the active agent's config dir.
3. **Re-sync (both)** — does both in sequence.
4. **Select Agent (OpenCode / Claude Code)** — picker with presence detection for both supported agents.
5. **SDD Profiles (multi-mode)** — gentle-orchestrator style: toggle `default`, `cheap`, `premium` model profiles per agent.
6. **MCP Servers** — list MCP servers registered for the active agent.
7. **Review Mode (RDD)** — toggle Receipt-Driven Development review (disabled ↔ enabled).
8. **Doctor / Health Check** — re-detects agent binaries and Engram state.

## Install

Pick the layer that matches your environment. All three install from this same repo.

### Layer 1: One-liner bootstrap (recommended)

**macOS / Linux:**

```bash
curl -fsSL https://raw.githubusercontent.com/MBH0/bett-code/main/scripts/install.sh | bash
```

**Windows (PowerShell 5.1+):**

```powershell
irm https://raw.githubusercontent.com/MBH0/bett-code/main/scripts/install.ps1 | iex
```

The bootstrap script:
1. Detects OS + architecture (`darwin/arm64`, `linux/amd64`, …).
2. Resolves the latest stable release from the GitHub API (or pins a version with `--version vX.Y.Z`).
3. Downloads the matching archive from `releases/download/<tag>/`.
4. Verifies the binary and warns if it is not on PATH.
5. Prints the next-step hint.

Flags:

```bash
curl -fsSL .../install.sh | bash -s -- --version v1.2.3   # pin exact version
curl -fsSL .../install.sh | bash -s -- --channel beta      # opt into prereleases
```

### Layer 2: `go install` (for Go users)

```bash
go install github.com/MBH0/bett-code/cmd/bett-harness@latest   # latest stable
go install github.com/MBH0/bett-code/cmd/bett-harness@v1.2.3   # pinned
go install github.com/MBH0/bett-code/cmd/bett-harness@main     # unreleased
```

Requires Go 1.21+. Writes the binary to `$GOBIN` (or `$GOPATH/bin`).

### Layer 3: Package managers

- **Homebrew** (macOS / Linux): `brew install MBH0/tap/bett-ai-harness`
- **Scoop** (Windows): `scoop install MBH0/scoop-bucket/bett-ai-harness`

(Both taps require the respective bucket repos to be public. See `.goreleaser.yaml`.)

### Verify the install

```bash
curl -fsSL https://raw.githubusercontent.com/MBH0/bett-code/main/scripts/verify-install.sh | bash
```

Checks the binary, agent binaries, Engram, and Node.js.

### Prerequisites

| Requirement | Why | Install |
| --- | --- | --- |
| `opencode` or `claude` on PATH | The agent harness targets | See agent docs |
| `engram` binary | Persistent memory backend | `brew install gentleman-programming/tap/engram` |
| `curl` (POSIX) / PowerShell 5.1+ | Installer transport | Pre-installed on every supported OS |
| Go 1.21+ (Layer 2 only) | Compiling from source | https://go.dev/dl/ |
| Node.js 18+ (optional) | Some agent plugins | https://nodejs.org |

## What gets installed

### OpenCode (selected agent)

| Artifact | Destination |
| --- | --- |
| `internal/assets/plugins/engram.ts` | `~/.config/opencode/plugins/engram.ts` |
| MCP server `bett-ai` (local stdio) | `~/.config/opencode/opencode.json` |
| `/doctor`, `/mem`, `/mem-search`, `/skill-registry` | `~/.config/opencode/commands/` |
| `memory-protocol` skill | `~/.config/opencode/skills/memory-protocol/SKILL.md` |
| `sdd-profiles.json` | `~/.config/opencode/sdd-profiles.json` |
| `review-mode.json` | `~/.config/opencode/review-mode.json` |

### Claude Code (selected agent)

| Artifact | Destination |
| --- | --- |
| MCP server `bett-ai` (stdio) | `~/.claude/mcp.json` |
| `/doctor`, `/mem`, `/mem-search`, `/skill-registry` | `~/.claude/commands/` |
| `memory-protocol` skill | `~/.claude/skills/memory-protocol/SKILL.md` |
| Managed `<!-- gentle-ai:bett-harness -->` block | `~/.claude/CLAUDE.md` |
| `sdd-profiles.json` | `~/.claude/sdd-profiles.json` |
| `review-mode.json` | `~/.claude/review-mode.json` |

## Layout

```
cmd/bett-harness/main.go       entrypoint
internal/app/app.go            flag parsing + program launch
internal/tui/                  Bubbletea model, views, styles (multi-agent screens)
internal/harness/              orchestration: WireAgent, SDD profiles, review mode
internal/opencode/             OpenCode config dir, MCP + plugin registration
internal/claudecode/           Claude Code config dir, MCP registration, CLAUDE.md
internal/engram/               Engram binary/server detection and wiring
internal/model/                shared types (AgentKind, ClaudeStatus, SDDProfile…)
internal/assets/               embedded plugin, commands, and skills (go:embed)
scripts/install.sh             POSIX bootstrap installer
scripts/install.ps1            Windows bootstrap installer
scripts/verify-install.sh      post-install health check
.goreleaser.yaml               cross-platform release pipeline (binaries, Homebrew, Scoop)
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

## Releasing

```bash
# Prerelease check (no publish)
goreleaser release --clean --skip=publish

# Cut a real release
goreleaser release --clean

# With minisign signing
MINISIGN_KEY="$HOME/.minisign/bett.key" goreleaser release --clean
```

Windows binary distribution is held until publicly trusted RSA Authenticode
signing is provisioned (managed OIDC with Azure Artifact Signing preferred).
Until then, Windows users fall back to `go install` from the installer.

## Cross-platform config paths

| Agent | macOS / Linux | Windows |
| --- | --- | --- |
| OpenCode | `~/.config/opencode/` | `%USERPROFILE%\.config\opencode\` |
| Claude Code | `~/.claude/` | `%USERPROFILE%\.claude\` |
