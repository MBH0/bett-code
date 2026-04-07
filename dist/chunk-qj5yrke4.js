// @bun
import {
  LogSelector,
  agenticSessionSearch,
  checkCrossProjectResume,
  init_LogSelector,
  init_agenticSessionSearch,
  init_crossProjectResume
} from "./chunk-pdfys4za.js";
import"./chunk-5w1efh29.js";
import"./chunk-00k9t5nw.js";
import"./chunk-2z1p2dx5.js";
import"./chunk-dfqvya8e.js";
import"./chunk-40ezgvvb.js";
import"./chunk-m1rhehkg.js";
import"./chunk-nqx76cnb.js";
import"./chunk-fdsf7ykz.js";
import"./chunk-rtcc1rvs.js";
import"./chunk-s17syr84.js";
import"./chunk-69nt8ysc.js";
import {
  MessageResponse,
  Spinner,
  getLastSessionLog,
  getSessionIdFromLog,
  getWorktreePaths,
  init_MessageResponse,
  init_Spinner,
  init_getWorktreePaths,
  init_sessionStorage,
  init_uuid,
  isCustomTitleEnabled,
  isLiteLog,
  loadAllProjectsMessageLogs,
  loadFullLog,
  loadSameRepoMessageLogs,
  searchSessionsByCustomTitle,
  validateUuid
} from "./chunk-6gs8crjw.js";
import"./chunk-77d4pj46.js";
import"./chunk-b491ph3q.js";
import"./chunk-tdx41767.js";
import"./chunk-6yhk91re.js";
import"./chunk-y8geq21e.js";
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
import {
  init_modalContext,
  init_useTerminalSize,
  useIsInsideModal,
  useTerminalSize
} from "./chunk-bysxgvx6.js";
import {
  ThemedBox_default,
  ThemedText,
  init_ink,
  init_osc,
  require_compiler_runtime,
  setClipboard
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
  init_source,
  source_default
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
import"./chunk-paapvyzx.js";
import"./chunk-69t9n04z.js";
import"./chunk-g1f9xvnd.js";
import"./chunk-202de3fk.js";
import"./chunk-vv49ky54.js";
import"./chunk-0hpnqvkf.js";
import"./chunk-hp13emx6.js";
import {
  figures_default,
  init_figures
} from "./chunk-hhkbd8h1.js";
import {
  init_log,
  logError
} from "./chunk-rqbfd2rb.js";
import"./chunk-8tnsngw2.js";
import"./chunk-ya62xx2m.js";
import"./chunk-8es6caa5.js";
import"./chunk-fbv4apne.js";
import"./chunk-h3gry12w.js";
import {
  getOriginalCwd,
  getSessionId,
  init_state
} from "./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import"./chunk-3wk0tdmp.js";
import"./chunk-1t5d3rxd.js";
import"./chunk-emdwnqgz.js";
import"./chunk-64q1p7wf.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/resume/resume.tsx
function resumeHelpMessage(result) {
  switch (result.resultType) {
    case "sessionNotFound":
      return `Session ${source_default.bold(result.arg)} was not found.`;
    case "multipleMatches":
      return `Found ${result.count} sessions matching ${source_default.bold(result.arg)}. Please use /resume to pick a specific session.`;
  }
}
function ResumeError(t0) {
  const $ = import_compiler_runtime.c(10);
  const {
    message,
    args,
    onDone
  } = t0;
  let t1;
  let t2;
  if ($[0] !== onDone) {
    t1 = () => {
      const timer = setTimeout(onDone, 0);
      return () => clearTimeout(timer);
    };
    t2 = [onDone];
    $[0] = onDone;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  React.useEffect(t1, t2);
  let t3;
  if ($[3] !== args) {
    t3 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: true,
      children: [
        figures_default.pointer,
        " /resume ",
        args
      ]
    }, undefined, true, undefined, this);
    $[3] = args;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== message) {
    t4 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(MessageResponse, {
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: message
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
    $[5] = message;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t3 || $[8] !== t4) {
    t5 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        t3,
        t4
      ]
    }, undefined, true, undefined, this);
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  return t5;
}
function ResumeCommand({
  onDone,
  onResume
}) {
  const [logs, setLogs] = React.useState([]);
  const [worktreePaths, setWorktreePaths] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [resuming, setResuming] = React.useState(false);
  const [showAllProjects, setShowAllProjects] = React.useState(false);
  const {
    rows
  } = useTerminalSize();
  const insideModal = useIsInsideModal();
  const loadLogs = React.useCallback(async (allProjects, paths) => {
    setLoading(true);
    try {
      const allLogs = allProjects ? await loadAllProjectsMessageLogs() : await loadSameRepoMessageLogs(paths);
      const resumable = filterResumableSessions(allLogs, getSessionId());
      if (resumable.length === 0) {
        onDone("No conversations found to resume");
        return;
      }
      setLogs(resumable);
    } catch (_err) {
      onDone("Failed to load conversations");
    } finally {
      setLoading(false);
    }
  }, [onDone]);
  React.useEffect(() => {
    async function init() {
      const paths_0 = await getWorktreePaths(getOriginalCwd());
      setWorktreePaths(paths_0);
      loadLogs(false, paths_0);
    }
    init();
  }, [loadLogs]);
  const handleToggleAllProjects = React.useCallback(() => {
    const newValue = !showAllProjects;
    setShowAllProjects(newValue);
    loadLogs(newValue, worktreePaths);
  }, [showAllProjects, loadLogs, worktreePaths]);
  async function handleSelect(log) {
    const sessionId = validateUuid(getSessionIdFromLog(log));
    if (!sessionId) {
      onDone("Failed to resume conversation");
      return;
    }
    const fullLog = isLiteLog(log) ? await loadFullLog(log) : log;
    const crossProjectCheck = checkCrossProjectResume(fullLog, showAllProjects, worktreePaths);
    if (crossProjectCheck.isCrossProject) {
      if (crossProjectCheck.isSameRepoWorktree) {
        setResuming(true);
        onResume(sessionId, fullLog, "slash_command_picker");
        return;
      }
      const raw = await setClipboard(crossProjectCheck.command);
      if (raw)
        process.stdout.write(raw);
      const message = ["", "This conversation is from a different directory.", "", "To resume, run:", `  ${crossProjectCheck.command}`, "", "(Command copied to clipboard)", ""].join(`
`);
      onDone(message, {
        display: "user"
      });
      return;
    }
    setResuming(true);
    onResume(sessionId, fullLog, "slash_command_picker");
  }
  function handleCancel() {
    onDone("Resume cancelled", {
      display: "system"
    });
  }
  if (loading) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: " Loading conversations\u2026"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (resuming) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: " Resuming conversation\u2026"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(LogSelector, {
    logs,
    maxHeight: insideModal ? Math.floor(rows / 2) : rows - 2,
    onCancel: handleCancel,
    onSelect: handleSelect,
    onLogsChanged: () => loadLogs(showAllProjects, worktreePaths),
    showAllProjects,
    onToggleAllProjects: handleToggleAllProjects,
    onAgenticSearch: agenticSessionSearch
  }, undefined, false, undefined, this);
}
function filterResumableSessions(logs, currentSessionId) {
  return logs.filter((l) => !l.isSidechain && getSessionIdFromLog(l) !== currentSessionId);
}
var import_compiler_runtime, React, jsx_dev_runtime, call = async (onDone, context, args) => {
  const onResume = async (sessionId, log, entrypoint) => {
    try {
      await context.resume?.(sessionId, log, entrypoint);
      onDone(undefined, {
        display: "skip"
      });
    } catch (error) {
      logError(error);
      onDone(`Failed to resume: ${error.message}`);
    }
  };
  const arg = args?.trim();
  if (!arg) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ResumeCommand, {
      onDone,
      onResume
    }, Date.now(), false, undefined, this);
  }
  const worktreePaths = await getWorktreePaths(getOriginalCwd());
  const logs = await loadSameRepoMessageLogs(worktreePaths);
  if (logs.length === 0) {
    const message2 = "No conversations found to resume.";
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ResumeError, {
      message: message2,
      args: arg,
      onDone: () => onDone(message2)
    }, undefined, false, undefined, this);
  }
  const maybeSessionId = validateUuid(arg);
  if (maybeSessionId) {
    const matchingLogs = logs.filter((l) => getSessionIdFromLog(l) === maybeSessionId).sort((a, b) => b.modified.getTime() - a.modified.getTime());
    if (matchingLogs.length > 0) {
      const log = matchingLogs[0];
      const fullLog = isLiteLog(log) ? await loadFullLog(log) : log;
      onResume(maybeSessionId, fullLog, "slash_command_session_id");
      return null;
    }
    const directLog = await getLastSessionLog(maybeSessionId);
    if (directLog) {
      onResume(maybeSessionId, directLog, "slash_command_session_id");
      return null;
    }
  }
  if (isCustomTitleEnabled()) {
    const titleMatches = await searchSessionsByCustomTitle(arg, {
      exact: true
    });
    if (titleMatches.length === 1) {
      const log = titleMatches[0];
      const sessionId = getSessionIdFromLog(log);
      if (sessionId) {
        const fullLog = isLiteLog(log) ? await loadFullLog(log) : log;
        onResume(sessionId, fullLog, "slash_command_title");
        return null;
      }
    }
    if (titleMatches.length > 1) {
      const message2 = resumeHelpMessage({
        resultType: "multipleMatches",
        arg,
        count: titleMatches.length
      });
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ResumeError, {
        message: message2,
        args: arg,
        onDone: () => onDone(message2)
      }, undefined, false, undefined, this);
    }
  }
  const message = resumeHelpMessage({
    resultType: "sessionNotFound",
    arg
  });
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ResumeError, {
    message,
    args: arg,
    onDone: () => onDone(message)
  }, undefined, false, undefined, this);
};
var init_resume = __esm(() => {
  init_source();
  init_figures();
  init_state();
  init_LogSelector();
  init_MessageResponse();
  init_Spinner();
  init_modalContext();
  init_useTerminalSize();
  init_osc();
  init_ink();
  init_agenticSessionSearch();
  init_crossProjectResume();
  init_getWorktreePaths();
  init_log();
  init_sessionStorage();
  init_uuid();
  import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
  React = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_resume();

export {
  filterResumableSessions,
  call
};
