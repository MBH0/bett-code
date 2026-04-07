// @bun
import {
  removePathFromRepo,
  validateRepoAtPath
} from "./chunk-m0z1nxg8.js";
import {
  Select,
  Spinner,
  init_CustomSelect,
  init_Spinner
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
  getDisplayPath,
  init_file
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

// src/components/TeleportRepoMismatchDialog.tsx
init_ink();
init_file();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var import_react = __toESM(require_react(), 1);
init_CustomSelect();
init_Dialog();
init_Spinner();
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function TeleportRepoMismatchDialog(t0) {
  const $ = import_compiler_runtime.c(18);
  const {
    targetRepo,
    initialPaths,
    onSelectPath,
    onCancel
  } = t0;
  const [availablePaths, setAvailablePaths] = import_react.useState(initialPaths);
  const [errorMessage, setErrorMessage] = import_react.useState(null);
  const [validating, setValidating] = import_react.useState(false);
  let t1;
  if ($[0] !== availablePaths || $[1] !== onCancel || $[2] !== onSelectPath || $[3] !== targetRepo) {
    t1 = async (value) => {
      if (value === "cancel") {
        onCancel();
        return;
      }
      setValidating(true);
      setErrorMessage(null);
      const isValid = await validateRepoAtPath(value, targetRepo);
      if (isValid) {
        onSelectPath(value);
        return;
      }
      removePathFromRepo(targetRepo, value);
      const updatedPaths = availablePaths.filter((p) => p !== value);
      setAvailablePaths(updatedPaths);
      setValidating(false);
      setErrorMessage(`${getDisplayPath(value)} no longer contains the correct repository. Select another path.`);
    };
    $[0] = availablePaths;
    $[1] = onCancel;
    $[2] = onSelectPath;
    $[3] = targetRepo;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  const handleChange = t1;
  let t2;
  if ($[5] !== availablePaths) {
    let t32;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
      t32 = {
        label: "Cancel",
        value: "cancel"
      };
      $[7] = t32;
    } else {
      t32 = $[7];
    }
    t2 = [...availablePaths.map(_temp), t32];
    $[5] = availablePaths;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  const options = t2;
  let t3;
  if ($[8] !== availablePaths.length || $[9] !== errorMessage || $[10] !== handleChange || $[11] !== options || $[12] !== targetRepo || $[13] !== validating) {
    t3 = availablePaths.length > 0 ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          gap: 1,
          children: [
            errorMessage && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "error",
              children: errorMessage
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: [
                "Open Claude Code in ",
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  bold: true,
                  children: targetRepo
                }, undefined, false, undefined, this),
                ":"
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        validating ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: " Validating repository\u2026"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
          options,
          onChange: (value_0) => void handleChange(value_0)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        errorMessage && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "error",
          children: errorMessage
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "Run claude --teleport from a checkout of ",
            targetRepo
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[8] = availablePaths.length;
    $[9] = errorMessage;
    $[10] = handleChange;
    $[11] = options;
    $[12] = targetRepo;
    $[13] = validating;
    $[14] = t3;
  } else {
    t3 = $[14];
  }
  let t4;
  if ($[15] !== onCancel || $[16] !== t3) {
    t4 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "Teleport to Repo",
      onCancel,
      color: "background",
      children: t3
    }, undefined, false, undefined, this);
    $[15] = onCancel;
    $[16] = t3;
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  return t4;
}
function _temp(path) {
  return {
    label: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: [
        "Use ",
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          bold: true,
          children: getDisplayPath(path)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    value: path
  };
}
export {
  TeleportRepoMismatchDialog
};
