// @bun
import {
  editFileInEditor,
  init_promptEditor
} from "./chunk-g8hgfjay.js";
import {
  DEFAULT_BINDINGS,
  NON_REBINDABLE,
  getKeybindingsPath,
  init_defaultBindings,
  init_loadUserBindings,
  init_reservedShortcuts,
  isKeybindingCustomizationEnabled,
  normalizeKeyForComparison
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
import"./chunk-ya62xx2m.js";
import {
  getErrnoCode,
  init_errors,
  init_slowOperations,
  jsonStringify
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
  __esm
} from "./chunk-qp2qdcda.js";

// src/keybindings/template.ts
function filterReservedShortcuts(blocks) {
  const reservedKeys = new Set(NON_REBINDABLE.map((r) => normalizeKeyForComparison(r.key)));
  return blocks.map((block) => {
    const filteredBindings = {};
    for (const [key, action] of Object.entries(block.bindings)) {
      if (!reservedKeys.has(normalizeKeyForComparison(key))) {
        filteredBindings[key] = action;
      }
    }
    return { context: block.context, bindings: filteredBindings };
  }).filter((block) => Object.keys(block.bindings).length > 0);
}
function generateKeybindingsTemplate() {
  const bindings = filterReservedShortcuts(DEFAULT_BINDINGS);
  const config = {
    $schema: "https://www.schemastore.org/claude-code-keybindings.json",
    $docs: "https://code.claude.com/docs/en/keybindings",
    bindings
  };
  return jsonStringify(config, null, 2) + `
`;
}
var init_template = __esm(() => {
  init_slowOperations();
  init_defaultBindings();
  init_reservedShortcuts();
});

// src/commands/keybindings/keybindings.ts
import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";
async function call() {
  if (!isKeybindingCustomizationEnabled()) {
    return {
      type: "text",
      value: "Keybinding customization is not enabled. This feature is currently in preview."
    };
  }
  const keybindingsPath = getKeybindingsPath();
  let fileExists = false;
  await mkdir(dirname(keybindingsPath), { recursive: true });
  try {
    await writeFile(keybindingsPath, generateKeybindingsTemplate(), {
      encoding: "utf-8",
      flag: "wx"
    });
  } catch (e) {
    if (getErrnoCode(e) === "EEXIST") {
      fileExists = true;
    } else {
      throw e;
    }
  }
  const result = await editFileInEditor(keybindingsPath);
  if (result.error) {
    return {
      type: "text",
      value: `${fileExists ? "Opened" : "Created"} ${keybindingsPath}. Could not open in editor: ${result.error}`
    };
  }
  return {
    type: "text",
    value: fileExists ? `Opened ${keybindingsPath} in your editor.` : `Created ${keybindingsPath} with template. Opened in your editor.`
  };
}
var init_keybindings = __esm(() => {
  init_loadUserBindings();
  init_template();
  init_errors();
  init_promptEditor();
});
init_keybindings();

export {
  call
};
