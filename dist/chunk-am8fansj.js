// @bun
import {
  OpenAICompatProvider,
  init_openai_compat
} from "./chunk-vsvz88py.js";
import"./chunk-62r94tdq.js";
import"./chunk-ewzh7pdh.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/api/providers/ollama.ts
var OllamaProvider;
var init_ollama = __esm(() => {
  init_openai_compat();
  OllamaProvider = class OllamaProvider extends OpenAICompatProvider {
    name = "ollama";
    constructor(config) {
      super({
        ...config,
        provider: "ollama",
        apiKey: config.apiKey ?? "",
        baseUrl: config.baseUrl ?? process.env.BETT_CODE_OLLAMA_HOST ?? "http://localhost:11434/v1"
      });
    }
    supportsFeature(feature) {
      switch (feature) {
        case "thinking":
          return false;
        case "caching":
          return false;
        case "vision":
          return false;
        case "tool_use":
          return true;
        case "streaming":
          return true;
      }
    }
  };
});
init_ollama();

export {
  OllamaProvider
};
