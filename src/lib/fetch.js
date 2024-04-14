const Request = require("./request");
const Response = require("./response");
const http = require("http");
const https = require("https");
const Store = require("./store");
const { toKebabCase } = require("./string");
const { HttpProxyAgent } = require("http-proxy-agent");
const { HttpsProxyAgent } = require("https-proxy-agent");
const { getProxyServer } = require("./reg");

function fetch(resource, options = {}) {
    const {proxyServer=getProxyServer()?.[0]}=options
    return new Promise((resolve, reject) => {
        const request = new Request(resource, options);
        if (!options.store) {
            const file = "./data/" + toKebabCase(request.host) + "/default.min.json.gz";
            options.store = new Store(file);
        }
        if (proxyServer) {
            const Agent = request.protocol === "https:" ? HttpsProxyAgent : HttpProxyAgent;
            request.agent = new Agent(proxyServer);
        }
        const cookie = options.store.cookieStore.cookie;
        if (cookie && request.credentials === "include") {
            request.headers.set("Cookie", cookie);
        }
        const client = request.protocol === "https:" ? https : http;
        const req = client.request(request);
        req.on("error", reject);
        req.on("response", (res) => {
            let response = new Response(res, { statusCode: res.statusCode, statusMessage: res.statusMessage, headers: res.headers });
            const setCookie = response.headers.getSetCookie();
            if (setCookie.length) {
                options.store.cookieStore.cookie = setCookie;
            }
            const location = response.headers.get("Location");
            if (location && request.follow > 0 && request.redirect === "follow") {
                --request.follow;
                response = fetch(location, { follow: request.follow, store: options.store });
            }
            resolve(response);
        });
        request.body.pipe(req);
    });
}

module.exports = fetch;
