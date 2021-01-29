const { parentPort } = require("worker_threads");
const Comlink = require("comlink");
const nodeEndpoint  = require("comlink/dist/umd/node-adapter.min");

const dJSON = require("dirty-json");

const api = {
    parse (malformedJSON) {
        return dJSON.parse(malformedJSON);
    },
};

Comlink.expose(api, nodeEndpoint(parentPort));
