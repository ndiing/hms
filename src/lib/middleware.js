const http = require("http");
const moment = require("moment");
const { Readable } = require("stream");
const zlib = require("zlib");
const JWT = require("./jwt");
const config = require("./config");

function init() {
    return (req, res, next) => {
        try {
            req.ip = req.socket.remoteAddress;
            res.removeHeader("X-Powered-By");
            res.headers = {
                "Access-Control-Allow-Origin": req.headers["origin"],
                "Access-Control-Allow-Credentials": true,
            };
            next();
        } catch (error) {
            next(error);
        }
    };
}

function message() {
    return async (req, res, next) => {
        try {
            if (["POST", "PATCH", "PUT"].includes(req.method)) {
                let body = [];
                for await (const chunk of req) {
                    body.push(chunk);
                }
                body = Buffer.concat(body);
                const contentType = req.headers["content-type"] ?? "";
                if (contentType.includes("application/json")) {
                    body = JSON.parse(body);
                } else if (contentType.includes("application/x-www-form-urlencoded")) {
                    body = Object.fromEntries(new URLSearchParams(body.toString()).entries());
                }
                req.body = body;
            }
            next();
        } catch (error) {
            next(error);
        }
    };
}

function compression() {
    return (req, res, next) => {
        try {
            res.send = (body) => {
                if (!(body instanceof Readable)) {
                    const readable = new Readable();
                    readable.push(body);
                    readable.push(null);
                    body = readable;
                }
                const acceptEncoding = req.headers["accept-encoding"] ?? "";
                if (/\bgzip\b/.test(acceptEncoding)) {
                    res.headers["Content-Encoding"] = "gzip";
                    body = body.pipe(zlib.createGzip());
                } else if (/\bdeflate\b/.test(acceptEncoding)) {
                    res.headers["Content-Encoding"] = "deflate";
                    body = body.pipe(zlib.createDeflate());
                } else if (/\bbr\b/.test(acceptEncoding)) {
                    res.headers["Content-Encoding"] = "br";
                    body = body.pipe(zlib.createBrotliCompress());
                }
                res.set(res.headers);
                body.pipe(res);
            };
            // res.stream = (data = {}) => {
            //     res.headers["Cache-Control"] = "no-cache";
            //     res.headers["Connection"] = "keep-alive";
            //     res.headers["Content-Type"] = "text/event-stream";

            //     let message = ``;
            //     message += `event: message\n`;
            //     message += `data: ${JSON.stringify(data)}\n`;
            //     message += `id: ${Date.now()}\n`;
            //     message += `retry: 30\n`;
            //     message += `\n`;

            //     res.set(res.headers);
            //     res.write(message);
            // };
            next();
        } catch (error) {
            next(error);
        }
    };
}

function cookie() {
    return (req, res, next) => {
        try {
            const cookie = req.headers["cookie"] ?? "";
            const object = {};
            if (cookie) {
                for (const [, name, value] of cookie.matchAll(/([^= ]+)=([^;]+)/g)) {
                    object[name] = value;
                }
            }
            req.cookie = object;
            const attributes = {
                domain: "Domain",
                expires: "Expires",
                httpOnly: "HttpOnly",
                maxAge: "Max-Age",
                partitioned: "Partitioned",
                path: "Path",
                secure: "Secure",
                sameSite: "SameSite",
            };
            res.setCookie = (name, value) => {
                const options = typeof name === "object" ? name : { name, value };
                const cookie = [[options.name, options.value].join("=")];
                for (const name in options) {
                    const value = options[name];
                    if (!attributes[name] || ["name", "value"].includes(name)) {
                        continue;
                    }
                    cookie.push([attributes[name], value].join("="));
                }
                if (!res.headers["Set-Cookie"]) {
                    res.headers["Set-Cookie"] = [];
                }
                res.headers["Set-Cookie"].push(cookie.join("; "));
            };
            next();
        } catch (error) {
            next(error);
        }
    };
}

