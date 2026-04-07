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

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-win.js
import * as process from "process";
async function getMachineId() {
  const args = "QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid";
  let command = "%windir%\\System32\\REG.exe";
  if (process.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in process.env) {
    command = "%windir%\\sysnative\\cmd.exe /c " + command;
  }
  try {
    const result = await execAsync(`${command} ${args}`);
    const parts = result.stdout.split("REG_SZ");
    if (parts.length === 2) {
      return parts[1].trim();
    }
  } catch (e) {
    import_api.diag.debug(`error reading machine id: ${e}`);
  }
  return;
}
var import_api;
var init_getMachineId_win = __esm(() => {
  init_execAsync();
  import_api = __toESM(require_src(), 1);
});
init_getMachineId_win();

export {
  getMachineId
};
