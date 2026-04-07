// @bun
import {
  CHANGELOG_URL,
  fetchAndStoreChangelog,
  getAllReleaseNotes,
  getStoredChangelog,
  init_releaseNotes
} from "./chunk-2z1p2dx5.js";
import"./chunk-hp4mz8q6.js";
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
import"./chunk-wsj9bqwr.js";
import"./chunk-cdz5yb0r.js";
import"./chunk-paapvyzx.js";
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
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/release-notes/release-notes.ts
function formatReleaseNotes(notes) {
  return notes.map(([version, notes2]) => {
    const header = `Version ${version}:`;
    const bulletPoints = notes2.map((note) => `\xB7 ${note}`).join(`
`);
    return `${header}
${bulletPoints}`;
  }).join(`

`);
}
async function call() {
  let freshNotes = [];
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout((rej) => rej(new Error("Timeout")), 500, reject);
    });
    await Promise.race([fetchAndStoreChangelog(), timeoutPromise]);
    freshNotes = getAllReleaseNotes(await getStoredChangelog());
  } catch {}
  if (freshNotes.length > 0) {
    return { type: "text", value: formatReleaseNotes(freshNotes) };
  }
  const cachedNotes = getAllReleaseNotes(await getStoredChangelog());
  if (cachedNotes.length > 0) {
    return { type: "text", value: formatReleaseNotes(cachedNotes) };
  }
  return {
    type: "text",
    value: `See the full changelog at: ${CHANGELOG_URL}`
  };
}
var init_release_notes = __esm(() => {
  init_releaseNotes();
});
init_release_notes();

export {
  call
};
