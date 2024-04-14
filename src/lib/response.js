const Headers = require("./headers");
const zlib = require("zlib");
const { Blob } = require("buffer");

class Response {
    constructor(body, options = {}) {
        this.body = body;
        this.headers = new Headers(options.headers);
        this.status = options.status ?? options.statusCode;
        this.ok =
            options.ok ?? (this.statusCode >= 200) & (this.statusCode < 300);
        this.statusText = options.statusText ?? options.statusMessage;
        this.url = options.url;
    }

    async buffer() {
        const contentEncoding = this.headers.get("Content-Encoding") ?? "";

        if (/\bgzip\b/.test(contentEncoding)) {
            this.body = this.body.pipe(zlib.createGunzip());
        } else if (/\bdeflate\b/.test(contentEncoding)) {
            this.body = this.body.pipe(zlib.createInflate());
        } else if (/\bbr\b/.test(contentEncoding)) {
            this.body = this.body.pipe(zlib.createBrotliDecompress());
        }
        const buffer = [];

        for await (const chunk of this.body) {
            buffer.push(chunk);
        }
        return Buffer.concat(buffer);
    }

    async arrayBuffer() {
        const buffer = await this.buffer();
        return buffer.buffer.slice(
            buffer.byteOffset,
            buffer.byteOffset + buffer.byteLength,
        );
    }

    async blob() {
        const buffer = await this.buffer();
        return new Blob([buffer]);
    }

    async json() {
        const buffer = await this.buffer();
        return JSON.parse(buffer);
    }

    async text() {
        const buffer = await this.buffer();
        return buffer.toString();
    }
}

module.exports = Response;
