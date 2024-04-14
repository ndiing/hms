const crypto = require("crypto");
const RFC4648 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const RFC4648_HEX = "0123456789ABCDEFGHIJKLMNOPQRSTUV";
const CROCKFORD = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

function toDataView(data) {
    if (
        data instanceof Int8Array ||
        data instanceof Uint8Array ||
        data instanceof Uint8ClampedArray
    ) {
        return new DataView(data.buffer, data.byteOffset, data.byteLength);
    }
    if (data instanceof ArrayBuffer) {
        return new DataView(data);
    }
    throw new TypeError(
        "Expected `data` to be an ArrayBuffer, Buffer, Int8Array, Uint8Array or Uint8ClampedArray",
    );
}

function base32Encode(data, variant = "RFC4648", options) {
    data = new TextEncoder().encode(data);
    options = options || {};
    let alphabet, defaultPadding;
    switch (variant) {
        case "RFC3548":
        case "RFC4648":
            alphabet = RFC4648;
            defaultPadding = true;
            break;
        case "RFC4648-HEX":
            alphabet = RFC4648_HEX;
            defaultPadding = true;
            break;
        case "Crockford":
            alphabet = CROCKFORD;
            defaultPadding = false;
            break;
        default:
            throw new Error("Unknown base32 variant: " + variant);
    }
    const padding =
        options.padding !== undefined ? options.padding : defaultPadding;
    const view = toDataView(data);
    let bits = 0;
    let value = 0;
    let output = "";
    for (let i = 0; i < view.byteLength; i++) {
        value = (value << 8) | view.getUint8(i);
        bits += 8;
        while (bits >= 5) {
            output += alphabet[(value >>> (bits - 5)) & 31];
            bits -= 5;
        }
    }
    if (bits > 0) {
        output += alphabet[(value << (5 - bits)) & 31];
    }
    if (padding) {
        while (output.length % 8 !== 0) {
            output += "=";
        }
    }
    return output;
}

function readChar(alphabet, char) {
    var idx = alphabet.indexOf(char);
    if (idx === -1) {
        throw new Error("Invalid character found: " + char);
    }
    return idx;
}

function base32Decode(input, variant = "RFC4648") {
    var alphabet;
    switch (variant) {
        case "RFC3548":
        case "RFC4648":
            alphabet = RFC4648;
            input = input.replace(/=+$/, "");
            break;
        case "RFC4648-HEX":
            alphabet = RFC4648_HEX;
            input = input.replace(/=+$/, "");
            break;
        case "Crockford":
            alphabet = CROCKFORD;
            input = input
                .toUpperCase()
                .replace(/O/g, "0")
                .replace(/[IL]/g, "1");
            break;
        default:
            throw new Error("Unknown base32 variant: " + variant);
    }
    var length = input.length;
    var bits = 0;
    var value = 0;
    var index = 0;
    var output = new Uint8Array(((length * 5) / 8) | 0);
    for (var i = 0; i < length; i++) {
        value = (value << 5) | readChar(alphabet, input[i]);
        bits += 5;
        if (bits >= 8) {
            output[index++] = (value >>> (bits - 8)) & 255;
            bits -= 8;
        }
    }
    return new TextDecoder("utf-8").decode(output.buffer);
}

function encode(data, options = {}) {
    const { encoding = "base64" } = options;
    if (encoding === "base32") {
        return base32Encode(data);
    }
    return Buffer.from(data).toString(encoding);
}

function decode(data, options = {}) {
    const { encoding = "base64" } = options;
    if (encoding === "base32") {
        return base32Decode(data);
    }
    return Buffer.from(data, encoding).toString();
}

function hash(data, options = {}) {
    const { algorithm = "md5", encoding = "hex" } = options;
    return crypto.createHash(algorithm).update(data).digest(encoding);
}

function hmac(data, options = {}) {
    const { algorithm = "md5", key = "", encoding = "hex" } = options;
    return crypto.createHmac(algorithm, key).update(data).digest(encoding);
}

function encrypt(data, options = {}) {
    const {
        algorithm = "aes-128-cbc",
        key = Buffer.alloc(16),
        iv = Buffer.alloc(16),
        encoding = "hex",
    } = options;
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    return Buffer.concat([cipher.update(data), cipher.final()]).toString(
        encoding,
    );
}

function decrypt(data, options = {}) {
    const {
        algorithm = "aes-128-cbc",
        key = Buffer.alloc(16),
        iv = Buffer.alloc(16),
        encoding = "hex",
    } = options;
    const cipher = crypto.createDecipheriv(algorithm, key, iv);
    return Buffer.concat([
        cipher.update(data, encoding),
        cipher.final(),
    ]).toString();
}

function privateEncrypt(data, options = {}) {
    const { key, encoding = "hex" } = options;
    return crypto.privateEncrypt(key, Buffer.from(data)).toString(encoding);
}

function publicDecrypt(data, options = {}) {
    const { key, encoding = "hex" } = options;
    return crypto.publicDecrypt(key, Buffer.from(data, encoding)).toString();
}

function publicEncrypt(data, options = {}) {
    const { key, encoding = "hex" } = options;
    return crypto.publicEncrypt(key, Buffer.from(data)).toString(encoding);
}

function privateDecrypt(data, options = {}) {
    const { key, encoding = "hex" } = options;
    return crypto.privateDecrypt(key, Buffer.from(data, encoding)).toString();
}

function sign(data, options = {}) {
    const { algorithm = "sha1", key, encoding = "hex" } = options;
    const sign = crypto.createSign(algorithm);
    sign.update(data);
    sign.end();
    return sign.sign(key, encoding);
}

function verify(data, options = {}) {
    const { algorithm = "sha1", key, signature, encoding = "hex" } = options;
    const verify = crypto.createVerify(algorithm);
    verify.update(data);
    verify.end();
    return verify.verify(key, signature, encoding);
}

module.exports = {
    encode,
    decode,
    hash,
    hmac,
    encrypt,
    decrypt,
    privateEncrypt,
    publicDecrypt,
    publicEncrypt,
    privateDecrypt,
    sign,
    verify,
};
