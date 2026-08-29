/**
 * bett-ai-harness — Engram OpenCode plugin adapter
 *
 * Thin bridge between OpenCode's event system and the Engram Go binary.
 * The Go binary runs as a local HTTP server and owns all persistence.
 *
 *   OpenCode events → this plugin → HTTP 127.0.0.1:7437 → engram serve → SQLite
 *
 * The plugin only observes and forwards. It never stores data itself and it
 * silently no-ops when the Engram server is not reachable.
 */

import type { Plugin } from "@opencode-ai/plugin"

// ─── Configuration ───────────────────────────────────────────────────────────

const ENGRAM_PORT = parseInt(process.env.ENGRAM_PORT ?? "7437")
const ENGRAM_URL = `http://127.0.0.1:${ENGRAM_PORT}`
const ENGRAM_BIN = process.env.ENGRAM_BIN ?? "engram"

// Engram's own MCP tools — not counted as real tool calls for session stats.
const ENGRAM_TOOLS = new Set([
  "mem_search", "mem_save", "mem_update", "mem_delete",
  "mem_suggest_topic_key", "mem_save_prompt", "mem_session_summary",
  "mem_context", "mem_stats", "mem_timeline", "mem_get_observation",
  "mem_session_start", "mem_session_end",
])

// ─── Memory instructions ─────────────────────────────────────────────────────
// Injected into the agent context so it knows when and how to persist memory.

const MEMORY_INSTRUCTIONS = `## Engram Persistent Memory — Protocol

You have access to Engram, a persistent memory system that survives across sessions and compactions.

### WHEN TO SAVE (mandatory — not optional)

Call \`mem_save\` IMMEDIATELY after any of these:
- Bug fix completed
- Architecture or design decision made
- Non-obvious discovery about the codebase
- Configuration change or environment setup
- Pattern established (naming, structure, convention)
- User preference or constraint learned

Format for \`mem_save\`:
- **title**: Verb + what — short, searchable (e.g. "Fixed N+1 query in UserList")
- **type**: bugfix | decision | architecture | discovery | pattern | config | preference
- **scope**: \`project\` (default) | \`personal\`
- **topic_key** (optional): stable key like \`architecture/auth-model\`
- **content**:
  **What**: One sentence — what was done
  **Why**: What motivated it (user request, bug, performance, etc.)
  **Where**: Files or paths affected
  **Learned**: Gotchas, edge cases, things that surprised you (omit if none)

Topic rules:
- Different topics must not overwrite each other (e.g. architecture vs bugfix)
- Reuse the same \`topic_key\` to update an evolving topic instead of creating new observations
- If unsure about the key, call \`mem_suggest_topic_key\` first and then reuse it
- Use \`mem_update\` when you have an exact observation ID to correct

### WHEN TO SEARCH MEMORY

When the user asks to recall something — any variation of "remember", "recall",
"what did we do", "how did we solve", or references to past work:
1. First call \`mem_context\` — checks recent session history (fast, cheap)
2. If not found, call \`mem_search\` with relevant keywords (FTS5 full-text search)
3. If you find a match, use \`mem_get_observation\` for full untruncated content

Also search memory PROACTIVELY when:
- Starting work on something that might have been done before
- The user's FIRST message references the project, a feature, or a problem
- You have no context on a topic — check if past sessions covered it

### SESSION CLOSE PROTOCOL (mandatory)

Before ending a session or saying "done" / "that's it", you MUST call
\`mem_session_summary\` with this structure:

## Goal
[What we were working on this session]

## Instructions
[User preferences or constraints discovered — skip if none]

## Discoveries
- [Technical findings, gotchas, non-obvious learnings]

## Accomplished
- [Completed items with key details]

## Next Steps
- [What remains to be done — for the next session]

## Relevant Files
- path/to/file — [what it does or what changed]

This is NOT optional. If you skip this, the next session starts blind.

### AFTER COMPACTION

If you see a message about compaction or context reset, or see "FIRST ACTION
REQUIRED" in your context:
1. IMMEDIATELY call \`mem_session_summary\` with the compacted summary content
2. Then call \`mem_context\` to recover additional context from previous sessions
3. Only THEN continue working
`

// ─── HTTP helpers ────────────────────────────────────────────────────────────

