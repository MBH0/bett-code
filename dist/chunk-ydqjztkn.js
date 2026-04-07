// @bun
import {
  GroveDialog,
  PrivacySettingsDialog,
  init_Grove
} from "./chunk-mqfxwvw3.js";
import {
  getGroveNoticeConfig,
  getGroveSettings,
  init_grove,
  isQualifiedForGrove
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

// src/commands/privacy-settings/privacy-settings.tsx
async function call(onDone) {
  const qualified = await isQualifiedForGrove();
  if (!qualified) {
    onDone(FALLBACK_MESSAGE);
    return null;
  }
  const [settingsResult, configResult] = await Promise.all([getGroveSettings(), getGroveNoticeConfig()]);
  if (!settingsResult.success) {
    onDone(FALLBACK_MESSAGE);
    return null;
  }
  const settings = settingsResult.data;
  const config = configResult.success ? configResult.data : null;
  async function onDoneWithDecision(decision) {
    if (decision === "escape" || decision === "defer") {
      onDone("Privacy settings dialog dismissed", {
        display: "system"
      });
      return;
    }
    await onDoneWithSettingsCheck();
  }
  async function onDoneWithSettingsCheck() {
    const updatedSettingsResult = await getGroveSettings();
    if (!updatedSettingsResult.success) {
      onDone("Unable to retrieve updated privacy settings", {
        display: "system"
      });
      return;
    }
    const updatedSettings = updatedSettingsResult.data;
    const groveStatus = updatedSettings.grove_enabled ? "true" : "false";
    onDone(`"Help improve Claude" set to ${groveStatus}.`);
    if (settings.grove_enabled !== null && settings.grove_enabled !== updatedSettings.grove_enabled) {
      logEvent("tengu_grove_policy_toggled", {
        state: updatedSettings.grove_enabled,
        location: "settings"
      });
    }
  }
  if (settings.grove_enabled !== null) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PrivacySettingsDialog, {
      settings,
      domainExcluded: config?.domain_excluded,
      onDone: onDoneWithSettingsCheck
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GroveDialog, {
    showIfAlreadyViewed: true,
    onDone: onDoneWithDecision,
    location: "settings"
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime, FALLBACK_MESSAGE = "Review and manage your privacy settings at https://claude.ai/settings/data-privacy-controls";
var init_privacy_settings = __esm(() => {
  init_Grove();
  init_analytics();
  init_grove();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_privacy_settings();

export {
  call
};
