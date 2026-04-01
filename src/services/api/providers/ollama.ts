import type { ProviderConfig, ProviderFeature } from './types.js'
import { OpenAICompatProvider } from './openai-compat.js'

/**
 * Ollama provider adapter.
 * Extends OpenAICompatProvider since Ollama exposes an OpenAI-compatible
 * /v1/chat/completions endpoint.
 */
export class OllamaProvider extends OpenAICompatProvider {
  override readonly name = 'ollama' as const

  constructor(config: ProviderConfig) {
    super({
      ...config,
      provider: 'ollama',
      apiKey: config.apiKey ?? '', // Ollama doesn't require an API key
      baseUrl: config.baseUrl
        ?? process.env.BETT_CODE_OLLAMA_HOST
        ?? 'http://localhost:11434/v1',
    })
  }

  override supportsFeature(feature: ProviderFeature): boolean {
    switch (feature) {
      case 'thinking':
        return false
      case 'caching':
        return false
      case 'vision':
        // Some Ollama models support vision (llava, etc.) but not all
        return false
      case 'tool_use':
        // Some Ollama models support tool calling but not all
        // We return true and let the model handle it gracefully
        return true
      case 'streaming':
        return true
    }
  }
}
