// @bun
import {
  useManagePlugins
} from "./chunk-5fa97x7d.js";
import"./chunk-x2jr5k20.js";
import {
  WelcomeV2
} from "./chunk-4xadqpgq.js";
import {
  onChangeAppState
} from "./chunk-4y492p6h.js";
import"./chunk-7sebejbj.js";
import {
  MCPConnectionManager,
  init_MCPConnectionManager
} from "./chunk-rzqde2y6.js";
import"./chunk-k18fyw6s.js";
import"./chunk-r25wtm33.js";
import"./chunk-2wja8f0g.js";
import {
  AppStateProvider,
  KeybindingSetup,
  init_AppState,
  init_KeybindingProviderSetup
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
import {
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
  init_auth,
  isAnthropicAuthEnabled
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
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/cli/handlers/util.tsx
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { cwd } from "process";
init_ink();
init_KeybindingProviderSetup();
init_analytics();
init_MCPConnectionManager();
init_AppState();
init_auth();
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
async function setupTokenHandler(root) {
  logEvent("tengu_setup_token_command", {});
  const showAuthWarning = !isAnthropicAuthEnabled();
  const {
    ConsoleOAuthFlow
  } = await import("./chunk-ypbgnyvz.js");
  await new Promise((resolve) => {
    root.render(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppStateProvider, {
      onChangeAppState,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeybindingSetup, {
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          gap: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(WelcomeV2, {}, undefined, false, undefined, this),
            showAuthWarning && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
              flexDirection: "column",
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  color: "warning",
                  children: "Warning: You already have authentication configured via environment variable or API key helper."
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  color: "warning",
                  children: "The setup-token command will create a new OAuth token which you can use instead."
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConsoleOAuthFlow, {
              onDone: () => {
                resolve();
              },
              mode: "setup-token",
              startingMessage: "This will guide you through long-lived (1-year) auth token setup for your Claude account. Claude subscription required."
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this));
  });
  root.unmount();
  process.exit(0);
}
var DoctorLazy = import_react.default.lazy(() => import("./chunk-f6ee0t38.js").then((m) => ({
  default: m.Doctor
})));
function DoctorWithPlugins(t0) {
  const $ = import_compiler_runtime.c(2);
  const {
    onDone
  } = t0;
  useManagePlugins();
  let t1;
  if ($[0] !== onDone) {
    t1 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(import_react.default.Suspense, {
      fallback: null,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DoctorLazy, {
        onDone
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
    $[0] = onDone;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
async function doctorHandler(root) {
  logEvent("tengu_doctor_command", {});
  await new Promise((resolve) => {
    root.render(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppStateProvider, {
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeybindingSetup, {
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(MCPConnectionManager, {
          dynamicMcpConfig: undefined,
          isStrictMcpConfig: false,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DoctorWithPlugins, {
            onDone: () => {
              resolve();
            }
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this));
  });
  root.unmount();
  process.exit(0);
}
async function installHandler(target, options) {
  const {
    setup
  } = await import("./chunk-4rwy4jxm.js");
  await setup(cwd(), "default", false, false, undefined, false);
  const {
    install
  } = await import("./chunk-w706zjsd.js");
  await new Promise((resolve) => {
    const args = [];
    if (target)
      args.push(target);
    if (options.force)
      args.push("--force");
    install.call((result) => {
      resolve();
      process.exit(result.includes("failed") ? 1 : 0);
    }, {}, args);
  });
}
export {
  setupTokenHandler,
  installHandler,
  doctorHandler
};
