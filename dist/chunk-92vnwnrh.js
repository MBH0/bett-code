// @bun
import {
  Select,
  gracefulShutdownSync,
  init_CustomSelect,
  init_gracefulShutdown
} from "./chunk-6gs8crjw.js";
import"./chunk-77d4pj46.js";
import"./chunk-b491ph3q.js";
import"./chunk-tdx41767.js";
import"./chunk-6yhk91re.js";
import {
  Dialog,
  init_Dialog
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
  Link,
  Newline,
  ThemedBox_default,
  ThemedText,
  init_ink,
  require_compiler_runtime
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
  init_settings1 as init_settings,
  updateSettingsForSource
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
import"./chunk-8es6caa5.js";
import"./chunk-fbv4apne.js";
import"./chunk-h3gry12w.js";
import"./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import"./chunk-3wk0tdmp.js";
import"./chunk-1t5d3rxd.js";
import"./chunk-emdwnqgz.js";
import"./chunk-64q1p7wf.js";
import {
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/BypassPermissionsModeDialog.tsx
init_analytics();
init_ink();
init_gracefulShutdown();
init_settings();
init_CustomSelect();
init_Dialog();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function BypassPermissionsModeDialog(t0) {
  const $ = import_compiler_runtime.c(7);
  const {
    onAccept
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  import_react.default.useEffect(_temp, t1);
  let t2;
  if ($[1] !== onAccept) {
    t2 = function onChange2(value) {
      bb3:
        switch (value) {
          case "accept": {
            logEvent("tengu_bypass_permissions_mode_dialog_accept", {});
            updateSettingsForSource("userSettings", {
              skipDangerousModePermissionPrompt: true
            });
            onAccept();
            break bb3;
          }
          case "decline": {
            gracefulShutdownSync(1);
          }
        }
    };
    $[1] = onAccept;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const onChange = t2;
  const handleEscape = _temp2;
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "In Bypass Permissions mode, Claude Code will not ask for your approval before running potentially dangerous commands.",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Newline, {}, undefined, false, undefined, this),
            "This mode should only be used in a sandboxed container/VM that has restricted internet access and can easily be restored if damaged."
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "By proceeding, you accept all responsibility for actions taken while running in Bypass Permissions mode."
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
          url: "https://code.claude.com/docs/en/security"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = [{
      label: "No, exit",
      value: "decline"
    }, {
      label: "Yes, I accept",
      value: "accept"
    }];
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== onChange) {
    t5 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "WARNING: Claude Code running in Bypass Permissions mode",
      color: "error",
      onCancel: handleEscape,
      children: [
        t3,
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
          options: t4,
          onChange: (value_0) => onChange(value_0)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[5] = onChange;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  return t5;
}
function _temp2() {
  gracefulShutdownSync(0);
}
function _temp() {
  logEvent("tengu_bypass_permissions_mode_dialog_shown", {});
}
export {
  BypassPermissionsModeDialog
};
