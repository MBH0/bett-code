// @bun
import {
  getClaudeAIOAuthTokens,
  init_auth
} from "./chunk-0ybjyybr.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-egb62rk0.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/bridge/bridgeConfig.ts
function getBridgeTokenOverride() {
  return;
}
function getBridgeBaseUrlOverride() {
  return;
}
function getBridgeAccessToken() {
  return getBridgeTokenOverride() ?? getClaudeAIOAuthTokens()?.accessToken;
}
function getBridgeBaseUrl() {
  return getBridgeBaseUrlOverride() ?? getOauthConfig().BASE_API_URL;
}
var init_bridgeConfig = __esm(() => {
  init_oauth();
  init_auth();
});

export { getBridgeTokenOverride, getBridgeBaseUrlOverride, getBridgeAccessToken, getBridgeBaseUrl, init_bridgeConfig };
