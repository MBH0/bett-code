import type {
  BetaMessage,
  BetaMessageStreamParams,
  BetaRawMessageStreamEvent,
} from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'
import type { ModelProvider, ProviderConfig, ProviderFeature } from './types.js'
import { createUsage } from './types.js'
import { anthropicParamsToGemini } from './message-convert.js'
import {
  messageStartEvent,
  textBlockStartEvent,
  textDeltaEvent,
  toolUseBlockStartEvent,
  inputJsonDeltaEvent,
  contentBlockStopEvent,
  messageDeltaEvent,
  messageStopEvent,
} from './stream-adapter.js'

/**
 * Google Gemini provider adapter.
 * Uses the Gemini REST API directly (no SDK dependency required).
 */
export class GeminiProvider implements ModelProvider {
  readonly name = 'gemini' as const
  private apiKey: string
  private baseUrl: string
  private model: string

  constructor(config: ProviderConfig) {
    this.apiKey = config.apiKey
      ?? process.env.BETT_CODE_PROVIDER_API_KEY
      ?? process.env.GEMINI_API_KEY
      ?? ''
    this.baseUrl = config.baseUrl
      ?? 'https://generativelanguage.googleapis.com/v1beta'
    this.model = config.model
  }

  async createStream(
    params: BetaMessageStreamParams,
    signal: AbortSignal,
  ): Promise<{
    stream: AsyncIterable<BetaRawMessageStreamEvent>
    requestId?: string
  }> {
    const geminiParams = anthropicParamsToGemini(params)
    const model = params.model || this.model

    const url = `${this.baseUrl}/models/${model}:streamGenerateContent?alt=sse&key=${this.apiKey}`

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiParams),
      signal,
    })

    if (!response.ok) {
      const errorBody = await response.text().catch(() => 'unknown error')
      throw new Error(`Gemini API error ${response.status}: ${errorBody}`)
    }

    return {
      stream: this.transformStream(response, model),
    }
  }

  private async *transformStream(
    response: Response,
    model: string,
  ): AsyncIterable<BetaRawMessageStreamEvent> {
    yield messageStartEvent(model)

    let currentIndex = 0
    let hasStartedTextBlock = false
    let totalOutputTokens = 0
    let finishReason = 'end_turn'

    const reader = response.body?.getReader()
    if (!reader) throw new Error('No response body')

    const decoder = new TextDecoder()
    let buffer = ''

    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || !trimmed.startsWith('data: ')) continue
          const data = trimmed.slice(6)

          let chunk: GeminiStreamChunk
          try {
            chunk = JSON.parse(data)
          } catch {
            continue
          }

          const candidate = chunk.candidates?.[0]
          if (!candidate?.content?.parts) continue

          for (const part of candidate.content.parts) {
            if ('text' in part && part.text) {
              if (!hasStartedTextBlock) {
                yield textBlockStartEvent(currentIndex)
                hasStartedTextBlock = true
              }
              yield textDeltaEvent(currentIndex, part.text)
            } else if ('functionCall' in part && part.functionCall) {
              // Close text block if open
              if (hasStartedTextBlock) {
                yield contentBlockStopEvent(currentIndex)
                currentIndex++
                hasStartedTextBlock = false
              }

              const fc = part.functionCall
              const toolId = `toolu_${Date.now()}_${currentIndex}`
              yield toolUseBlockStartEvent(currentIndex, toolId, fc.name)
              const argsJson = JSON.stringify(fc.args ?? {})
              yield inputJsonDeltaEvent(currentIndex, argsJson)
              yield contentBlockStopEvent(currentIndex)
              currentIndex++
            }
          }

          // Check finish reason
          if (candidate.finishReason) {
            finishReason = candidate.finishReason === 'STOP'
              ? 'end_turn'
              : candidate.finishReason === 'MAX_TOKENS'
                ? 'max_tokens'
                : 'end_turn'
          }

          // Capture usage
          if (chunk.usageMetadata) {
            totalOutputTokens = chunk.usageMetadata.candidatesTokenCount ?? 0
          }
        }
      }
    } finally {
      reader.releaseLock()
    }

    // Close open blocks
    if (hasStartedTextBlock) {
      yield contentBlockStopEvent(currentIndex)
      currentIndex++
    }

    yield messageDeltaEvent(finishReason, totalOutputTokens)
    yield messageStopEvent()
  }

  async createMessage(
    params: BetaMessageStreamParams,
    signal: AbortSignal,
  ): Promise<BetaMessage> {
    const geminiParams = anthropicParamsToGemini(params)
    const model = params.model || this.model

    const url = `${this.baseUrl}/models/${model}:generateContent?key=${this.apiKey}`

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiParams),
      signal,
    })

    if (!response.ok) {
      const errorBody = await response.text().catch(() => 'unknown error')
      throw new Error(`Gemini API error ${response.status}: ${errorBody}`)
    }

    const data = await response.json() as GeminiResponse

    const candidate = data.candidates?.[0]
    if (!candidate?.content?.parts) {
      throw new Error('No candidates in Gemini response')
    }

    const content: Record<string, unknown>[] = []
    for (const part of candidate.content.parts) {
      if ('text' in part && part.text) {
        content.push({ type: 'text', text: part.text })
      } else if ('functionCall' in part && part.functionCall) {
        content.push({
          type: 'tool_use',
          id: `toolu_${Date.now()}_${content.length}`,
          name: part.functionCall.name,
          input: part.functionCall.args ?? {},
        })
      }
    }

    const stopReason = candidate.finishReason === 'STOP'
      ? 'end_turn'
      : candidate.finishReason === 'MAX_TOKENS'
        ? 'max_tokens'
        : 'end_turn'

    return {
      id: `msg_gemini_${Date.now()}`,
      type: 'message',
      role: 'assistant',
      content,
      model,
      stop_reason: stopReason,
      stop_sequence: null,
      usage: createUsage(
        data.usageMetadata?.promptTokenCount ?? 0,
        data.usageMetadata?.candidatesTokenCount ?? 0,
      ),
    } as unknown as BetaMessage
  }

  supportsFeature(feature: ProviderFeature): boolean {
    switch (feature) {
      case 'thinking':
        return false
      case 'caching':
        return false // Gemini has context caching but different API
      case 'tool_use':
        return true
      case 'streaming':
        return true
      case 'vision':
        return true
    }
  }
}

// Gemini API types
interface GeminiStreamChunk {
  candidates?: Array<{
    content?: {
      parts: GeminiPart[]
      role: string
    }
    finishReason?: string
  }>
  usageMetadata?: {
    promptTokenCount?: number
    candidatesTokenCount?: number
    totalTokenCount?: number
  }
}

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts: GeminiPart[]
      role: string
    }
    finishReason?: string
  }>
  usageMetadata?: {
    promptTokenCount?: number
    candidatesTokenCount?: number
    totalTokenCount?: number
  }
}

type GeminiPart =
  | { text: string }
  | { functionCall: { name: string; args?: Record<string, unknown> } }
  | { functionResponse: { name: string; response: unknown } }
