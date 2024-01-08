import {
  flowRendererV2,
  flowStyles
} from "./chunk-455R7PSQ.js";
import "./chunk-N7YSK267.js";
import {
  flowDb,
  parser$1
} from "./chunk-GCBNJWVM.js";
import "./chunk-GVI2TPJG.js";
import "./chunk-EFSRDR7F.js";
import "./chunk-3PFGLQD7.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-7SHSTF6H.js";
import {
  __toESM
} from "./chunk-3EJPJMEH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/flowDiagram-v2-2f8f667a.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-2f8f667a-KAOIJPJB.js.map
