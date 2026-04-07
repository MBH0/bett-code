// @bun
import {
  require_src
} from "./chunk-64q1p7wf.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-linux.js
import { promises as fs } from "fs";
async function getMachineId() {
  const paths = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
  for (const path of paths) {
    try {
      const result = await fs.readFile(path, { encoding: "utf8" });
      return result.trim();
    } catch (e) {
      import_api.diag.debug(`error reading machine id: ${e}`);
    }
  }
  return;
}
var import_api;
var init_getMachineId_linux = __esm(() => {
  import_api = __toESM(require_src(), 1);
});
init_getMachineId_linux();

export {
  getMachineId
};
