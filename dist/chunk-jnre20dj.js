// @bun
import {
  execAsync,
  init_execAsync
} from "./chunk-n7eqh833.js";
import {
  require_src
} from "./chunk-64q1p7wf.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-bsd.js
import { promises as fs } from "fs";
async function getMachineId() {
  try {
    const result = await fs.readFile("/etc/hostid", { encoding: "utf8" });
    return result.trim();
  } catch (e) {
    import_api.diag.debug(`error reading machine id: ${e}`);
  }
  try {
    const result = await execAsync("kenv -q smbios.system.uuid");
    return result.stdout.trim();
  } catch (e) {
    import_api.diag.debug(`error reading machine id: ${e}`);
  }
  return;
}
var import_api;
var init_getMachineId_bsd = __esm(() => {
  init_execAsync();
  import_api = __toESM(require_src(), 1);
});
init_getMachineId_bsd();

export {
  getMachineId
};
