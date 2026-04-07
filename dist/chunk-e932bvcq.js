// @bun
import {
  McpStdioServerConfigSchema,
  init_json,
  init_types,
  safeParseJSON
} from "./chunk-acq8papb.js";
import"./chunk-r1gancj0.js";
import {
  SUPPORTED_PLATFORMS,
  getPlatform,
  init_platform
} from "./chunk-63kzvq55.js";
import"./chunk-64c1avct.js";
import"./chunk-202de3fk.js";
import"./chunk-vv49ky54.js";
import {
  init_log,
  logError
} from "./chunk-rqbfd2rb.js";
import"./chunk-8tnsngw2.js";
import {
  getErrnoCode,
  init_errors
} from "./chunk-8es6caa5.js";
import"./chunk-fbv4apne.js";
import"./chunk-h3gry12w.js";
import"./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import"./chunk-qp2qdcda.js";

// src/utils/claudeDesktop.ts
init_types();
init_errors();
init_json();
init_log();
init_platform();
import { readdir, readFile, stat } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
async function getClaudeDesktopConfigPath() {
  const platform = getPlatform();
  if (!SUPPORTED_PLATFORMS.includes(platform)) {
    throw new Error(`Unsupported platform: ${platform} - Claude Desktop integration only works on macOS and WSL.`);
  }
  if (platform === "macos") {
    return join(homedir(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
  }
  const windowsHome = process.env.USERPROFILE ? process.env.USERPROFILE.replace(/\\/g, "/") : null;
  if (windowsHome) {
    const wslPath = windowsHome.replace(/^[A-Z]:/, "");
    const configPath = `/mnt/c${wslPath}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      await stat(configPath);
      return configPath;
    } catch {}
  }
  try {
    const usersDir = "/mnt/c/Users";
    try {
      const userDirs = await readdir(usersDir, { withFileTypes: true });
      for (const user of userDirs) {
        if (user.name === "Public" || user.name === "Default" || user.name === "Default User" || user.name === "All Users") {
          continue;
        }
        const potentialConfigPath = join(usersDir, user.name, "AppData", "Roaming", "Claude", "claude_desktop_config.json");
        try {
          await stat(potentialConfigPath);
          return potentialConfigPath;
        } catch {}
      }
    } catch {}
  } catch (dirError) {
    logError(dirError);
  }
  throw new Error("Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.");
}
async function readClaudeDesktopMcpServers() {
  if (!SUPPORTED_PLATFORMS.includes(getPlatform())) {
    throw new Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  }
  try {
    const configPath = await getClaudeDesktopConfigPath();
    let configContent;
    try {
      configContent = await readFile(configPath, { encoding: "utf8" });
    } catch (e) {
      const code = getErrnoCode(e);
      if (code === "ENOENT") {
        return {};
      }
      throw e;
    }
    const config = safeParseJSON(configContent);
    if (!config || typeof config !== "object") {
      return {};
    }
    const mcpServers = config.mcpServers;
    if (!mcpServers || typeof mcpServers !== "object") {
      return {};
    }
    const servers = {};
    for (const [name, serverConfig] of Object.entries(mcpServers)) {
      if (!serverConfig || typeof serverConfig !== "object") {
        continue;
      }
      const result = McpStdioServerConfigSchema().safeParse(serverConfig);
      if (result.success) {
        servers[name] = result.data;
      }
    }
    return servers;
  } catch (error) {
    logError(error);
    return {};
  }
}
export {
  readClaudeDesktopMcpServers,
  getClaudeDesktopConfigPath
};
