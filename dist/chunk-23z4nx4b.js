// @bun
import {
  init_exportRenderer,
  renderMessagesToPlainText
} from "./chunk-28ftb04n.js";
import"./chunk-5w1efh29.js";
import"./chunk-00k9t5nw.js";
import"./chunk-2z1p2dx5.js";
import"./chunk-dfqvya8e.js";
import"./chunk-5xey4pz0.js";
import"./chunk-m1rhehkg.js";
import"./chunk-fdsf7ykz.js";
import"./chunk-rtcc1rvs.js";
import"./chunk-s17syr84.js";
import"./chunk-69nt8ysc.js";
import {
  Select,
  TextInput,
  init_TextInput,
  init_select
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
import {
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useTerminalSize
} from "./chunk-bysxgvx6.js";
import {
  ThemedBox_default,
  ThemedText,
  init_ink,
  init_osc,
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
import"./chunk-0ybjyybr.js";
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
import"./chunk-hhkbd8h1.js";
import"./chunk-rqbfd2rb.js";
import"./chunk-8tnsngw2.js";
import {
  getCwd,
  init_cwd
} from "./chunk-ya62xx2m.js";
import {
  init_slowOperations,
  writeFileSync_DEPRECATED
} from "./chunk-8es6caa5.js";
import"./chunk-fbv4apne.js";
import"./chunk-h3gry12w.js";
import"./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import"./chunk-3wk0tdmp.js";
import"./chunk-1t5d3rxd.js";
import"./chunk-emdwnqgz.js";
import"./chunk-64q1p7wf.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/ExportDialog.tsx
import { join } from "path";
function ExportDialog({
  content,
  defaultFilename,
  onDone
}) {
  const [, setSelectedOption] = import_react.useState(null);
  const [filename, setFilename] = import_react.useState(defaultFilename);
  const [cursorOffset, setCursorOffset] = import_react.useState(defaultFilename.length);
  const [showFilenameInput, setShowFilenameInput] = import_react.useState(false);
  const {
    columns
  } = useTerminalSize();
  const handleGoBack = import_react.useCallback(() => {
    setShowFilenameInput(false);
    setSelectedOption(null);
  }, []);
  const handleSelectOption = async (value) => {
    if (value === "clipboard") {
      const raw = await setClipboard(content);
      if (raw)
        process.stdout.write(raw);
      onDone({
        success: true,
        message: "Conversation copied to clipboard"
      });
    } else if (value === "file") {
      setSelectedOption("file");
      setShowFilenameInput(true);
    }
  };
  const handleFilenameSubmit = () => {
    const finalFilename = filename.endsWith(".txt") ? filename : filename.replace(/\.[^.]+$/, "") + ".txt";
    const filepath = join(getCwd(), finalFilename);
    try {
      writeFileSync_DEPRECATED(filepath, content, {
        encoding: "utf-8",
        flush: true
      });
      onDone({
        success: true,
        message: `Conversation exported to: ${filepath}`
      });
    } catch (error) {
      onDone({
        success: false,
        message: `Failed to export conversation: ${error instanceof Error ? error.message : "Unknown error"}`
      });
    }
  };
  const handleCancel = import_react.useCallback(() => {
    if (showFilenameInput) {
      handleGoBack();
    } else {
      onDone({
        success: false,
        message: "Export cancelled"
      });
    }
  }, [showFilenameInput, handleGoBack, onDone]);
  const options = [{
    label: "Copy to clipboard",
    value: "clipboard",
    description: "Copy the conversation to your system clipboard"
  }, {
    label: "Save to file",
    value: "file",
    description: "Save the conversation to a file in the current directory"
  }];
  function renderInputGuide(exitState) {
    if (showFilenameInput) {
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
            shortcut: "Enter",
            action: "save"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "go back"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    if (exitState.pending) {
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          "Press ",
          exitState.keyName,
          " again to exit"
        ]
      }, undefined, true, undefined, this);
    }
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "cancel"
    }, undefined, false, undefined, this);
  }
  useKeybinding("confirm:no", handleCancel, {
    context: "Settings",
    isActive: showFilenameInput
  });
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Export Conversation",
    subtitle: "Select export method:",
    color: "permission",
    onCancel: handleCancel,
    inputGuide: renderInputGuide,
    isCancelActive: !showFilenameInput,
    children: !showFilenameInput ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
      options,
      onChange: handleSelectOption,
      onCancel: handleCancel
    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "Enter filename:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          gap: 1,
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: ">"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TextInput, {
              value: filename,
              onChange: setFilename,
              onSubmit: handleFilenameSubmit,
              focus: true,
              showCursor: true,
              columns,
              cursorOffset,
              onChangeCursorOffset: setCursorOffset
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_ExportDialog = __esm(() => {
  init_useTerminalSize();
  init_osc();
  init_ink();
  init_useKeybinding();
  init_cwd();
  init_slowOperations();
  init_ConfigurableShortcutHint();
  init_select();
  init_Byline();
  init_Dialog();
  init_KeyboardShortcutHint();
  init_TextInput();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/export/export.tsx
import { join as join2 } from "path";
function formatTimestamp(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day}-${hours}${minutes}${seconds}`;
}
function extractFirstPrompt(messages) {
  const firstUserMessage = messages.find((msg) => msg.type === "user");
  if (!firstUserMessage || firstUserMessage.type !== "user") {
    return "";
  }
  const content = firstUserMessage.message?.content;
  let result = "";
  if (typeof content === "string") {
    result = content.trim();
  } else if (Array.isArray(content)) {
    const textContent = content.find((item) => item.type === "text");
    if (textContent && "text" in textContent) {
      result = textContent.text.trim();
    }
  }
  result = result.split(`
`)[0] || "";
  if (result.length > 50) {
    result = result.substring(0, 49) + "\u2026";
  }
  return result;
}
function sanitizeFilename(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
async function exportWithReactRenderer(context) {
  const tools = context.options.tools || [];
  return renderMessagesToPlainText(context.messages, tools);
}
async function call(onDone, context, args) {
  const content = await exportWithReactRenderer(context);
  const filename = args.trim();
  if (filename) {
    const finalFilename = filename.endsWith(".txt") ? filename : filename.replace(/\.[^.]+$/, "") + ".txt";
    const filepath = join2(getCwd(), finalFilename);
    try {
      writeFileSync_DEPRECATED(filepath, content, {
        encoding: "utf-8",
        flush: true
      });
      onDone(`Conversation exported to: ${filepath}`);
      return null;
    } catch (error) {
      onDone(`Failed to export conversation: ${error instanceof Error ? error.message : "Unknown error"}`);
      return null;
    }
  }
  const firstPrompt = extractFirstPrompt(context.messages);
  const timestamp = formatTimestamp(new Date);
  let defaultFilename;
  if (firstPrompt) {
    const sanitized = sanitizeFilename(firstPrompt);
    defaultFilename = sanitized ? `${timestamp}-${sanitized}.txt` : `conversation-${timestamp}.txt`;
  } else {
    defaultFilename = `conversation-${timestamp}.txt`;
  }
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ExportDialog, {
    content,
    defaultFilename,
    onDone: (result) => {
      onDone(result.message);
    }
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime2;
var init_export = __esm(() => {
  init_ExportDialog();
  init_cwd();
  init_exportRenderer();
  init_slowOperations();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});
init_export();

export {
  sanitizeFilename,
  extractFirstPrompt,
  call
};
