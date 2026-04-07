// @bun
import {
  Tab,
  Tabs,
  init_Tabs,
  useTabHeaderFocus
} from "./chunk-5z6f6fjb.js";
import"./chunk-rtcc1rvs.js";
import {
  SandboxManager,
  Select,
  addToExcludedCommands,
  init_sandbox_adapter,
  init_select,
  shouldAllowManagedSandboxDomainsOnly
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
  Pane,
  init_Pane,
  init_useKeybinding,
  useKeybindings
} from "./chunk-bysxgvx6.js";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  color,
  init_ink,
  require_compiler_runtime,
  useTheme
} from "./chunk-eyxgvhr4.js";
import"./chunk-7m2nd8da.js";
import"./chunk-hp4mz8q6.js";
import {
  require_jsx_dev_runtime
} from "./chunk-vbq42z9n.js";
import"./chunk-k0ad762d.js";
import"./chunk-ra7qbfq7.js";
import"./chunk-zta4dxph.js";
import"./chunk-mm55rwhh.js";
import"./chunk-4jm600zv.js";
import"./chunk-rjqxperv.js";
import"./chunk-1e4xz4qn.js";
import {
  getSettingsFilePathForSource,
  getSettings_DEPRECATED,
  init_settings1 as init_settings
} from "./chunk-0ybjyybr.js";
import"./chunk-acq8papb.js";
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
import"./chunk-h3gry12w.js";
import {
  getCwdState,
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

// src/components/sandbox/SandboxConfigTab.tsx
function SandboxConfigTab() {
  const $ = import_compiler_runtime.c(3);
  const isEnabled = SandboxManager.isSandboxingEnabled();
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    const depCheck = SandboxManager.checkDependencies();
    t0 = depCheck.warnings.length > 0 ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      marginTop: 1,
      flexDirection: "column",
      children: depCheck.warnings.map(_temp)
    }, undefined, false, undefined, this) : null;
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const warningsNote = t0;
  if (!isEnabled) {
    let t12;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        paddingY: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: "subtle",
            children: "Sandbox is not enabled"
          }, undefined, false, undefined, this),
          warningsNote
        ]
      }, undefined, true, undefined, this);
      $[1] = t12;
    } else {
      t12 = $[1];
    }
    return t12;
  }
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fsReadConfig = SandboxManager.getFsReadConfig();
    const fsWriteConfig = SandboxManager.getFsWriteConfig();
    const networkConfig = SandboxManager.getNetworkRestrictionConfig();
    const allowUnixSockets = SandboxManager.getAllowUnixSockets();
    const excludedCommands = SandboxManager.getExcludedCommands();
    const globPatternWarnings = SandboxManager.getLinuxGlobPatternWarnings();
    t1 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingY: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              color: "permission",
              children: "Excluded Commands:"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: excludedCommands.length > 0 ? excludedCommands.join(", ") : "None"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        fsReadConfig.denyOnly.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              color: "permission",
              children: "Filesystem Read Restrictions:"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Denied: ",
                fsReadConfig.denyOnly.join(", ")
              ]
            }, undefined, true, undefined, this),
            fsReadConfig.allowWithinDeny && fsReadConfig.allowWithinDeny.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Allowed within denied: ",
                fsReadConfig.allowWithinDeny.join(", ")
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        fsWriteConfig.allowOnly.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              color: "permission",
              children: "Filesystem Write Restrictions:"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Allowed: ",
                fsWriteConfig.allowOnly.join(", ")
              ]
            }, undefined, true, undefined, this),
            fsWriteConfig.denyWithinAllow.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Denied within allowed: ",
                fsWriteConfig.denyWithinAllow.join(", ")
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        (networkConfig.allowedHosts && networkConfig.allowedHosts.length > 0 || networkConfig.deniedHosts && networkConfig.deniedHosts.length > 0) && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              color: "permission",
              children: [
                "Network Restrictions",
                shouldAllowManagedSandboxDomainsOnly() ? " (Managed)" : "",
                ":"
              ]
            }, undefined, true, undefined, this),
            networkConfig.allowedHosts && networkConfig.allowedHosts.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Allowed: ",
                networkConfig.allowedHosts.join(", ")
              ]
            }, undefined, true, undefined, this),
            networkConfig.deniedHosts && networkConfig.deniedHosts.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Denied: ",
                networkConfig.deniedHosts.join(", ")
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        allowUnixSockets && allowUnixSockets.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              color: "permission",
              children: "Allowed Unix Sockets:"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: allowUnixSockets.join(", ")
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        globPatternWarnings.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              color: "warning",
              children: "\u26A0 Warning: Glob patterns not fully supported on Linux"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "The following patterns will be ignored:",
                " ",
                globPatternWarnings.slice(0, 3).join(", "),
                globPatternWarnings.length > 3 && ` (${globPatternWarnings.length - 3} more)`
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        warningsNote
      ]
    }, undefined, true, undefined, this);
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}
function _temp(w, i) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
    dimColor: true,
    children: w
  }, i, false, undefined, this);
}
var import_compiler_runtime, jsx_dev_runtime;
var init_SandboxConfigTab = __esm(() => {
  init_ink();
  init_sandbox_adapter();
  import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/sandbox/SandboxDependenciesTab.tsx
function SandboxDependenciesTab(t0) {
  const $ = import_compiler_runtime2.c(24);
  const {
    depCheck
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = getPlatform();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const platform = t1;
  const isMac = platform === "macos";
  let t2;
  if ($[1] !== depCheck.errors) {
    t2 = depCheck.errors.some(_temp6);
    $[1] = depCheck.errors;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const rgMissing = t2;
  let t3;
  if ($[3] !== depCheck.errors) {
    t3 = depCheck.errors.some(_temp2);
    $[3] = depCheck.errors;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const bwrapMissing = t3;
  let t4;
  if ($[5] !== depCheck.errors) {
    t4 = depCheck.errors.some(_temp3);
    $[5] = depCheck.errors;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const socatMissing = t4;
  const seccompMissing = depCheck.warnings.length > 0;
  let t5;
  if ($[7] !== bwrapMissing || $[8] !== depCheck.errors || $[9] !== rgMissing || $[10] !== seccompMissing || $[11] !== socatMissing) {
    const otherErrors = depCheck.errors.filter(_temp4);
    const rgInstallHint = isMac ? "brew install ripgrep" : "apt install ripgrep";
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
      t6 = isMac && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          children: [
            "seatbelt: ",
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
              color: "success",
              children: "built-in (macOS)"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this);
      $[13] = t6;
    } else {
      t6 = $[13];
    }
    let t7;
    let t8;
    if ($[14] !== rgMissing) {
      t7 = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        children: [
          "ripgrep (rg):",
          " ",
          rgMissing ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            color: "error",
            children: "not found"
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            color: "success",
            children: "found"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
      t8 = rgMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "  ",
          "\xB7 ",
          rgInstallHint
        ]
      }, undefined, true, undefined, this);
      $[14] = rgMissing;
      $[15] = t7;
      $[16] = t8;
    } else {
      t7 = $[15];
      t8 = $[16];
    }
    let t9;
    if ($[17] !== t7 || $[18] !== t8) {
      t9 = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          t7,
          t8
        ]
      }, undefined, true, undefined, this);
      $[17] = t7;
      $[18] = t8;
      $[19] = t9;
    } else {
      t9 = $[19];
    }
    let t10;
    if ($[20] !== bwrapMissing || $[21] !== seccompMissing || $[22] !== socatMissing) {
      t10 = !isMac && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: [
                  "bubblewrap (bwrap):",
                  " ",
                  bwrapMissing ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "error",
                    children: "not installed"
                  }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "success",
                    children: "installed"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              bwrapMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "  ",
                  "\xB7 apt install bubblewrap"
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: [
                  "socat:",
                  " ",
                  socatMissing ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "error",
                    children: "not installed"
                  }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "success",
                    children: "installed"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              socatMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "  ",
                  "\xB7 apt install socat"
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: [
                  "seccomp filter:",
                  " ",
                  seccompMissing ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "warning",
                    children: "not installed"
                  }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "success",
                    children: "installed"
                  }, undefined, false, undefined, this),
                  seccompMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: " (required to block unix domain sockets)"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              seccompMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      "  ",
                      "\xB7 npm install -g @anthropic-ai/sandbox-runtime"
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      "  ",
                      "\xB7 or copy vendor/seccomp/* from sandbox-runtime and set"
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      "    ",
                      "sandbox.seccomp.bpfPath and applyPath in settings.json"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this);
      $[20] = bwrapMissing;
      $[21] = seccompMissing;
      $[22] = socatMissing;
      $[23] = t10;
    } else {
      t10 = $[23];
    }
    t5 = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingY: 1,
      gap: 1,
      children: [
        t6,
        t9,
        t10,
        otherErrors.map(_temp5)
      ]
    }, undefined, true, undefined, this);
    $[7] = bwrapMissing;
    $[8] = depCheck.errors;
    $[9] = rgMissing;
    $[10] = seccompMissing;
    $[11] = socatMissing;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  return t5;
}
function _temp5(err) {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
    color: "error",
    children: err
  }, err, false, undefined, this);
}
function _temp4(e_2) {
  return !e_2.includes("ripgrep") && !e_2.includes("bwrap") && !e_2.includes("socat");
}
function _temp3(e_1) {
  return e_1.includes("socat");
}
function _temp2(e_0) {
  return e_0.includes("bwrap");
}
function _temp6(e) {
  return e.includes("ripgrep");
}
var import_compiler_runtime2, jsx_dev_runtime2;
var init_SandboxDependenciesTab = __esm(() => {
  init_ink();
  init_platform();
  import_compiler_runtime2 = __toESM(require_compiler_runtime(), 1);
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/sandbox/SandboxOverridesTab.tsx
function SandboxOverridesTab(t0) {
  const $ = import_compiler_runtime3.c(5);
  const {
    onComplete
  } = t0;
  const isEnabled = SandboxManager.isSandboxingEnabled();
  const isLocked = SandboxManager.areSandboxSettingsLockedByPolicy();
  const currentAllowUnsandboxed = SandboxManager.areUnsandboxedCommandsAllowed();
  if (!isEnabled) {
    let t12;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        paddingY: 1,
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "subtle",
          children: "Sandbox is not enabled. Enable sandbox to configure override settings."
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this);
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    return t12;
  }
  if (isLocked) {
    let t12;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        color: "subtle",
        children: "Override settings are managed by a higher-priority configuration and cannot be changed locally."
      }, undefined, false, undefined, this);
      $[1] = t12;
    } else {
      t12 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
      t2 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        paddingY: 1,
        children: [
          t12,
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Current setting:",
                " ",
                currentAllowUnsandboxed ? "Allow unsandboxed fallback" : "Strict sandbox mode"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
      $[2] = t2;
    } else {
      t2 = $[2];
    }
    return t2;
  }
  let t1;
  if ($[3] !== onComplete) {
    t1 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(OverridesSelect, {
      onComplete,
      currentMode: currentAllowUnsandboxed ? "open" : "closed"
    }, undefined, false, undefined, this);
    $[3] = onComplete;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  return t1;
}
function OverridesSelect(t0) {
  const $ = import_compiler_runtime3.c(25);
  const {
    onComplete,
    currentMode
  } = t0;
  const [theme] = useTheme();
  const {
    headerFocused,
    focusHeader
  } = useTabHeaderFocus();
  let t1;
  if ($[0] !== theme) {
    t1 = color("success", theme)("(current)");
    $[0] = theme;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const currentIndicator = t1;
  const t2 = currentMode === "open" ? `Allow unsandboxed fallback ${currentIndicator}` : "Allow unsandboxed fallback";
  let t3;
  if ($[2] !== t2) {
    t3 = {
      label: t2,
      value: "open"
    };
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const t4 = currentMode === "closed" ? `Strict sandbox mode ${currentIndicator}` : "Strict sandbox mode";
  let t5;
  if ($[4] !== t4) {
    t5 = {
      label: t4,
      value: "closed"
    };
    $[4] = t4;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] !== t3 || $[7] !== t5) {
    t6 = [t3, t5];
    $[6] = t3;
    $[7] = t5;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  const options = t6;
  let t7;
  if ($[9] !== onComplete) {
    t7 = async function handleSelect2(value) {
      const mode = value;
      await SandboxManager.setSandboxSettings({
        allowUnsandboxedCommands: mode === "open"
      });
      const message = mode === "open" ? "\u2713 Unsandboxed fallback allowed - commands can run outside sandbox when necessary" : "\u2713 Strict sandbox mode - all commands must run in sandbox or be excluded via the `excludedCommands` option";
      onComplete(message);
    };
    $[9] = onComplete;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  const handleSelect = t7;
  let t8;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
      marginBottom: 1,
      children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        bold: true,
        children: "Configure Overrides:"
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  let t9;
  if ($[12] !== onComplete) {
    t9 = () => onComplete(undefined, {
      display: "skip"
    });
    $[12] = onComplete;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  let t10;
  if ($[14] !== focusHeader || $[15] !== handleSelect || $[16] !== headerFocused || $[17] !== options || $[18] !== t9) {
    t10 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Select, {
      options,
      onChange: handleSelect,
      onCancel: t9,
      onUpFromFirstItem: focusHeader,
      isDisabled: headerFocused
    }, undefined, false, undefined, this);
    $[14] = focusHeader;
    $[15] = handleSelect;
    $[16] = headerFocused;
    $[17] = options;
    $[18] = t9;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  let t11;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
      dimColor: true,
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          bold: true,
          dimColor: true,
          children: "Allow unsandboxed fallback:"
        }, undefined, false, undefined, this),
        " ",
        "When a command fails due to sandbox restrictions, Claude can retry with dangerouslyDisableSandbox to run outside the sandbox (falling back to default permissions)."
      ]
    }, undefined, true, undefined, this);
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  let t12;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
      dimColor: true,
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          bold: true,
          dimColor: true,
          children: "Strict sandbox mode:"
        }, undefined, false, undefined, this),
        " ",
        "All bash commands invoked by the model must run in the sandbox unless they are explicitly listed in excludedCommands."
      ]
    }, undefined, true, undefined, this);
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  let t13;
  if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      marginTop: 1,
      gap: 1,
      children: [
        t11,
        t12,
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "Learn more:",
            " ",
            /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Link, {
              url: "https://code.claude.com/docs/en/sandboxing#configure-sandboxing",
              children: "code.claude.com/docs/en/sandboxing#configure-sandboxing"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  let t14;
  if ($[23] !== t10) {
    t14 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingY: 1,
      children: [
        t8,
        t10,
        t13
      ]
    }, undefined, true, undefined, this);
    $[23] = t10;
    $[24] = t14;
  } else {
    t14 = $[24];
  }
  return t14;
}
var import_compiler_runtime3, jsx_dev_runtime3;
var init_SandboxOverridesTab = __esm(() => {
  init_ink();
  init_sandbox_adapter();
  init_select();
  init_Tabs();
  import_compiler_runtime3 = __toESM(require_compiler_runtime(), 1);
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/sandbox/SandboxSettings.tsx
function SandboxSettings(t0) {
  const $ = import_compiler_runtime4.c(34);
  const {
    onComplete,
    depCheck
  } = t0;
  const [theme] = useTheme();
  const currentEnabled = SandboxManager.isSandboxingEnabled();
  const currentAutoAllow = SandboxManager.isAutoAllowBashIfSandboxedEnabled();
  const hasWarnings = depCheck.warnings.length > 0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = getSettings_DEPRECATED();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const settings = t1;
  const allowAllUnixSockets = settings.sandbox?.network?.allowAllUnixSockets;
  const showSocketWarning = hasWarnings && !allowAllUnixSockets;
  const getCurrentMode = () => {
    if (!currentEnabled) {
      return "disabled";
    }
    if (currentAutoAllow) {
      return "auto-allow";
    }
    return "regular";
  };
  const currentMode = getCurrentMode();
  let t2;
  if ($[1] !== theme) {
    t2 = color("success", theme)("(current)");
    $[1] = theme;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const currentIndicator = t2;
  const t3 = currentMode === "auto-allow" ? `Sandbox BashTool, with auto-allow ${currentIndicator}` : "Sandbox BashTool, with auto-allow";
  let t4;
  if ($[3] !== t3) {
    t4 = {
      label: t3,
      value: "auto-allow"
    };
    $[3] = t3;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  const t5 = currentMode === "regular" ? `Sandbox BashTool, with regular permissions ${currentIndicator}` : "Sandbox BashTool, with regular permissions";
  let t6;
  if ($[5] !== t5) {
    t6 = {
      label: t5,
      value: "regular"
    };
    $[5] = t5;
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  const t7 = currentMode === "disabled" ? `No Sandbox ${currentIndicator}` : "No Sandbox";
  let t8;
  if ($[7] !== t7) {
    t8 = {
      label: t7,
      value: "disabled"
    };
    $[7] = t7;
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t9;
  if ($[9] !== t4 || $[10] !== t6 || $[11] !== t8) {
    t9 = [t4, t6, t8];
    $[9] = t4;
    $[10] = t6;
    $[11] = t8;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  const options = t9;
  let t10;
  if ($[13] !== onComplete) {
    t10 = async function handleSelect2(value) {
      const mode = value;
      bb33:
        switch (mode) {
          case "auto-allow": {
            await SandboxManager.setSandboxSettings({
              enabled: true,
              autoAllowBashIfSandboxed: true
            });
            onComplete("\u2713 Sandbox enabled with auto-allow for bash commands");
            break bb33;
          }
          case "regular": {
            await SandboxManager.setSandboxSettings({
              enabled: true,
              autoAllowBashIfSandboxed: false
            });
            onComplete("\u2713 Sandbox enabled with regular bash permissions");
            break bb33;
          }
          case "disabled": {
            await SandboxManager.setSandboxSettings({
              enabled: false,
              autoAllowBashIfSandboxed: false
            });
            onComplete("\u25CB Sandbox disabled");
          }
        }
    };
    $[13] = onComplete;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  const handleSelect = t10;
  let t11;
  if ($[15] !== onComplete) {
    t11 = {
      "confirm:no": () => onComplete(undefined, {
        display: "skip"
      })
    };
    $[15] = onComplete;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  let t12;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = {
      context: "Settings"
    };
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  useKeybindings(t11, t12);
  let t13;
  if ($[18] !== handleSelect || $[19] !== onComplete || $[20] !== options || $[21] !== showSocketWarning) {
    t13 = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
      title: "Mode",
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxModeTab, {
        showSocketWarning,
        options,
        onSelect: handleSelect,
        onComplete
      }, undefined, false, undefined, this)
    }, "mode", false, undefined, this);
    $[18] = handleSelect;
    $[19] = onComplete;
    $[20] = options;
    $[21] = showSocketWarning;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  const modeTab = t13;
  let t14;
  if ($[23] !== onComplete) {
    t14 = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
      title: "Overrides",
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxOverridesTab, {
        onComplete
      }, undefined, false, undefined, this)
    }, "overrides", false, undefined, this);
    $[23] = onComplete;
    $[24] = t14;
  } else {
    t14 = $[24];
  }
  const overridesTab = t14;
  let t15;
  if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
      title: "Config",
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxConfigTab, {}, undefined, false, undefined, this)
    }, "config", false, undefined, this);
    $[25] = t15;
  } else {
    t15 = $[25];
  }
  const configTab = t15;
  const hasErrors = depCheck.errors.length > 0;
  let t16;
  if ($[26] !== depCheck || $[27] !== hasErrors || $[28] !== hasWarnings || $[29] !== modeTab || $[30] !== overridesTab) {
    t16 = hasErrors ? [/* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
      title: "Dependencies",
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxDependenciesTab, {
        depCheck
      }, undefined, false, undefined, this)
    }, "dependencies", false, undefined, this)] : [modeTab, ...hasWarnings ? [/* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
      title: "Dependencies",
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxDependenciesTab, {
        depCheck
      }, undefined, false, undefined, this)
    }, "dependencies", false, undefined, this)] : [], overridesTab, configTab];
    $[26] = depCheck;
    $[27] = hasErrors;
    $[28] = hasWarnings;
    $[29] = modeTab;
    $[30] = overridesTab;
    $[31] = t16;
  } else {
    t16 = $[31];
  }
  const tabs = t16;
  let t17;
  if ($[32] !== tabs) {
    t17 = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Pane, {
      color: "permission",
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tabs, {
        title: "Sandbox:",
        color: "permission",
        defaultTab: "Mode",
        children: tabs
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
    $[32] = tabs;
    $[33] = t17;
  } else {
    t17 = $[33];
  }
  return t17;
}
function SandboxModeTab(t0) {
  const $ = import_compiler_runtime4.c(16);
  const {
    showSocketWarning,
    options,
    onSelect,
    onComplete
  } = t0;
  const {
    headerFocused,
    focusHeader
  } = useTabHeaderFocus();
  let t1;
  if ($[0] !== showSocketWarning) {
    t1 = showSocketWarning && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
      marginBottom: 1,
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        color: "warning",
        children: "Cannot block unix domain sockets (see Dependencies tab)"
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
    $[0] = showSocketWarning;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
      marginBottom: 1,
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        bold: true,
        children: "Configure Mode:"
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== onComplete) {
    t3 = () => onComplete(undefined, {
      display: "skip"
    });
    $[3] = onComplete;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== focusHeader || $[6] !== headerFocused || $[7] !== onSelect || $[8] !== options || $[9] !== t3) {
    t4 = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Select, {
      options,
      onChange: onSelect,
      onCancel: t3,
      onUpFromFirstItem: focusHeader,
      isDisabled: headerFocused
    }, undefined, false, undefined, this);
    $[5] = focusHeader;
    $[6] = headerFocused;
    $[7] = onSelect;
    $[8] = options;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  let t5;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
      dimColor: true,
      children: [
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          bold: true,
          dimColor: true,
          children: "Auto-allow mode:"
        }, undefined, false, undefined, this),
        " ",
        "Commands will try to run in the sandbox automatically, and attempts to run outside of the sandbox fallback to regular permissions. Explicit ask/deny rules are always respected."
      ]
    }, undefined, true, undefined, this);
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      marginTop: 1,
      gap: 1,
      children: [
        t5,
        /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "Learn more:",
            " ",
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Link, {
              url: "https://code.claude.com/docs/en/sandboxing",
              children: "code.claude.com/docs/en/sandboxing"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== t1 || $[14] !== t4) {
    t7 = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingY: 1,
      children: [
        t1,
        t2,
        t4,
        t6
      ]
    }, undefined, true, undefined, this);
    $[13] = t1;
    $[14] = t4;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
var import_compiler_runtime4, jsx_dev_runtime4;
var init_SandboxSettings = __esm(() => {
  init_ink();
  init_useKeybinding();
  init_sandbox_adapter();
  init_settings();
  init_select();
  init_Pane();
  init_Tabs();
  init_SandboxConfigTab();
  init_SandboxDependenciesTab();
  init_SandboxOverridesTab();
  import_compiler_runtime4 = __toESM(require_compiler_runtime(), 1);
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/sandbox-toggle/sandbox-toggle.tsx
import { relative } from "path";
async function call(onDone, _context, args) {
  const settings = getSettings_DEPRECATED();
  const themeName = settings.theme || "light";
  const platform = getPlatform();
  if (!SandboxManager.isSupportedPlatform()) {
    const errorMessage = platform === "wsl" ? "Error: Sandboxing requires WSL2. WSL1 is not supported." : "Error: Sandboxing is currently only supported on macOS, Linux, and WSL2.";
    const message = color("error", themeName)(errorMessage);
    onDone(message);
    return null;
  }
  const depCheck = SandboxManager.checkDependencies();
  if (!SandboxManager.isPlatformInEnabledList()) {
    const message = color("error", themeName)(`Error: Sandboxing is disabled for this platform (${platform}) via the enabledPlatforms setting.`);
    onDone(message);
    return null;
  }
  if (SandboxManager.areSandboxSettingsLockedByPolicy()) {
    const message = color("error", themeName)("Error: Sandbox settings are overridden by a higher-priority configuration and cannot be changed locally.");
    onDone(message);
    return null;
  }
  const trimmedArgs = args?.trim() || "";
  if (!trimmedArgs) {
    return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(SandboxSettings, {
      onComplete: onDone,
      depCheck
    }, undefined, false, undefined, this);
  }
  if (trimmedArgs) {
    const parts = trimmedArgs.split(" ");
    const subcommand = parts[0];
    if (subcommand === "exclude") {
      const commandPattern = trimmedArgs.slice("exclude ".length).trim();
      if (!commandPattern) {
        const message2 = color("error", themeName)('Error: Please provide a command pattern to exclude (e.g., /sandbox exclude "npm run test:*")');
        onDone(message2);
        return null;
      }
      const cleanPattern = commandPattern.replace(/^["']|["']$/g, "");
      addToExcludedCommands(cleanPattern);
      const localSettingsPath = getSettingsFilePathForSource("localSettings");
      const relativePath = localSettingsPath ? relative(getCwdState(), localSettingsPath) : ".claude/settings.local.json";
      const message = color("success", themeName)(`Added "${cleanPattern}" to excluded commands in ${relativePath}`);
      onDone(message);
      return null;
    } else {
      const message = color("error", themeName)(`Error: Unknown subcommand "${subcommand}". Available subcommand: exclude`);
      onDone(message);
      return null;
    }
  }
  return null;
}
var jsx_dev_runtime5;
var init_sandbox_toggle = __esm(() => {
  init_state();
  init_SandboxSettings();
  init_ink();
  init_platform();
  init_sandbox_adapter();
  init_settings();
  jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
});
init_sandbox_toggle();

export {
  call
};
