// @bun
import {
  AGENT_SOURCE_GROUPS,
  compareAgentsByName,
  getOverrideSourceLabel,
  init_agentDisplay,
  resolveAgentModelDisplay,
  resolveAgentOverrides
} from "./chunk-v10rz0h6.js";
import {
  getActiveAgentsFromList,
  getAgentDefinitionsWithOverrides,
  init_loadAgentsDir
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
import {
  getCwd,
  init_cwd
} from "./chunk-ya62xx2m.js";
import"./chunk-8es6caa5.js";
import"./chunk-fbv4apne.js";
import"./chunk-h3gry12w.js";
import"./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import"./chunk-3wk0tdmp.js";
import"./chunk-1t5d3rxd.js";
import"./chunk-emdwnqgz.js";
import"./chunk-64q1p7wf.js";
import"./chunk-qp2qdcda.js";

// src/cli/handlers/agents.ts
init_agentDisplay();
init_loadAgentsDir();
init_cwd();
function formatAgent(agent) {
  const model = resolveAgentModelDisplay(agent);
  const parts = [agent.agentType];
  if (model) {
    parts.push(model);
  }
  if (agent.memory) {
    parts.push(`${agent.memory} memory`);
  }
  return parts.join(" \xB7 ");
}
async function agentsHandler() {
  const cwd = getCwd();
  const { allAgents } = await getAgentDefinitionsWithOverrides(cwd);
  const activeAgents = getActiveAgentsFromList(allAgents);
  const resolvedAgents = resolveAgentOverrides(allAgents, activeAgents);
  const lines = [];
  let totalActive = 0;
  for (const { label, source } of AGENT_SOURCE_GROUPS) {
    const groupAgents = resolvedAgents.filter((a) => a.source === source).sort(compareAgentsByName);
    if (groupAgents.length === 0)
      continue;
    lines.push(`${label}:`);
    for (const agent of groupAgents) {
      if (agent.overriddenBy) {
        const winnerSource = getOverrideSourceLabel(agent.overriddenBy);
        lines.push(`  (shadowed by ${winnerSource}) ${formatAgent(agent)}`);
      } else {
        lines.push(`  ${formatAgent(agent)}`);
        totalActive++;
      }
    }
    lines.push("");
  }
  if (lines.length === 0) {
    console.log("No agents found.");
  } else {
    console.log(`${totalActive} active agents
`);
    console.log(lines.join(`
`).trimEnd());
  }
}
export {
  agentsHandler
};
