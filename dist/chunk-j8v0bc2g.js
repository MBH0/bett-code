// @bun
import {
  clearFileSuggestionCaches,
  init_fileSuggestions
} from "./chunk-x4xchzpa.js";
import {
  clearTrackedMagicDocs,
  init_magicDocs
} from "./chunk-0cd43f44.js";
import {
  clearAllDumpState,
  clearAllPendingCallbacks,
  clearAllSessions,
  clearCommandPrefixCaches,
  clearCommandsCache,
  clearDynamicSkills,
  clearSessionEnvVars,
  clearStoredImagePaths,
  getGitStatus,
  getSessionStartDate,
  getSystemContext,
  getUserContext,
  init_LSPDiagnosticRegistry,
  init_attachments,
  init_claudemd,
  init_commands,
  init_commands1 as init_commands2,
  init_common,
  init_context,
  init_dumpPrompts,
  init_imageStore,
  init_loadSkillsDir,
  init_postCompactCleanup,
  init_promptCacheBreakDetection,
  init_sessionEnvVars,
  init_sessionIngress,
  init_useSwarmPermissionPoller,
  resetAllLSPDiagnosticState,
  resetGetMemoryFilesCache,
  resetPromptCacheBreakDetection,
  resetSentSkillNames,
  runPostCompactCleanup,
  setSystemPromptInjection
} from "./chunk-6gs8crjw.js";
import {
  clearRepositoryCaches,
  init_detectRepository
} from "./chunk-69t9n04z.js";
import {
  clearResolveGitDirCache,
  init_gitFilesystem
} from "./chunk-g1f9xvnd.js";
import {
  clearInvokedSkills,
  init_state,
  setLastEmittedDate
} from "./chunk-qzn8r3qg.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/commands/clear/caches.ts
function clearSessionCaches(preservedAgentIds = new Set) {
  const hasPreserved = preservedAgentIds.size > 0;
  getUserContext.cache.clear?.();
  getSystemContext.cache.clear?.();
  getGitStatus.cache.clear?.();
  getSessionStartDate.cache.clear?.();
  clearFileSuggestionCaches();
  clearCommandsCache();
  if (!hasPreserved)
    resetPromptCacheBreakDetection();
  setSystemPromptInjection(null);
  setLastEmittedDate(null);
  runPostCompactCleanup();
  resetSentSkillNames();
  resetGetMemoryFilesCache("session_start");
  clearStoredImagePaths();
  clearAllSessions();
  if (!hasPreserved)
    clearAllPendingCallbacks();
  if (false) {}
  if (false) {}
  clearRepositoryCaches();
  clearCommandPrefixCaches();
  if (!hasPreserved)
    clearAllDumpState();
  clearInvokedSkills(preservedAgentIds);
  clearResolveGitDirCache();
  clearDynamicSkills();
  resetAllLSPDiagnosticState();
  clearTrackedMagicDocs();
  clearSessionEnvVars();
  import("./chunk-t40qmb8m.js").then(({ clearWebFetchCache }) => clearWebFetchCache());
  import("./chunk-h847cdmf.js").then(({ clearToolSearchDescriptionCache }) => clearToolSearchDescriptionCache());
  import("./chunk-kbp058nk.js").then(({ clearAgentDefinitionsCache }) => clearAgentDefinitionsCache());
  import("./chunk-6xqzdn8d.js").then(({ clearPromptCache }) => clearPromptCache());
}
var init_caches = __esm(() => {
  init_state();
  init_commands2();
  init_common();
  init_context();
  init_fileSuggestions();
  init_useSwarmPermissionPoller();
  init_dumpPrompts();
  init_promptCacheBreakDetection();
  init_sessionIngress();
  init_postCompactCleanup();
  init_LSPDiagnosticRegistry();
  init_magicDocs();
  init_loadSkillsDir();
  init_attachments();
  init_commands();
  init_claudemd();
  init_detectRepository();
  init_gitFilesystem();
  init_imageStore();
  init_sessionEnvVars();
});

export { clearSessionCaches, init_caches };
