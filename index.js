const { Worker } = require("worker_threads");
const Comlink = require("comlink");
const nodeEndpoint  = require("comlink/dist/umd/node-adapter.min");

function parseMalformedJSON (
    malformedJSON
) {
    const worker = new Worker(`./utilities/ScraperFactory/utilities/parseMalformedJSON/worker.js`);
    const api = Comlink.wrap(nodeEndpoint(worker));
    return api.parse(malformedJSON);
}

module.exports = parseMalformedJSON;
