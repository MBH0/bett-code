// @bun
import {
  cliError,
  cliOk
} from "./chunk-z2dp53wn.js";
import {
  AppStateProvider,
  KeybindingSetup,
  SelectMulti,
  addMcpConfig,
  clearMcpClientConfig,
  clearServerTokensFromLocalStorage,
  connectToServer,
  describeMcpConfigFilePath,
  ensureConfigScope,
  getAllMcpConfigs,
  getMcpClientConfig,
  getMcpConfigByName,
  getMcpConfigsByScope,
  getMcpServerConnectionBatchSize,
  getScopeLabel,
  gracefulShutdown,
  init_AppState,
  init_KeybindingProviderSetup,
  init_SelectMulti,
  init_auth,
  init_client,
  init_config as init_config2,
  init_gracefulShutdown,
  init_p_map,
  init_utils,
  pMap,
  readClientSecret,
  removeMcpConfig,
  saveMcpClientSecret
} from "./chunk-6gs8crjw.js";
import"./chunk-77d4pj46.js";
import"./chunk-b491ph3q.js";
import"./chunk-tdx41767.js";
import"./chunk-6yhk91re.js";
import {
  Byline,
  ConfigurableShortcutHint,
  Dialog,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_Dialog,
  init_KeyboardShortcutHint
} from "./chunk-y8geq21e.js";
import"./chunk-s86sjr8h.js";
import"./chunk-h71xzv1f.js";
import"./chunk-afmw224y.js";
import"./chunk-180qcse6.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-wasebgfc.js";
import"./chunk-3ecnah8q.js";
import"./chunk-dq4kxhbm.js";
import"./chunk-n7dfddx0.js";
import"./chunk-49ja1703.js";
import"./chunk-bysxgvx6.js";
import {
  ThemedBox_default,
  ThemedText,
  color,
  init_ink,
  render,
  require_compiler_runtime,
  useTheme
} from "./chunk-eyxgvhr4.js";
import"./chunk-7m2nd8da.js";
import"./chunk-hp4mz8q6.js";
import {
  require_jsx_dev_runtime
} from "./chunk-vbq42z9n.js";
import {
  require_react
} from "./chunk-k0ad762d.js";
import"./chunk-ra7qbfq7.js";
import"./chunk-zta4dxph.js";
import"./chunk-mm55rwhh.js";
import"./chunk-4jm600zv.js";
import"./chunk-rjqxperv.js";
import"./chunk-1e4xz4qn.js";
import {
  getCurrentProjectConfig,
  getGlobalConfig,
  init_config1 as init_config,
  init_stringUtils,
  plural,
  saveCurrentProjectConfig
} from "./chunk-0ybjyybr.js";
import {
  init_json,
  safeParseJSON
} from "./chunk-acq8papb.js";
import"./chunk-k5yw79cx.js";
import"./chunk-5ajamnkb.js";
import"./chunk-4jqh9cde.js";
import"./chunk-xswm8fjv.js";
import"./chunk-r1gancj0.js";
import"./chunk-k5hep4qq.js";
import"./chunk-3c25bcsw.js";
import {
  getPlatform,
  init_platform
} from "./chunk-63kzvq55.js";
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
  init_errors,
  isFsInaccessible
} from "./chunk-8es6caa5.js";
import {
  init_process,
  writeToStdout
} from "./chunk-fbv4apne.js";
import"./chunk-h3gry12w.js";
import"./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import"./chunk-3wk0tdmp.js";
import"./chunk-1t5d3rxd.js";
import"./chunk-emdwnqgz.js";
import"./chunk-64q1p7wf.js";
import {
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/cli/handlers/mcp.tsx
init_p_map();
import { stat } from "fs/promises";
import { cwd } from "process";

// src/components/MCPServerDesktopImportDialog.tsx
init_gracefulShutdown();
init_process();
init_ink();
init_config2();
init_stringUtils();
init_ConfigurableShortcutHint();
init_SelectMulti();
init_Byline();
init_Dialog();
init_KeyboardShortcutHint();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function MCPServerDesktopImportDialog(t0) {
  const $ = import_compiler_runtime.c(36);
  const {
    servers,
    scope,
    onDone
  } = t0;
  let t1;
  if ($[0] !== servers) {
    t1 = Object.keys(servers);
    $[0] = servers;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const serverNames = t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = {};
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const [existingServers, setExistingServers] = import_react.useState(t2);
  let t3;
  let t4;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      getAllMcpConfigs().then((t52) => {
        const {
          servers: servers_0
        } = t52;
        return setExistingServers(servers_0);
      });
    };
    t4 = [];
    $[3] = t3;
    $[4] = t4;
  } else {
    t3 = $[3];
    t4 = $[4];
  }
  import_react.useEffect(t3, t4);
  let t5;
  if ($[5] !== existingServers || $[6] !== serverNames) {
    t5 = serverNames.filter((name) => existingServers[name] !== undefined);
    $[5] = existingServers;
    $[6] = serverNames;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  const collisions = t5;
  const onSubmit = async function onSubmit2(selectedServers) {
    let importedCount = 0;
    for (const serverName of selectedServers) {
      const serverConfig = servers[serverName];
      if (serverConfig) {
        let finalName = serverName;
        if (existingServers[finalName] !== undefined) {
          let counter = 1;
          while (existingServers[`${serverName}_${counter}`] !== undefined) {
            counter++;
          }
          finalName = `${serverName}_${counter}`;
        }
        await addMcpConfig(finalName, serverConfig, scope);
        importedCount++;
      }
    }
    done(importedCount);
  };
  const [theme] = useTheme();
  let t6;
  if ($[8] !== onDone || $[9] !== scope || $[10] !== theme) {
    t6 = (importedCount_0) => {
      if (importedCount_0 > 0) {
        writeToStdout(`
${color("success", theme)(`Successfully imported ${importedCount_0} MCP ${plural(importedCount_0, "server")} to ${scope} config.`)}
`);
      } else {
        writeToStdout(`
No servers were imported.`);
      }
      onDone();
      gracefulShutdown();
    };
    $[8] = onDone;
    $[9] = scope;
    $[10] = theme;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  const done = t6;
  let t7;
  if ($[12] !== done) {
    t7 = () => {
      done(0);
    };
    $[12] = done;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  const handleEscCancel = t7;
  const t8 = serverNames.length;
  let t9;
  if ($[14] !== serverNames.length) {
    t9 = plural(serverNames.length, "server");
    $[14] = serverNames.length;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  const t10 = `Found ${t8} MCP ${t9} in Claude Desktop.`;
  let t11;
  if ($[16] !== collisions.length) {
    t11 = collisions.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      color: "warning",
      children: "Note: Some servers already exist with the same name. If selected, they will be imported with a numbered suffix."
    }, undefined, false, undefined, this);
    $[16] = collisions.length;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  let t12;
  if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: "Please select the servers you want to import:"
    }, undefined, false, undefined, this);
    $[18] = t12;
  } else {
    t12 = $[18];
  }
  let t13;
  let t14;
  if ($[19] !== collisions || $[20] !== serverNames) {
    t13 = serverNames.map((server) => ({
      label: `${server}${collisions.includes(server) ? " (already exists)" : ""}`,
      value: server
    }));
    t14 = serverNames.filter((name_0) => !collisions.includes(name_0));
    $[19] = collisions;
    $[20] = serverNames;
    $[21] = t13;
    $[22] = t14;
  } else {
    t13 = $[21];
    t14 = $[22];
  }
  let t15;
  if ($[23] !== handleEscCancel || $[24] !== onSubmit || $[25] !== t13 || $[26] !== t14) {
    t15 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SelectMulti, {
      options: t13,
      defaultValue: t14,
      onSubmit,
      onCancel: handleEscCancel,
      hideIndexes: true
    }, undefined, false, undefined, this);
    $[23] = handleEscCancel;
    $[24] = onSubmit;
    $[25] = t13;
    $[26] = t14;
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  let t16;
  if ($[28] !== handleEscCancel || $[29] !== t10 || $[30] !== t11 || $[31] !== t15) {
    t16 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "Import MCP Servers from Claude Desktop",
      subtitle: t10,
      color: "success",
      onCancel: handleEscCancel,
      hideInputGuide: true,
      children: [
        t11,
        t12,
        t15
      ]
    }, undefined, true, undefined, this);
    $[28] = handleEscCancel;
    $[29] = t10;
    $[30] = t11;
    $[31] = t15;
    $[32] = t16;
  } else {
    t16 = $[32];
  }
  let t17;
  if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      paddingX: 1,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        italic: true,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
              shortcut: "Space",
              action: "select"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
              shortcut: "Enter",
              action: "confirm"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
    $[33] = t17;
  } else {
    t17 = $[33];
  }
  let t18;
  if ($[34] !== t16) {
    t18 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
      children: [
        t16,
        t17
      ]
    }, undefined, true, undefined, this);
    $[34] = t16;
    $[35] = t18;
  } else {
    t18 = $[35];
  }
  return t18;
}

