// @bun
import"./chunk-k5hep4qq.js";
import"./chunk-h3gry12w.js";
import"./chunk-0ds34vbj.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/api/providers/registry.ts
function getProviderName() {
  const explicitProvider = process.env.BETT_CODE_PROVIDER?.toLowerCase();
  if (explicitProvider === "openai")
    return "openai";
  if (explicitProvider === "gemini")
    return "gemini";
  if (explicitProvider === "ollama")
    return "ollama";
  if (explicitProvider === "anthropic")
    return "anthropic";
  return "anthropic";
}
function isExternalProvider() {
  return getProviderName() !== "anthropic";
}
function getProviderConfig() {
  const provider = getProviderName();
  return {
    provider,
    apiKey: process.env.BETT_CODE_PROVIDER_API_KEY,
    baseUrl: process.env.BETT_CODE_PROVIDER_BASE_URL,
    model: process.env.ANTHROPIC_MODEL ?? process.env.BETT_CODE_MODEL ?? "",
    options: {
      ollamaHost: process.env.BETT_CODE_OLLAMA_HOST
    }
  };
}
async function getModelProvider(config) {
  const resolvedConfig = config ?? getProviderConfig();
  switch (resolvedConfig.provider) {
    case "openai": {
      const { OpenAICompatProvider } = await import("./chunk-cqrvxs64.js");
      return new OpenAICompatProvider(resolvedConfig);
    }
    case "gemini": {
      const { GeminiProvider } = await import("./chunk-7x0hjc9n.js");
      return new GeminiProvider(resolvedConfig);
    }
    case "ollama": {
      const { OllamaProvider } = await import("./chunk-am8fansj.js");
      return new OllamaProvider(resolvedConfig);
    }
    case "anthropic":
    default: {
      const { AnthropicProvider } = await import("./chunk-7qmjy86t.js");
      const { getAnthropicClient } = await import("./chunk-yk5xw6ew.js");
      const client = await getAnthropicClient({
        maxRetries: 0,
        model: resolvedConfig.model
      });
      return new AnthropicProvider(client);
    }
  }
}
var init_registry = () => {};
init_registry();

export {
  isExternalProvider,
  getProviderName,
  getProviderConfig,
  getModelProvider
};
