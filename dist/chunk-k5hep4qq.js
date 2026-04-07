// @bun
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-h3gry12w.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/model/providers.ts
function getAPIProvider() {
  const externalProvider = process.env.BETT_CODE_PROVIDER?.toLowerCase();
  if (externalProvider === "openai")
    return "openai";
  if (externalProvider === "gemini")
    return "gemini";
  if (externalProvider === "ollama")
    return "ollama";
  return isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) ? "bedrock" : isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) ? "vertex" : isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY) ? "foundry" : "firstParty";
}
function isExternalProvider() {
  const provider = getAPIProvider();
  return provider === "openai" || provider === "gemini" || provider === "ollama";
}
function getAPIProviderForStatsig() {
  return getAPIProvider();
}
function isFirstPartyAnthropicBaseUrl() {
  const baseUrl = process.env.ANTHROPIC_BASE_URL;
  if (!baseUrl) {
    return true;
  }
  try {
    const host = new URL(baseUrl).host;
    const allowedHosts = ["api.anthropic.com"];
    if (false) {}
    return allowedHosts.includes(host);
  } catch {
    return false;
  }
}
var init_providers = __esm(() => {
  init_envUtils();
});

export { getAPIProvider, isExternalProvider, getAPIProviderForStatsig, isFirstPartyAnthropicBaseUrl, init_providers };
