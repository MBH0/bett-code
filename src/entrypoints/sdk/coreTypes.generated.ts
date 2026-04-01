// Stub: Auto-generated types from coreSchemas.ts
// Run `bun scripts/generate-sdk-types.ts` to regenerate.
//
// This stub provides minimal type definitions for compilation.

export type SDKResultSuccess = {
  type: 'result'
  subtype: 'success'
  session_id: string
  is_error: false
  result: string
  total_cost_usd: number
  duration_ms: number
  duration_api_ms: number
  num_turns: number
  usage: Record<string, unknown>
}

export type SDKResultError = {
  type: 'result'
  subtype: 'error'
  session_id: string
  is_error: true
  error: string
}

export type SDKResultMessage = SDKResultSuccess | SDKResultError

export type SDKUserMessage = {
  type: 'user'
  session_id: string
  message: {
    role: 'user'
    content: string | unknown[]
  }
}

export type SDKUserMessageReplay = SDKUserMessage & {
  is_replay: true
}

export type SDKSessionInfo = {
  session_id: string
  type: 'session_info'
}

export type SDKMessage =
  | SDKUserMessage
  | SDKUserMessageReplay
  | SDKResultMessage
  | SDKSessionInfo
  | Record<string, unknown>
