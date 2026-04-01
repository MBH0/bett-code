import type {
  BetaMessage,
  BetaMessageStreamParams,
  BetaRawMessageStreamEvent,
} from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'
import type { ModelProvider, ProviderConfig, ProviderFeature } from './types.js'
import { createUsage } from './types.js'
import {
  anthropicParamsToOpenAI,
  type OpenAIChatCompletionParams,
} from './message-convert.js'
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
 * Streaming chunk from an OpenAI-compatible API.
 */
interface OpenAIStreamChunk {
  id: string
  object: string
  created: number
  model: string
  choices: Array<{
    index: number
    delta: {
      role?: string
      content?: string | null
      tool_calls?: Array<{
        index: number
        id?: string
        type?: string
        function?: {
          name?: string
          arguments?: string
        }
      }>
    }
    finish_reason: string | null
  }>
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

/**
 * OpenAI-compatible provider adapter.
 * Works with OpenAI, Groq, Together, Mistral, DeepSeek, and any
 * API that follows the OpenAI chat completions format.
 */
export class OpenAICompatProvider implements ModelProvider {
  readonly name: 'openai' | 'ollama'
  protected apiKey: string
  protected baseUrl: string
  protected model: string

  constructor(config: ProviderConfig) {
    this.name = config.provider as 'openai' | 'ollama'
    this.apiKey = config.apiKey ?? process.env.BETT_CODE_PROVIDER_API_KEY ?? ''
    this.baseUrl = config.baseUrl
      ?? process.env.BETT_CODE_PROVIDER_BASE_URL
      ?? 'https://api.openai.com/v1'
    this.model = config.model
  }

