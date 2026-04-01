import type {
  BetaMessage,
  BetaMessageStreamParams,
  BetaRawMessageStreamEvent,
  BetaToolUnion,
  BetaUsage,
} from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'

export type ProviderName = 'anthropic' | 'openai' | 'gemini' | 'ollama'

export interface ProviderConfig {
  provider: ProviderName
  apiKey?: string
  baseUrl?: string
  model: string
  options?: Record<string, unknown>
}

export type ProviderFeature =
  | 'thinking'
  | 'tool_use'
  | 'streaming'
  | 'vision'
  | 'caching'

/**
 * Common interface for all model providers.
 * Adapters translate between the provider's native format and the
 * Anthropic SDK types used internally throughout the app.
 */
export interface ModelProvider {
  readonly name: ProviderName

  /**
   * Create a streaming request. Returns an async iterable that yields
   * events shaped like BetaRawMessageStreamEvent so the existing
   * streaming loop in claude.ts can consume them unchanged.
   */
  createStream(
    params: BetaMessageStreamParams,
    signal: AbortSignal,
  ): Promise<{
    stream: AsyncIterable<BetaRawMessageStreamEvent>
    requestId?: string
  }>

  /**
   * Non-streaming request. Returns a BetaMessage-shaped object.
   */
  createMessage(
    params: BetaMessageStreamParams,
    signal: AbortSignal,
  ): Promise<BetaMessage>

  /**
   * Whether this provider supports a given feature.
   */
  supportsFeature(feature: ProviderFeature): boolean
}

/**
 * Helper to create a minimal BetaUsage object.
 */
export function createUsage(
  inputTokens: number,
  outputTokens: number,
): BetaUsage {
  return {
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    cache_creation_input_tokens: 0,
    cache_read_input_tokens: 0,
  } as BetaUsage
}