async function engramFetch(
  path: string,
  opts: { method?: string; body?: any } = {}
): Promise<any> {
  try {
    const res = await fetch(`${ENGRAM_URL}${path}`, {
      method: opts.method ?? "GET",
      headers: opts.body ? { "Content-Type": "application/json" } : undefined,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    })
    return await res.json()
  } catch {
    return null // server not running — silent no-op
  }
}

async function isEngramRunning(): Promise<boolean> {
  try {
    const res = await fetch(`${ENGRAM_URL}/health`, {
      signal: AbortSignal.timeout(500),
    })
    return res.ok
  } catch {
    return false
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function extractProjectName(directory: string): string {
  try {
    const result = Bun.spawnSync(["git", "-C", directory, "remote", "get-url", "origin"])
    if (result.exitCode === 0) {
      const url = result.stdout?.toString().trim()
      if (url) {
        const name = url.replace(/\.git$/, "").split(/[/:]/).pop()
        if (name) return name
      }
    }
  } catch {}
  try {
    const result = Bun.spawnSync(["git", "-C", directory, "rev-parse", "--show-toplevel"])
    if (result.exitCode === 0) {
      const root = result.stdout?.toString().trim()
      if (root) return root.split("/").pop() ?? "unknown"
    }
  } catch {}
  return directory.split("/").pop() ?? "unknown"
}

function truncate(str: string, max: number): string {
  if (!str) return ""
  return str.length > max ? str.slice(0, max) + "..." : str
}

function stripPrivateTags(str: string): string {
  if (!str) return ""
  return str.replace(/<private>[\s\S]*?<\/private>/gi, "[REDACTED]").trim()
}

// ─── Plugin export ───────────────────────────────────────────────────────────

export const Engram: Plugin = async (ctx) => {
  const oldProject = ctx.directory.split("/").pop() ?? "unknown"
  const project = extractProjectName(ctx.directory)

  const toolCounts = new Map<string, number>()
  const lastNudgeTime = new Map<string, number>()
  const knownSessions = new Set<string>()
  // Sub-agents (Task() calls) must not become top-level Engram sessions.
  const subAgentSessions = new Set<string>()

  async function ensureSession(sessionId: string): Promise<void> {
    if (!sessionId || knownSessions.has(sessionId)) return
    if (subAgentSessions.has(sessionId)) return
    knownSessions.add(sessionId)
    await engramFetch("/sessions", {
      method: "POST",
      body: { id: sessionId, project, directory: ctx.directory },
    })
  }

  // Try to start the Engram server if it is not running.
  const running = await isEngramRunning()
  if (!running) {
    try {
      Bun.spawn([ENGRAM_BIN, "serve"], { stdout: "ignore", stderr: "ignore", stdin: "ignore" })
      await new Promise((r) => setTimeout(r, 500))
    } catch {}
  }

  // Migrate project name if it changed (one-time, idempotent).
  if (oldProject !== project) {
    await engramFetch("/projects/migrate", {
      method: "POST",
      body: { old_project: oldProject, new_project: project },
    })
  }

  // Auto-import git-synced memory chunks when the repo carries a manifest.
  try {
    const manifestFile = `${ctx.directory}/.engram/manifest.json`
    const file = Bun.file(manifestFile)
    if (await file.exists()) {
      Bun.spawn([ENGRAM_BIN, "sync", "--import"], {
        cwd: ctx.directory,
        stdout: "ignore", stderr: "ignore", stdin: "ignore",
      })
    }
  } catch {}

  return {
    // ─── Session lifecycle ───────────────────────────────────────────
    event: async ({ event }) => {
      if (event.type === "session.created") {
        const info = (event.properties as any)?.info
        const sessionId = info?.id
        const parentID = info?.parentID
        const title: string = info?.title ?? ""
        const isSubAgent = !!parentID || title.endsWith(" subagent)")
        if (sessionId && !isSubAgent) {
          await ensureSession(sessionId)
        } else if (sessionId && isSubAgent) {
          subAgentSessions.add(sessionId)
        }
      }

      if (event.type === "session.deleted") {
        const info = (event.properties as any)?.info
        const sessionId = info?.id
        if (sessionId) {
          toolCounts.delete(sessionId)
          knownSessions.delete(sessionId)
          subAgentSessions.delete(sessionId)
          lastNudgeTime.delete(sessionId)
        }
      }
    },

    // ─── User prompt capture ────────────────────────────────────────
    "chat.message": async (input, output) => {
      if (subAgentSessions.has(input.sessionID)) return

      const content = output.parts
        .filter((p) => p.type === "text")
        .map((p) => (p as any).text ?? "")
        .join("\n")
        .trim()

      const fallback = !content && output.message.summary
        ? `${output.message.summary.title ?? ""}\n${output.message.summary.body ?? ""}`.trim()
        : ""

      const finalContent = content || fallback
      if (finalContent.length > 10) {
        await ensureSession(input.sessionID)
        await engramFetch("/prompts", {
          method: "POST",
          body: {
            session_id: input.sessionID,
            content: stripPrivateTags(truncate(finalContent, 2000)),
            project,
          },
        })
      }
    },

    // ─── Tool tracking + passive capture ─────────────────────────────
    "tool.execute.after": async (input, output) => {
      if (ENGRAM_TOOLS.has(input.tool.toLowerCase())) return

      const sessionId = input.sessionID
      if (sessionId) {
        await ensureSession(sessionId)
        toolCounts.set(sessionId, (toolCounts.get(sessionId) ?? 0) + 1)
      }

      if (input.tool === "Task" && output && sessionId) {
        const text = typeof output === "string" ? output : JSON.stringify(output)
        if (text.length > 50) {
          await engramFetch("/observations/passive", {
            method: "POST",
            body: {
              session_id: sessionId,
              content: stripPrivateTags(text),
              project,
              source: "task-complete",
            },
          })
        }
      }
    },

    // ─── Always-on memory instructions ──────────────────────────────
    "experimental.chat.system.transform": async (input, output) => {
      if (output.system.length > 0) {
        output.system[output.system.length - 1] += "\n\n" + MEMORY_INSTRUCTIONS
      } else {
        output.system.push(MEMORY_INSTRUCTIONS)
      }

      // Save nudge: remind the agent if it hasn't saved memory in a while.
      try {
        const sessionID: string = input.sessionID ?? ""
        if (!sessionID || subAgentSessions.has(sessionID)) return

        const cooldownSecs = parseInt(process.env.ENGRAM_NUDGE_COOLDOWN_SECS ?? "900", 10)
        const nowSecs = Math.floor(Date.now() / 1000)
        const lastNudge = lastNudgeTime.get(sessionID)
        if (lastNudge !== undefined && nowSecs - lastNudge < cooldownSecs) return

        let lastObsEpoch = 0
        try {
          const obsRes = await fetch(
            `${ENGRAM_URL}/observations?project=${encodeURIComponent(project)}&limit=1&sort=created_at:desc`,
            { signal: AbortSignal.timeout(200) }
          )
          if (obsRes.ok) {
            const obsData = await obsRes.json()
            const createdAt: string = obsData?.[0]?.created_at ?? ""
            if (createdAt) {
              const normalized = createdAt.includes("T") ? createdAt : createdAt.replace(" ", "T") + "Z"
              const ms = new Date(normalized).getTime()
              if (!Number.isNaN(ms)) lastObsEpoch = Math.floor(ms / 1000)
            }
          }
        } catch { return }

        if (lastObsEpoch === 0 || nowSecs - lastObsEpoch < 900) return

        const nudge =
          "\n\nMEMORY REMINDER: It's been over 15 minutes since your last memory save. " +
          "If you've made decisions, discoveries, completed significant work, or found " +
          "non-obvious things, call mem_save now."
        if (output.system.length > 0) {
          output.system[output.system.length - 1] += nudge
        } else {
          output.system.push(nudge)
        }
        lastNudgeTime.set(sessionID, nowSecs)
      } catch {}
    },

    // ─── Compaction survival ─────────────────────────────────────────
    "experimental.session.compacting": async (input, output) => {
      if (input.sessionID) {
        await ensureSession(input.sessionID)
      }

      const data = await engramFetch(`/context?project=${encodeURIComponent(project)}`)
      if (data?.context) {
        output.context.push(data.context)
      }

      output.context.push(
        `CRITICAL INSTRUCTION FOR COMPACTED SUMMARY:\n` +
        `The agent has access to Engram persistent memory via MCP tools.\n` +
        `You MUST include the following instruction at the TOP of the compacted summary:\n\n` +
        `"FIRST ACTION REQUIRED: Call mem_session_summary with the content of this compacted summary. ` +
        `Use project: '${project}'. This preserves what was accomplished before compaction. ` +
        `Do this BEFORE any other work."\n\n` +
        `This is NOT optional. Without this, everything done before compaction is lost from memory.`
      )
    },
  }
}
