// @bun
import {
  init_semver
} from "./chunk-hp4mz8q6.js";
import {
  init_auth,
  init_growthbook
} from "./chunk-0ybjyybr.js";
import {
  init_envUtils
} from "./chunk-h3gry12w.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/bridge/bridgeEnabled.ts
function isBridgeEnabled() {
  return false;
}
async function isBridgeEnabledBlocking() {
  return false;
}
function isEnvLessBridgeEnabled() {
  return false;
}
function isCseShimEnabled() {
  return true;
}
function checkBridgeMinVersion() {
  if (false) {}
  return null;
}
var init_bridgeEnabled = __esm(() => {
  init_growthbook();
  init_auth();
  init_envUtils();
  init_semver();
});

export { isBridgeEnabled, isBridgeEnabledBlocking, isEnvLessBridgeEnabled, isCseShimEnabled, checkBridgeMinVersion, init_bridgeEnabled };
