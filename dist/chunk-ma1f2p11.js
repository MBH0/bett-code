// @bun
import {
  init_settingsSync
} from "./chunk-c80t5w1d.js";
import {
  init_refresh,
  refreshActivePlugins
} from "./chunk-40f2kmmb.js";
import {
  init_changeDetector
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
import {
  init_stringUtils,
  plural
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
import"./chunk-hhkbd8h1.js";
import"./chunk-rqbfd2rb.js";
import"./chunk-8tnsngw2.js";
import"./chunk-ya62xx2m.js";
import"./chunk-8es6caa5.js";
import"./chunk-fbv4apne.js";
import {
  init_envUtils
} from "./chunk-h3gry12w.js";
import {
  init_state
} from "./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import"./chunk-3wk0tdmp.js";
import"./chunk-1t5d3rxd.js";
import"./chunk-emdwnqgz.js";
import"./chunk-64q1p7wf.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/reload-plugins/reload-plugins.ts
function n(count, noun) {
  return `${count} ${plural(count, noun)}`;
}
var call = async (_args, context) => {
  if (false) {}
  const r = await refreshActivePlugins(context.setAppState);
  const parts = [
    n(r.enabled_count, "plugin"),
    n(r.command_count, "skill"),
    n(r.agent_count, "agent"),
    n(r.hook_count, "hook"),
    n(r.mcp_count, "plugin MCP server"),
    n(r.lsp_count, "plugin LSP server")
  ];
  let msg = `Reloaded: ${parts.join(" \xB7 ")}`;
  if (r.error_count > 0) {
    msg += `
${n(r.error_count, "error")} during load. Run /doctor for details.`;
  }
  return { type: "text", value: msg };
};
var init_reload_plugins = __esm(() => {
  init_state();
  init_settingsSync();
  init_envUtils();
  init_refresh();
  init_changeDetector();
  init_stringUtils();
});
init_reload_plugins();

export {
  call
};
