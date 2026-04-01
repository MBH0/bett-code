import type { ModelProvider, ProviderConfig, ProviderName } from './types.js'
import { getAPIProvider } from '../../../utils/model/providers.js'

/**
 * Detect the configured provider from environment variables.
 */
export function getProviderName(): ProviderName {
  const explicitProvider = process.env.BETT_CODE_PROVIDER?.toLowerCase()
  if (explicitProvider === 'openai') return 'openai'
  if (explicitProvider === 'gemini') return 'gemini'
  if (explicitProvider === 'ollama') return 'ollama'
  if (explicitProvider === 'anthropic') return 'anthropic'

  // Fall back to existing provider detection for Anthropic variants
  return 'anthropic'
}

/**
 * Check if the current provider is a non-Anthropic provider.
 */
export function isExternalProvider(): boolean {
  return getProviderName() !== 'anthropic'
}

/**
 * Build a ProviderConfig from environment variables.
 */
export function getProviderConfig(): ProviderConfig {
  const provider = getProviderName()
  return {
    provider,
    apiKey: process.env.BETT_CODE_PROVIDER_API_KEY,
    baseUrl: process.env.BETT_CODE_PROVIDER_BASE_URL,
    model: process.env.ANTHROPIC_MODEL ?? process.env.BETT_CODE_MODEL ?? '',
    options: {
      ollamaHost: process.env.BETT_CODE_OLLAMA_HOST,
    },
  }
}

/**
 * Create a ModelProvider instance for the given config.
 * Uses dynamic imports to avoid loading unnecessary SDKs.
 */
export async function getModelProvider(
  config?: ProviderConfig,
): Promise<ModelProvider> {
  const resolvedConfig = config ?? getProviderConfig()

  switch (resolvedConfig.provider) {
    case 'openai': {
      const { OpenAICompatProvider } = await import('./openai-compat.js')
      return new OpenAICompatProvider(resolvedConfig)
    }
    case 'gemini': {
      const { GeminiProvider } = await import('./gemini.js')
      return new GeminiProvider(resolvedConfig)
    }
    case 'ollama': {
      const { OllamaProvider } = await import('./ollama.js')
      return new OllamaProvider(resolvedConfig)
    }
    case 'anthropic':
    default: {
      // For Anthropic, we need the existing client
      // The caller should use the existing getAnthropicClient() flow
      const { AnthropicProvider } = await import('./anthropic.js')
      const { getAnthropicClient } = await import('../client.js')
      const client = await getAnthropicClient({
        maxRetries: 0,
        model: resolvedConfig.model,
      })
      return new AnthropicProvider(client)
    }
  }
}
