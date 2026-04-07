// @bun
import {
  StdioServerTransport,
  init_stdio
} from "./chunk-j9rrcjjr.js";
import {
  init_sink,
  initializeAnalyticsSink
} from "./chunk-dzfcwea0.js";
import {
  init_sideQuery
} from "./chunk-6gs8crjw.js";
import"./chunk-77d4pj46.js";
import {
  init_datadog,
  shutdownDatadog
} from "./chunk-b491ph3q.js";
import"./chunk-tdx41767.js";
import"./chunk-6yhk91re.js";
import"./chunk-y8geq21e.js";
import"./chunk-s86sjr8h.js";
import"./chunk-h71xzv1f.js";
import"./chunk-afmw224y.js";
import {
  getAllSocketPaths,
  getSecureSocketPath,
  init_common
} from "./chunk-180qcse6.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-wasebgfc.js";
import"./chunk-3ecnah8q.js";
import"./chunk-dq4kxhbm.js";
import"./chunk-n7dfddx0.js";
import"./chunk-49ja1703.js";
import"./chunk-bysxgvx6.js";
import"./chunk-eyxgvhr4.js";
import"./chunk-7m2nd8da.js";
import"./chunk-hp4mz8q6.js";
import"./chunk-vbq42z9n.js";
import"./chunk-k0ad762d.js";
import"./chunk-ra7qbfq7.js";
import"./chunk-zta4dxph.js";
import"./chunk-mm55rwhh.js";
import"./chunk-4jm600zv.js";
import"./chunk-rjqxperv.js";
import"./chunk-1e4xz4qn.js";
import {
  enableConfigs,
  getClaudeAIOAuthTokens,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  init_auth,
  init_config1 as init_config,
  init_firstPartyEventLogger,
  init_growthbook,
  saveGlobalConfig,
  shutdown1PEventLogging
} from "./chunk-0ybjyybr.js";
import"./chunk-acq8papb.js";
import"./chunk-k5yw79cx.js";
import"./chunk-5ajamnkb.js";
import"./chunk-4jqh9cde.js";
import"./chunk-xswm8fjv.js";
import"./chunk-r1gancj0.js";
import"./chunk-k5hep4qq.js";
import"./chunk-3c25bcsw.js";
import"./chunk-63kzvq55.js";
import"./chunk-64c1avct.js";
import"./chunk-ypnebnty.js";
import"./chunk-egb62rk0.js";
import"./chunk-1vcr8nfx.js";
import"./chunk-wsj9bqwr.js";
import"./chunk-cdz5yb0r.js";
import {
  init_analytics,
  logEvent
} from "./chunk-paapvyzx.js";
import"./chunk-69t9n04z.js";
import"./chunk-g1f9xvnd.js";
import"./chunk-202de3fk.js";
import"./chunk-vv49ky54.js";
import"./chunk-0hpnqvkf.js";
import"./chunk-hp13emx6.js";
import"./chunk-hhkbd8h1.js";
import"./chunk-rqbfd2rb.js";
import"./chunk-8tnsngw2.js";
import"./chunk-ya62xx2m.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-8es6caa5.js";
import"./chunk-fbv4apne.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-h3gry12w.js";
import"./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import"./chunk-3wk0tdmp.js";
import"./chunk-1t5d3rxd.js";
import"./chunk-emdwnqgz.js";
import"./chunk-64q1p7wf.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/claudeInChrome/mcpServer.ts
import {
  createClaudeForChromeMcpServer
} from "@ant/claude-for-chrome-mcp";
import { format } from "util";
function isPermissionMode(raw) {
  return PERMISSION_MODES.some((m) => m === raw);
}
function getChromeBridgeUrl() {
  const bridgeEnabled = getFeatureValue_CACHED_MAY_BE_STALE("tengu_copper_bridge", false);
  if (!bridgeEnabled) {
    return;
  }
  if (isEnvTruthy(process.env.USE_LOCAL_OAUTH) || isEnvTruthy(process.env.LOCAL_BRIDGE)) {
    return "ws://localhost:8765";
  }
  if (isEnvTruthy(process.env.USE_STAGING_OAUTH)) {
    return "wss://bridge-staging.claudeusercontent.com";
  }
  return "wss://bridge.claudeusercontent.com";
}
function isLocalBridge() {
  return isEnvTruthy(process.env.USE_LOCAL_OAUTH) || isEnvTruthy(process.env.LOCAL_BRIDGE);
}
function createChromeContext(env) {
  const logger = new DebugLogger;
  const chromeBridgeUrl = getChromeBridgeUrl();
  logger.info(`Bridge URL: ${chromeBridgeUrl ?? "none (using native socket)"}`);
  const rawPermissionMode = env?.CLAUDE_CHROME_PERMISSION_MODE ?? process.env.CLAUDE_CHROME_PERMISSION_MODE;
  let initialPermissionMode;
  if (rawPermissionMode) {
    if (isPermissionMode(rawPermissionMode)) {
      initialPermissionMode = rawPermissionMode;
    } else {
      logger.warn(`Invalid CLAUDE_CHROME_PERMISSION_MODE "${rawPermissionMode}". Valid values: ${PERMISSION_MODES.join(", ")}`);
    }
  }
  return {
    serverName: "Claude in Chrome",
    logger,
    socketPath: getSecureSocketPath(),
    getSocketPaths: getAllSocketPaths,
    clientTypeId: "claude-code",
    onAuthenticationError: () => {
      logger.warn("Authentication error occurred. Please ensure you are logged into the Claude browser extension with the same claude.ai account as Claude Code.");
    },
    onToolCallDisconnected: () => {
      return `Browser extension is not connected. Please ensure the Claude browser extension is installed and running (${EXTENSION_DOWNLOAD_URL}), and that you are logged into claude.ai with the same account as Claude Code. If this is your first time connecting to Chrome, you may need to restart Chrome for the installation to take effect. If you continue to experience issues, please report a bug: ${BUG_REPORT_URL}`;
    },
    onExtensionPaired: (deviceId, name) => {
      saveGlobalConfig((config) => {
        if (config.chromeExtension?.pairedDeviceId === deviceId && config.chromeExtension?.pairedDeviceName === name) {
          return config;
        }
        return {
          ...config,
          chromeExtension: {
            pairedDeviceId: deviceId,
            pairedDeviceName: name
          }
        };
      });
      logger.info(`Paired with "${name}" (${deviceId.slice(0, 8)})`);
    },
    getPersistedDeviceId: () => {
      return getGlobalConfig().chromeExtension?.pairedDeviceId;
    },
    ...chromeBridgeUrl && {
      bridgeConfig: {
        url: chromeBridgeUrl,
        getUserId: async () => {
          return getGlobalConfig().oauthAccount?.accountUuid;
        },
        getOAuthToken: async () => {
          return getClaudeAIOAuthTokens()?.accessToken ?? "";
        },
        ...isLocalBridge() && { devUserId: "dev_user_local" }
      }
    },
    ...initialPermissionMode && { initialPermissionMode },
    ...false,
    trackEvent: (eventName, metadata) => {
      const safeMetadata = {};
      if (metadata) {
        for (const [key, value] of Object.entries(metadata)) {
          const safeKey = key === "status" ? "bridge_status" : key;
          if (typeof value === "boolean" || typeof value === "number") {
            safeMetadata[safeKey] = value;
          } else if (typeof value === "string" && SAFE_BRIDGE_STRING_KEYS.has(safeKey)) {
            safeMetadata[safeKey] = value;
          }
        }
      }
      logEvent(eventName, safeMetadata);
    }
  };
}
async function runClaudeInChromeMcpServer() {
  enableConfigs();
  initializeAnalyticsSink();
  const context = createChromeContext();
  const server = createClaudeForChromeMcpServer(context);
  const transport = new StdioServerTransport;
  let exiting = false;
  const shutdownAndExit = async () => {
    if (exiting) {
      return;
    }
    exiting = true;
    await shutdown1PEventLogging();
    await shutdownDatadog();
    process.exit(0);
  };
  process.stdin.on("end", () => void shutdownAndExit());
  process.stdin.on("error", () => void shutdownAndExit());
  logForDebugging("[Claude in Chrome] Starting MCP server");
  await server.connect(transport);
  logForDebugging("[Claude in Chrome] MCP server started");
}

