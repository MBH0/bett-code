// Stub: SDK runtime types - not included in this fork.
// These are non-serializable types (callbacks, interfaces with methods).

import type { z } from 'zod/v4'

export type EffortLevel = 'low' | 'medium' | 'high' | 'max'

export type AnyZodRawShape = Record<string, z.ZodType>

export type InferShape<T extends AnyZodRawShape> = {
  [K in keyof T]: z.infer<T[K]>
}

export interface Options {
  model?: string
  maxTurns?: number
  systemPrompt?: string
  appendSystemPrompt?: string
  allowedTools?: string[]
  disallowedTools?: string[]
  mcpServers?: Record<string, unknown>
  cwd?: string
  permissionMode?: string
  signal?: AbortSignal
}

export interface InternalOptions extends Options {
  [key: string]: unknown
}

export type SDKMessage = Record<string, unknown>

export interface Query extends AsyncIterable<SDKMessage> {
  abort(): void
  result: Promise<unknown>
}

export interface InternalQuery extends Query {
  [key: string]: unknown
}

export interface SdkMcpToolDefinition<_Schema extends AnyZodRawShape = AnyZodRawShape> {
  name: string
  description: string
  inputSchema: unknown
  handler: (args: unknown, extra: unknown) => Promise<unknown>
  annotations?: unknown
  searchHint?: string
  alwaysLoad?: boolean
}

export interface McpSdkServerConfigWithInstance {
  name: string
  version?: string
  server: unknown
}

export interface SDKSessionOptions {
  model?: string
  cwd?: string
  permissionMode?: string
  systemPrompt?: string
  signal?: AbortSignal
  [key: string]: unknown
}

export interface SDKSession {
  sendMessage(message: string): AsyncIterable<SDKMessage>
  close(): Promise<void>
  sessionId: string
}

export interface ForkSessionOptions {
  dir?: string
  upToMessageId?: string
  title?: string
}

export interface ForkSessionResult {
  sessionId: string
}

export interface GetSessionInfoOptions {
  dir?: string
}

export interface GetSessionMessagesOptions {
  dir?: string
  limit?: number
  offset?: number
  includeSystemMessages?: boolean
}

export interface ListSessionsOptions {
  dir?: string
  limit?: number
  offset?: number
}

export interface SessionMutationOptions {
  dir?: string
}

export type SessionMessage = {
  role: 'user' | 'assistant'
  content: string | unknown[]
  uuid?: string
  parentUuid?: string
  timestamp?: string
}
