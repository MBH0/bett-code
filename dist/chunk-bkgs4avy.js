// @bun
import {
  call as call2,
  init_upgrade
} from "./chunk-0gxcq46x.js";
import {
  call,
  init_extra_usage
} from "./chunk-811vwv7c.js";
import"./chunk-et6wch5e.js";
import"./chunk-14ymdgdr.js";
import"./chunk-s17syr84.js";
import"./chunk-t9gvmz0e.js";
import"./chunk-69nt8ysc.js";
import"./chunk-0g7y59ka.js";
import {
  Select,
  extraUsage,
  init_claudeAiLimitsHook,
  init_extra_usage as init_extra_usage2,
  init_select,
  init_upgrade as init_upgrade2,
  upgrade_default,
  useClaudeAiLimits
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
  getFeatureValue_CACHED_MAY_BE_STALE,
  getOauthAccountInfo,
  getRateLimitTier,
  getSubscriptionType,
  hasClaudeAiBillingAccess,
  init_auth,
  init_billing,
  init_growthbook
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
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/rate-limit-options/rate-limit-options.tsx
function RateLimitOptionsMenu(t0) {
  const $ = import_compiler_runtime.c(25);
  const {
    onDone,
    context
  } = t0;
  const [subCommandJSX, setSubCommandJSX] = import_react.useState(null);
  const claudeAiLimits = useClaudeAiLimits();
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = getSubscriptionType();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const subscriptionType = t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = getRateLimitTier();
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const rateLimitTier = t2;
  const hasExtraUsageEnabled = getOauthAccountInfo()?.hasExtraUsageEnabled === true;
  const isMax = subscriptionType === "max";
  const isMax20x = isMax && rateLimitTier === "default_claude_max_20x";
  const isTeamOrEnterprise = subscriptionType === "team" || subscriptionType === "enterprise";
  const buyFirst = getFeatureValue_CACHED_MAY_BE_STALE("tengu_jade_anvil_4", false);
  let t3;
  bb0: {
    let actionOptions;
    if ($[2] !== claudeAiLimits.overageDisabledReason || $[3] !== claudeAiLimits.overageStatus) {
      actionOptions = [];
      if (extraUsage.isEnabled()) {
        const hasBillingAccess = hasClaudeAiBillingAccess();
        const needsToRequestFromAdmin = isTeamOrEnterprise && !hasBillingAccess;
        const isOrgSpendCapDepleted = claudeAiLimits.overageDisabledReason === "out_of_credits" || claudeAiLimits.overageDisabledReason === "org_level_disabled_until" || claudeAiLimits.overageDisabledReason === "org_service_zero_credit_limit";
        if (needsToRequestFromAdmin && isOrgSpendCapDepleted) {} else {
          const isOverageState = claudeAiLimits.overageStatus === "rejected" || claudeAiLimits.overageStatus === "allowed_warning";
          let label;
          if (needsToRequestFromAdmin) {
            label = isOverageState ? "Request more" : "Request extra usage";
          } else {
            label = hasExtraUsageEnabled ? "Add funds to continue with extra usage" : "Switch to extra usage";
          }
          let t43;
          if ($[5] !== label) {
            t43 = {
              label,
              value: "extra-usage"
            };
            $[5] = label;
            $[6] = t43;
          } else {
            t43 = $[6];
          }
          actionOptions.push(t43);
        }
      }
      if (!isMax20x && !isTeamOrEnterprise && upgrade_default.isEnabled()) {
        let t43;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
          t43 = {
            label: "Upgrade your plan",
            value: "upgrade"
          };
          $[7] = t43;
        } else {
          t43 = $[7];
        }
        actionOptions.push(t43);
      }
      $[2] = claudeAiLimits.overageDisabledReason;
      $[3] = claudeAiLimits.overageStatus;
      $[4] = actionOptions;
    } else {
      actionOptions = $[4];
    }
    let t42;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
      t42 = {
        label: "Stop and wait for limit to reset",
        value: "cancel"
      };
      $[8] = t42;
    } else {
      t42 = $[8];
    }
    const cancelOption = t42;
    if (buyFirst) {
      let t53;
      if ($[9] !== actionOptions) {
        t53 = [...actionOptions, cancelOption];
        $[9] = actionOptions;
        $[10] = t53;
      } else {
        t53 = $[10];
      }
      t3 = t53;
      break bb0;
    }
    let t52;
    if ($[11] !== actionOptions) {
      t52 = [cancelOption, ...actionOptions];
      $[11] = actionOptions;
      $[12] = t52;
    } else {
      t52 = $[12];
    }
    t3 = t52;
  }
  const options = t3;
  let t4;
  if ($[13] !== onDone) {
    t4 = function handleCancel2() {
      logEvent("tengu_rate_limit_options_menu_cancel", {});
      onDone(undefined, {
        display: "skip"
      });
    };
    $[13] = onDone;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  const handleCancel = t4;
  let t5;
  if ($[15] !== context || $[16] !== handleCancel || $[17] !== onDone) {
    t5 = function handleSelect2(value) {
      if (value === "upgrade") {
        logEvent("tengu_rate_limit_options_menu_select_upgrade", {});
        call2(onDone, context).then((jsx) => {
          if (jsx) {
            setSubCommandJSX(jsx);
          }
        });
      } else {
        if (value === "extra-usage") {
          logEvent("tengu_rate_limit_options_menu_select_extra_usage", {});
          call(onDone, context).then((jsx_0) => {
            if (jsx_0) {
              setSubCommandJSX(jsx_0);
            }
          });
        } else {
          if (value === "cancel") {
            handleCancel();
          }
        }
      }
    };
    $[15] = context;
    $[16] = handleCancel;
    $[17] = onDone;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  const handleSelect = t5;
  if (subCommandJSX) {
    return subCommandJSX;
  }
  let t6;
  if ($[19] !== handleSelect || $[20] !== options) {
    t6 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
      options,
      onChange: handleSelect,
      visibleOptionCount: options.length
    }, undefined, false, undefined, this);
    $[19] = handleSelect;
    $[20] = options;
    $[21] = t6;
  } else {
    t6 = $[21];
  }
  let t7;
  if ($[22] !== handleCancel || $[23] !== t6) {
    t7 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "What do you want to do?",
      onCancel: handleCancel,
      color: "suggestion",
      children: t6
    }, undefined, false, undefined, this);
    $[22] = handleCancel;
    $[23] = t6;
    $[24] = t7;
  } else {
    t7 = $[24];
  }
  return t7;
}
async function call3(onDone, context) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(RateLimitOptionsMenu, {
    onDone,
    context
  }, undefined, false, undefined, this);
}
var import_compiler_runtime, import_react, jsx_dev_runtime;
var init_rate_limit_options = __esm(() => {
  init_select();
  init_Dialog();
  init_growthbook();
  init_analytics();
  init_claudeAiLimitsHook();
  init_auth();
  init_billing();
  init_extra_usage();
  init_extra_usage2();
  init_upgrade2();
  init_upgrade();
  import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_rate_limit_options();

export {
  call3 as call
};