  async createStream(
    params: BetaMessageStreamParams,
    signal: AbortSignal,
  ): Promise<{
    stream: AsyncIterable<BetaRawMessageStreamEvent>
    requestId?: string
  }> {
    const openaiParams = anthropicParamsToOpenAI(params)
    openaiParams.stream = true

    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
      },
      body: JSON.stringify(openaiParams),
      signal,
    })

    if (!response.ok) {
      const errorBody = await response.text().catch(() => 'unknown error')
      throw new Error(
        `${this.name} API error ${response.status}: ${errorBody}`,
      )
    }

    const requestId = response.headers.get('x-request-id') ?? undefined

    return {
      stream: this.transformStream(response, params.model),
      requestId,
    }
  }

  /**
   * Transform an OpenAI SSE stream into Anthropic-shaped events.
   */
  private async *transformStream(
    response: Response,
    model: string,
  ): AsyncIterable<BetaRawMessageStreamEvent> {
    yield messageStartEvent(model)

    let currentContentIndex = 0
    let hasStartedTextBlock = false
    const toolCallIndices = new Map<number, number>() // openai tool index -> our content block index
    const toolCallArgs = new Map<number, string>() // openai tool index -> accumulated args
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
          if (data === '[DONE]') continue

          let chunk: OpenAIStreamChunk
          try {
            chunk = JSON.parse(data)
          } catch {
            continue
          }

          const choice = chunk.choices?.[0]
          if (!choice) continue

          // Handle text content
          if (choice.delta.content) {
            if (!hasStartedTextBlock) {
              yield textBlockStartEvent(currentContentIndex)
              hasStartedTextBlock = true
            }
            yield textDeltaEvent(currentContentIndex, choice.delta.content)
          }

          // Handle tool calls
          if (choice.delta.tool_calls) {
            for (const tc of choice.delta.tool_calls) {
              const tcIndex = tc.index

              if (tc.id && tc.function?.name) {
                // New tool call starting
                // Close text block if open
                if (hasStartedTextBlock) {
                  yield contentBlockStopEvent(currentContentIndex)
                  currentContentIndex++
                  hasStartedTextBlock = false
                }

                toolCallIndices.set(tcIndex, currentContentIndex)
                toolCallArgs.set(tcIndex, '')
                yield toolUseBlockStartEvent(
                  currentContentIndex,
                  tc.id,
                  tc.function.name,
                )
              }

              // Accumulate function arguments
              if (tc.function?.arguments) {
                const existingArgs = toolCallArgs.get(tcIndex) ?? ''
                toolCallArgs.set(tcIndex, existingArgs + tc.function.arguments)

                const blockIndex = toolCallIndices.get(tcIndex)
                if (blockIndex !== undefined) {
                  yield inputJsonDeltaEvent(blockIndex, tc.function.arguments)
                }
              }
            }
          }

          // Handle finish reason
          if (choice.finish_reason) {
            finishReason = choice.finish_reason === 'tool_calls'
              ? 'tool_use'
              : choice.finish_reason === 'stop'
                ? 'end_turn'
                : choice.finish_reason === 'length'
                  ? 'max_tokens'
                  : 'end_turn'
          }

          // Capture usage
          if (chunk.usage) {
            totalOutputTokens = chunk.usage.completion_tokens
          }
        }
      }
    } finally {
      reader.releaseLock()
    }

    // Close any open blocks
    if (hasStartedTextBlock) {
      yield contentBlockStopEvent(currentContentIndex)
      currentContentIndex++
    }

    // Close any open tool call blocks
    for (const [, blockIndex] of toolCallIndices) {
      yield contentBlockStopEvent(blockIndex)
      currentContentIndex = Math.max(currentContentIndex, blockIndex + 1)
    }

    yield messageDeltaEvent(finishReason, totalOutputTokens)
    yield messageStopEvent()
  }

  async createMessage(
    params: BetaMessageStreamParams,
    signal: AbortSignal,
  ): Promise<BetaMessage> {
    const openaiParams = anthropicParamsToOpenAI(params)
    openaiParams.stream = false

    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
      },
      body: JSON.stringify(openaiParams),
      signal,
    })

    if (!response.ok) {
      const errorBody = await response.text().catch(() => 'unknown error')
      throw new Error(
        `${this.name} API error ${response.status}: ${errorBody}`,
      )
    }

    const data = await response.json() as {
      id: string
      model: string
      choices: Array<{
        message: {
          content?: string | null
          tool_calls?: Array<{
            id: string
            function: { name: string; arguments: string }
          }>
        }
        finish_reason: string
      }>
      usage?: { prompt_tokens: number; completion_tokens: number }
    }

    const choice = data.choices[0]
    if (!choice) throw new Error('No choices in response')

    const content: Record<string, unknown>[] = []

    if (choice.message.content) {
      content.push({ type: 'text', text: choice.message.content })
    }

    if (choice.message.tool_calls) {
      for (const tc of choice.message.tool_calls) {
        let parsedArgs: unknown
        try {
          parsedArgs = JSON.parse(tc.function.arguments)
        } catch {
          parsedArgs = tc.function.arguments
        }
        content.push({
          type: 'tool_use',
          id: tc.id,
          name: tc.function.name,
          input: parsedArgs,
        })
      }
    }

    const stopReason = choice.finish_reason === 'tool_calls'
      ? 'tool_use'
      : choice.finish_reason === 'stop'
        ? 'end_turn'
        : choice.finish_reason === 'length'
          ? 'max_tokens'
          : 'end_turn'

    return {
      id: data.id,
      type: 'message',
      role: 'assistant',
      content,
      model: data.model,
      stop_reason: stopReason,
      stop_sequence: null,
      usage: createUsage(
        data.usage?.prompt_tokens ?? 0,
        data.usage?.completion_tokens ?? 0,
      ),
    } as unknown as BetaMessage
  }

  supportsFeature(feature: ProviderFeature): boolean {
    switch (feature) {
      case 'thinking':
        return false
      case 'caching':
        return false
      case 'tool_use':
        return true
      case 'streaming':
        return true
      case 'vision':
        return true
    }
  }
}
