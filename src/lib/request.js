const { Readable } = require("stream");
const Headers = require("./headers");

class Request {
    constructor(input, options = {}) {
        this.input = new URL(input, "http://localhost");
        this.body = options.body;
        this.credentials = options.credentials ?? "include";
        this.method = options.method ?? "GET";
        this.redirect = options.redirect ?? "follow";
        this.signal = options.signal;
        this.url = options.url;
        this.follow = options.follow ?? 30;
        this.agent = options.agent;
        this.hostname = options.hostname ?? this.input.hostname;
        this.insecureHTTPParser = options.insecureHTTPParser ?? true;
        this.path =
            options.path ??
            this.input.pathname +
                (this.input.search ?? "") +
                (this.input.hash ?? "");
        this.protocol = options.protocol ?? this.input.protocol;
        this.port =
            options.port ??
            parseInt(
                this.input.port || (this.protocol === "https:" ? 443 : 80),
            );
        this.host =
            options.host ??
            (this.hostname + ":" + this.port).replace(/:(443|80)/g, "");
        this.timeout = options.timeout ?? 30 * 1000 * 1000;
        this.headers = new Headers({
            Host: this.host,
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            Connection: "Keep-Alive",
            ...options.headers,
        });

        if (!(this.body instanceof Readable)) {
            const readable = new Readable();
            readable.push(this.body);
            readable.push(null);
            this.body = readable;
        }
    }
}

module.exports = Request;