class DebugLogger {
  silly(message, ...args) {
    logForDebugging(format(message, ...args), { level: "debug" });
  }
  debug(message, ...args) {
    logForDebugging(format(message, ...args), { level: "debug" });
  }
  info(message, ...args) {
    logForDebugging(format(message, ...args), { level: "info" });
  }
  warn(message, ...args) {
    logForDebugging(format(message, ...args), { level: "warn" });
  }
  error(message, ...args) {
    logForDebugging(format(message, ...args), { level: "error" });
  }
}
var EXTENSION_DOWNLOAD_URL = "https://claude.ai/chrome", BUG_REPORT_URL = "https://github.com/anthropics/claude-code/issues/new?labels=bug,claude-in-chrome", SAFE_BRIDGE_STRING_KEYS, PERMISSION_MODES;
var init_mcpServer = __esm(() => {
  init_stdio();
  init_datadog();
  init_firstPartyEventLogger();
  init_growthbook();
  init_analytics();
  init_sink();
  init_auth();
  init_config();
  init_debug();
  init_envUtils();
  init_sideQuery();
  init_common();
  SAFE_BRIDGE_STRING_KEYS = new Set([
    "bridge_status",
    "error_type",
    "tool_name"
  ]);
  PERMISSION_MODES = [
    "ask",
    "skip_all_permission_checks",
    "follow_a_plan"
  ];
});
init_mcpServer();

export {
  runClaudeInChromeMcpServer,
  createChromeContext
};
