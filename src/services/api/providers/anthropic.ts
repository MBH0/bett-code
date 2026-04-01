import type {
  BetaMessage,
  BetaMessageStreamParams,
  BetaRawMessageStreamEvent,
} from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'
import type Anthropic from '@anthropic-ai/sdk'
import type { ProviderFeature, ModelProvider } from './types.js'

/**
 * Anthropic provider adapter. This is the identity adapter — it passes
 * parameters through unchanged to the existing Anthropic SDK client.
 * The existing getAnthropicClient() handles firstParty/bedrock/vertex/foundry.
 */
export class AnthropicProvider implements ModelProvider {
  readonly name = 'anthropic' as const

  constructor(private client: Anthropic) {}

  async createStream(
    params: BetaMessageStreamParams,
    signal: AbortSignal,
  ): Promise<{
    stream: AsyncIterable<BetaRawMessageStreamEvent>
    requestId?: string
  }> {
    const result = await this.client.beta.messages
      .create(
        { ...params, stream: true },
        { signal },
      )
      .withResponse()

    return {
      stream: result.data as AsyncIterable<BetaRawMessageStreamEvent>,
      requestId: result.request_id,
    }
  }

  async createMessage(
    params: BetaMessageStreamParams,
    signal: AbortSignal,
  ): Promise<BetaMessage> {
    return await this.client.beta.messages.create(params, { signal })
  }

  supportsFeature(_feature: ProviderFeature): boolean {
    return true // Anthropic supports all features
  }
}
