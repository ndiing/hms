const { generateRootCA, generateCertsForHostname } = require("./cert");
const { read, remove, write } = require("./file");

const config = read("./config.json", {
    http: { port: 80 },
    https: { port: 443 },
    // securities: [
    //     { url: /\/api\/auth\/(login|verify|register)/.source, permissions: [{ ip: /\b(?:\d{1,3}\.){3}\d{1,3}\b/.source, method: { POST: "any", GET: "any", PATCH: "any", DELETE: "any" }, rateLimit: { window: null, limit: null } }] },
    //     { url: /\/api\/auth\/(refresh)/.source, permissions: [{ role: /^(refresh)$/.source, method: { POST: "any", GET: "any", PATCH: "any", DELETE: "any" }, rateLimit: { window: null, limit: null } }] },
    //     { url: /\/api\/auth\/(logout)/.source, permissions: [{ role: /^(A|D|H|M|O|R)$/.source, method: { POST: "any", GET: "any", PATCH: "any", DELETE: "any" }, rateLimit: { window: null, limit: null } }] },
    //     {
    //         url: /\/api\/otomax\/.*/.source,
    //         permissions: [
    //             { role: /^(A|D|H|M|R)$/.source, method: { POST: "own", GET: "own", PATCH: "own", DELETE: "own" }, rateLimit: { window: null, limit: null } },
    //             { role: /^(O)$/.source, method: { POST: "any", GET: "any", PATCH: "any", DELETE: "any" }, rateLimit: { window: null, limit: null } },
    //             { ip: /^(localhost|127(?:\.[0-9]+){0,2}\.[0-9]+|::1)$/.source, method: { POST: "any", GET: "any", PATCH: "any", DELETE: "any" }, rateLimit: { window: null, limit: null } },
    //         ],
    //     },
    //     { url: /.*/.source, permissions: [{ ip: /^(localhost|127(?:\.[0-9]+){0,2}\.[0-9]+|::1)$/.source, method: { POST: "any", GET: "any", PATCH: "any", DELETE: "any" }, rateLimit: { window: null, limit: null } }] },
    // ],
});

let key;
let cert;

try {
    key = read("./host.key");
    cert = read("./host.crt");
} catch (error) {
    const root = generateRootCA();
    write("./root.key", root.privateKey);
    write("./root.crt", root.certificate);
    const host = generateCertsForHostname("localhost", {
        key: root.privateKey,
        cert: root.certificate,
    });
    key = host.privateKey;
    cert = host.certificate;
    write("./host.key", host.privateKey);
    write("./host.crt", host.certificate);
}

config.https.options = {};
config.https.options.key = key;
config.https.options.cert = cert;

module.exports = config;
