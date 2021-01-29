import { Worker } from "worker_threads";
import * as Comlink from "comlink";
import nodeEndpoint from "comlink/src/node-adapter";

export function parseMalformedJSON (
    malformedJSON
) {
    const worker = new Worker(`./utilities/ScraperFactory/utilities/parseMalformedJSON/worker.js`);
    const parse = Comlink.wrap(nodeEndpoint(worker));
    // @ts-ignore
    return parse(malformedJSON);
}

export default parseMalformedJSON;