function auth(securities = []) {
    // console.log(securities)
    // securities = [
    //     ...securities,
    //     {
    //         url: /.*/.source,
    //         permissions: [
    //             //
    //             {
    //                 //
    //                 ip: /^(localhost|127(?:\.[0-9]+){0,2}\.[0-9]+|::1)$/.source,
    //                 method: { POST: "any", GET: "any", PATCH: "any", DELETE: "any" },
    //                 rateLimit: { window: null, limit: null },
    //             },
    //         ],
    //     },
    // ];
    const rateLimits = {};
    return (req, res, next) => {
        try {
            const security = securities.find((security) => {
                return new RegExp(security.url, "i").test(req.url);
            });
            if (!security) {
                res.status(501);
                throw new Error(http.STATUS_CODES[501]);
            }
            let [, credentials] = (req.headers["authorization"] ?? "").split(" ");
            // console.log(credentials)
            // console.log(req.cookie)
            res.locals.credentials = { ips: [req.ip] };
            if (credentials) {
                try {
                    const [payload, options] = JWT.decode(credentials, {
                        secret: config.https.options.key,
                    });
                    const verified = JWT.verify(credentials, options);
                    res.locals.credentials = payload;
                } catch (error) {
                    res.status(401);
                    throw error;
                }
            }
            const permission = security.permissions.find((permission) => {
                return (
                    (res.locals.credentials.ips &&
                        res.locals.credentials.ips.length &&
                        permission.ip &&
                        res.locals.credentials.ips.some((ip) => {
                            return new RegExp(permission.ip, "i").test(ip);
                        })) ||
                    (res.locals.credentials.roles &&
                        res.locals.credentials.roles.length &&
                        permission.role &&
                        res.locals.credentials.roles.some((role) => {
                            return new RegExp(permission.role, "i").test(role);
                        }))
                );
            });
            if (!permission && !credentials) {
                res.status(401);
                throw new Error(http.STATUS_CODES[401]);
            }
            if (!permission?.method[req.method]) {
                res.status(403);
                throw new Error("The request requires higher privileges than provided by the access token");
            }
            if (permission.rateLimit.limit > 0 && permission.rateLimit.window > 0) {
                const key = [req.method, req.ip, req.url].toString();
                let value = rateLimits[key];
                let timeout;
                if (!value || (value.reset && value.reset.diff(moment()) < 0)) {
                    clearTimeout(timeout);
                    value = {
                        limit: permission.rateLimit.limit,
                        remaining: permission.rateLimit.limit,
                    };
                    rateLimits[key] = value;
                    timeout = setTimeout(() => {
                        delete rateLimits[key];
                    }, permission.rateLimit.window * 1000);
                }
                if (value.remaining > 0) {
                    --value.remaining;
                }
                if (value.remaining == 0 && !value.reset) {
                    value.reset = moment().add(permission.rateLimit.window, "s");
                }
                res.headers["X-RateLimit-Limit"] = value.limit;
                res.headers["X-RateLimit-Remaining"] = value.remaining;
                if (value.reset && value.reset.diff(moment()) > 0) {
                    res.headers["X-RateLimit-Reset"] = value.reset.diff(moment(), "s");
                    res.headers["Retry-After"] = res.headers["X-RateLimit-Reset"];
                    res.status(429);
                    throw new Error(http.STATUS_CODES[429]);
                }
            }
            res.locals.permission = permission;

            // console.log(
            //     req.method,
            //     req.url,
            //     req.ip,
            // )

            next();
        } catch (error) {
            next(error);
        }
    };
}

function missing() {
    return (req, res, next) => {
        res.status(404);
        const err = new Error(http.STATUS_CODES[404]);
        next(err);
    };
}

function error() {
    return (err, req, res, next) => {
        err = JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)));
        // console.log(err)
        if (res.statusCode >= 200 && res.statusCode < 300) {
            res.status(500);
        }
        res.json({ message: err.message });
    };
}

module.exports = { init, message, compression, cookie, auth, missing, error };
