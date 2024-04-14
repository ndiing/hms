const HTTP_HEADERS = [
    "Accept",
    "Accept-CH",
    "Accept-CH-Lifetime",
    "Accept-Charset",
    "Accept-Encoding",
    "Accept-Language",
    "Accept-Patch",
    "Accept-Post",
    "Accept-Ranges",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Expose-Headers",
    "Access-Control-Max-Age",
    "Access-Control-Request-Headers",
    "Access-Control-Request-Method",
    "Age",
    "Allow",
    "Alt-Svc",
    "Alt-Used",
    "Authorization",
    "Cache-Control",
    "Clear-Site-Data",
    "Connection",
    "Content-Disposition",
    "Content-DPR",
    "Content-Encoding",
    "Content-Language",
    "Content-Length",
    "Content-Location",
    "Content-Range",
    "Content-Security-Policy",
    "Content-Security-Policy-Report-Only",
    "Content-Type",
    "Cookie",
    "Critical-CH",
    "Cross-Origin-Embedder-Policy",
    "Cross-Origin-Opener-Policy",
    "Cross-Origin-Resource-Policy",
    "Date",
    "Device-Memory",
    "Digest",
    "DNT",
    "Downlink",
    "DPR",
    "Early-Data",
    "ECT",
    "ETag",
    "Expect",
    "Expect-CT",
    "Expires",
    "Forwarded",
    "From",
    "Host",
    "If-Match",
    "If-Modified-Since",
    "If-None-Match",
    "If-Range",
    "If-Unmodified-Since",
    "Keep-Alive",
    "Large-Allocation",
    "Last-Modified",
    "Link",
    "Location",
    "Max-Forwards",
    "NEL",
    "Observe-Browsing-Topics",
    "Origin",
    "Origin-Agent-Cluster",
    "Permissions-Policy",
    "Pragma",
    "Proxy-Authenticate",
    "Proxy-Authorization",
    "Range",
    "Referer",
    "Referrer-Policy",
    "Retry-After",
    "RTT",
    "Save-Data",
    "Sec-Browsing-Topics",
    "Sec-CH-Prefers-Color-Scheme",
    "Sec-CH-Prefers-Reduced-Motion",
    "Sec-CH-Prefers-Reduced-Transparency",
    "Sec-CH-UA",
    "Sec-CH-UA-Arch",
    "Sec-CH-UA-Bitness",
    "Sec-CH-UA-Full-Version",
    "Sec-CH-UA-Full-Version-List",
    "Sec-CH-UA-Mobile",
    "Sec-CH-UA-Model",
    "Sec-CH-UA-Platform",
    "Sec-CH-UA-Platform-Version",
    "Sec-Fetch-Dest",
    "Sec-Fetch-Mode",
    "Sec-Fetch-Site",
    "Sec-Fetch-User",
    "Sec-GPC",
    "Sec-Purpose",
    "Sec-WebSocket-Accept",
    "Server",
    "Server-Timing",
    "Service-Worker-Navigation-Preload",
    "Set-Cookie",
    "Set-Login",
    "SourceMap",
    "Strict-Transport-Security",
    "Supports-Loading-Mode",
    "TE",
    "Timing-Allow-Origin",
    "Tk",
    "Trailer",
    "Transfer-Encoding",
    "Upgrade",
    "Upgrade-Insecure-Requests",
    "User-Agent",
    "Vary",
    "Via",
    "Viewport-Width",
    "Want-Digest",
    "Warning",
    "Width",
    "WWW-Authenticate",
    "X-Content-Type-Options",
    "X-DNS-Prefetch-Control",
    "X-Forwarded-For",
    "X-Forwarded-Host",
    "X-Forwarded-Proto",
    "X-Frame-Options",
    "X-XSS-Protection",
];

class Headers {
    constructor(init) {
        if (typeof init === "object") {
            for (const name in init) {
                const value = init[name];
                this.set(name, value);
            }
        }
    }

    append(name, value) {
        name = this.key(name);

        if (this[name]) {
            if (Array.isArray(this[name])) {
                this[name].push(value);
            } else {
                this[name] = [this[name], value];
            }
        } else {
            this.set(name, value);
        }
    }

    delete(name) {
        name = this.key(name);
        delete this[name];
    }

    entries() {
        return Object.entries(this);
    }

    forEach(callbackFn = () => {}) {
        for (const [name, value] of Object.entries(this)) {
            callbackFn(value, name);
        }
    }

    get(name) {
        name = this.key(name);
        return this[name];
    }

    getSetCookie() {
        let name = "Set-Cookie";
        return [].concat(this[name]).filter(Boolean);
    }

    has(name) {
        name = this.key(name);
        return !!this[name];
    }

    keys() {
        return Object.keys(this);
    }

    key(name) {
        return (
            HTTP_HEADERS.find((key) =>
                new RegExp(`^${key}$`, "i").test(name),
            ) ?? name
        );
    }

    set(name, value) {
        name = this.key(name);
        this[name] = value;
    }

    values() {
        return Object.values(this);
    }
}

module.exports = Headers;