// src/cli/handlers/mcp.tsx
init_ink();
init_KeybindingProviderSetup();
init_analytics();
init_auth();
init_client();
init_config2();
init_utils();
init_AppState();
init_config();
init_errors();
init_gracefulShutdown();
init_json();
init_platform();
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
async function checkMcpServerHealth(name, server) {
  try {
    const result = await connectToServer(name, server);
    if (result.type === "connected") {
      return "\u2713 Connected";
    } else if (result.type === "needs-auth") {
      return "! Needs authentication";
    } else {
      return "\u2717 Failed to connect";
    }
  } catch (_error) {
    return "\u2717 Connection error";
  }
}
async function mcpServeHandler({
  debug,
  verbose
}) {
  const providedCwd = cwd();
  logEvent("tengu_mcp_start", {});
  try {
    await stat(providedCwd);
  } catch (error) {
    if (isFsInaccessible(error)) {
      cliError(`Error: Directory ${providedCwd} does not exist`);
    }
    throw error;
  }
  try {
    const {
      setup
    } = await import("./chunk-4rwy4jxm.js");
    await setup(providedCwd, "default", false, false, undefined, false);
    const {
      startMCPServer
    } = await import("./chunk-cm1ke8gn.js");
    await startMCPServer(providedCwd, debug ?? false, verbose ?? false);
  } catch (error) {
    cliError(`Error: Failed to start MCP server: ${error}`);
  }
}
async function mcpRemoveHandler(name, options) {
  const serverBeforeRemoval = getMcpConfigByName(name);
  const cleanupSecureStorage = () => {
    if (serverBeforeRemoval && (serverBeforeRemoval.type === "sse" || serverBeforeRemoval.type === "http")) {
      clearServerTokensFromLocalStorage(name, serverBeforeRemoval);
      clearMcpClientConfig(name, serverBeforeRemoval);
    }
  };
  try {
    if (options.scope) {
      const scope = ensureConfigScope(options.scope);
      logEvent("tengu_mcp_delete", {
        name,
        scope
      });
      await removeMcpConfig(name, scope);
      cleanupSecureStorage();
      process.stdout.write(`Removed MCP server ${name} from ${scope} config
`);
      cliOk(`File modified: ${describeMcpConfigFilePath(scope)}`);
    }
    const projectConfig = getCurrentProjectConfig();
    const globalConfig = getGlobalConfig();
    const {
      servers: projectServers
    } = getMcpConfigsByScope("project");
    const mcpJsonExists = !!projectServers[name];
    const scopes = [];
    if (projectConfig.mcpServers?.[name])
      scopes.push("local");
    if (mcpJsonExists)
      scopes.push("project");
    if (globalConfig.mcpServers?.[name])
      scopes.push("user");
    if (scopes.length === 0) {
      cliError(`No MCP server found with name: "${name}"`);
    } else if (scopes.length === 1) {
      const scope = scopes[0];
      logEvent("tengu_mcp_delete", {
        name,
        scope
      });
      await removeMcpConfig(name, scope);
      cleanupSecureStorage();
      process.stdout.write(`Removed MCP server "${name}" from ${scope} config
`);
      cliOk(`File modified: ${describeMcpConfigFilePath(scope)}`);
    } else {
      process.stderr.write(`MCP server "${name}" exists in multiple scopes:
`);
      scopes.forEach((scope) => {
        process.stderr.write(`  - ${getScopeLabel(scope)} (${describeMcpConfigFilePath(scope)})
`);
      });
      process.stderr.write(`
To remove from a specific scope, use:
`);
      scopes.forEach((scope) => {
        process.stderr.write(`  claude mcp remove "${name}" -s ${scope}
`);
      });
      cliError();
    }
  } catch (error) {
    cliError(error.message);
  }
}
async function mcpListHandler() {
  logEvent("tengu_mcp_list", {});
  const {
    servers: configs
  } = await getAllMcpConfigs();
  if (Object.keys(configs).length === 0) {
    console.log("No MCP servers configured. Use `claude mcp add` to add a server.");
  } else {
    console.log(`Checking MCP server health...
`);
    const entries = Object.entries(configs);
    const results = await pMap(entries, async ([name, server]) => ({
      name,
      server,
      status: await checkMcpServerHealth(name, server)
    }), {
      concurrency: getMcpServerConnectionBatchSize()
    });
    for (const {
      name,
      server,
      status
    } of results) {
      if (server.type === "sse") {
        console.log(`${name}: ${server.url} (SSE) - ${status}`);
      } else if (server.type === "http") {
        console.log(`${name}: ${server.url} (HTTP) - ${status}`);
      } else if (server.type === "claudeai-proxy") {
        console.log(`${name}: ${server.url} - ${status}`);
      } else if (!server.type || server.type === "stdio") {
        const args = Array.isArray(server.args) ? server.args : [];
        console.log(`${name}: ${server.command} ${args.join(" ")} - ${status}`);
      }
    }
  }
  await gracefulShutdown(0);
}
async function mcpGetHandler(name) {
  logEvent("tengu_mcp_get", {
    name
  });
  const server = getMcpConfigByName(name);
  if (!server) {
    cliError(`No MCP server found with name: ${name}`);
  }
  console.log(`${name}:`);
  console.log(`  Scope: ${getScopeLabel(server.scope)}`);
  const status = await checkMcpServerHealth(name, server);
  console.log(`  Status: ${status}`);
  if (server.type === "sse") {
    console.log(`  Type: sse`);
    console.log(`  URL: ${server.url}`);
    if (server.headers) {
      console.log("  Headers:");
      for (const [key, value] of Object.entries(server.headers)) {
        console.log(`    ${key}: ${value}`);
      }
    }
    if (server.oauth?.clientId || server.oauth?.callbackPort) {
      const parts = [];
      if (server.oauth.clientId) {
        parts.push("client_id configured");
        const clientConfig = getMcpClientConfig(name, server);
        if (clientConfig?.clientSecret)
          parts.push("client_secret configured");
      }
      if (server.oauth.callbackPort)
        parts.push(`callback_port ${server.oauth.callbackPort}`);
      console.log(`  OAuth: ${parts.join(", ")}`);
    }
  } else if (server.type === "http") {
    console.log(`  Type: http`);
    console.log(`  URL: ${server.url}`);
    if (server.headers) {
      console.log("  Headers:");
      for (const [key, value] of Object.entries(server.headers)) {
        console.log(`    ${key}: ${value}`);
      }
    }
    if (server.oauth?.clientId || server.oauth?.callbackPort) {
      const parts = [];
      if (server.oauth.clientId) {
        parts.push("client_id configured");
        const clientConfig = getMcpClientConfig(name, server);
        if (clientConfig?.clientSecret)
          parts.push("client_secret configured");
      }
      if (server.oauth.callbackPort)
        parts.push(`callback_port ${server.oauth.callbackPort}`);
      console.log(`  OAuth: ${parts.join(", ")}`);
    }
  } else if (server.type === "stdio") {
    console.log(`  Type: stdio`);
    console.log(`  Command: ${server.command}`);
    const args = Array.isArray(server.args) ? server.args : [];
    console.log(`  Args: ${args.join(" ")}`);
    if (server.env) {
      console.log("  Environment:");
      for (const [key, value] of Object.entries(server.env)) {
        console.log(`    ${key}=${value}`);
      }
    }
  }
  console.log(`
To remove this server, run: claude mcp remove "${name}" -s ${server.scope}`);
  await gracefulShutdown(0);
}
async function mcpAddJsonHandler(name, json, options) {
  try {
    const scope = ensureConfigScope(options.scope);
    const parsedJson = safeParseJSON(json);
    const needsSecret = options.clientSecret && parsedJson && typeof parsedJson === "object" && "type" in parsedJson && (parsedJson.type === "sse" || parsedJson.type === "http") && "url" in parsedJson && typeof parsedJson.url === "string" && "oauth" in parsedJson && parsedJson.oauth && typeof parsedJson.oauth === "object" && "clientId" in parsedJson.oauth;
    const clientSecret = needsSecret ? await readClientSecret() : undefined;
    await addMcpConfig(name, parsedJson, scope);
    const transportType = parsedJson && typeof parsedJson === "object" && "type" in parsedJson ? String(parsedJson.type || "stdio") : "stdio";
    if (clientSecret && parsedJson && typeof parsedJson === "object" && "type" in parsedJson && (parsedJson.type === "sse" || parsedJson.type === "http") && "url" in parsedJson && typeof parsedJson.url === "string") {
      saveMcpClientSecret(name, {
        type: parsedJson.type,
        url: parsedJson.url
      }, clientSecret);
    }
    logEvent("tengu_mcp_add", {
      scope,
      source: "json",
      type: transportType
    });
    cliOk(`Added ${transportType} MCP server ${name} to ${scope} config`);
  } catch (error) {
    cliError(error.message);
  }
}
async function mcpAddFromDesktopHandler(options) {
  try {
    const scope = ensureConfigScope(options.scope);
    const platform = getPlatform();
    logEvent("tengu_mcp_add", {
      scope,
      platform,
      source: "desktop"
    });
    const {
      readClaudeDesktopMcpServers
    } = await import("./chunk-e932bvcq.js");
    const servers = await readClaudeDesktopMcpServers();
    if (Object.keys(servers).length === 0) {
      cliOk("No MCP servers found in Claude Desktop configuration or configuration file does not exist.");
    }
    const {
      unmount
    } = await render(/* @__PURE__ */ jsx_dev_runtime2.jsxDEV(AppStateProvider, {
      children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(KeybindingSetup, {
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(MCPServerDesktopImportDialog, {
          servers,
          scope,
          onDone: () => {
            unmount();
          }
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this), {
      exitOnCtrlC: true
    });
  } catch (error) {
    cliError(error.message);
  }
}
async function mcpResetChoicesHandler() {
  logEvent("tengu_mcp_reset_mcpjson_choices", {});
  saveCurrentProjectConfig((current) => ({
    ...current,
    enabledMcpjsonServers: [],
    disabledMcpjsonServers: [],
    enableAllProjectMcpServers: false
  }));
  cliOk(`All project-scoped (.mcp.json) server approvals and rejections have been reset.
You will be prompted for approval next time you start Claude Code.`);
}
export {
  mcpServeHandler,
  mcpResetChoicesHandler,
  mcpRemoveHandler,
  mcpListHandler,
  mcpGetHandler,
  mcpAddJsonHandler,
  mcpAddFromDesktopHandler
};
