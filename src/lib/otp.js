const moment = require("moment");
const crypto = require("crypto");
const Crypto = require("./crypto");

function toBuffer(arg) {
    let buffer;
    if (arg.length) buffer = Buffer.from(arg);
    else {
        buffer = Buffer.alloc(8);
        buffer.writeUInt32BE(arg, 4);
    }
    return buffer;
}

function hotp({ key, counter, algorithm = "sha1", digits = 6, encoding }) {
    if (encoding === "base32") {
        key = Crypto.decode(key, { encoding });
    }
    const keyBytes = toBuffer(key);
    const counterBytes = toBuffer(counter);
    const hash = crypto
        .createHmac(algorithm, keyBytes)
        .update(counterBytes)
        .digest("hex");
    return truncate(hash, digits);
}

function totp({
    key,
    T,
    T0 = 0,
    X = 30,
    algorithm = "sha1",
    digits = 6,
    encoding,
}) {
    const counter = Math.floor(((!T ? moment().unix() : T) - T0) / X);
    return hotp({ key, counter, algorithm, digits, encoding });
}

function truncate(s, digits) {
    var offset = parseInt(s.charAt(s.length - 1), 16);
    var result = parseInt(s.substr(offset * 2, 2 * 4), 16);
    result = result & 0x7fffffff;
    return String(result).slice(0 - digits);
}

function otpauth(options = {}) {
    let {
        type = "totp",
        label = "label",
        secret = "",
        issuer = "issuer",
        algorithm = "SHA1",
        digits = 6,
        counter = 0,
        period = 30,
    } = options;
    const length = { SHA1: 20, SHA256: 32, SHA512: 64 };
    secret = crypto.randomBytes(64).toString("hex").slice(0, length[algorithm]);
    secret = Crypto.encode(secret, { encoding: "base32" });
    const uri = new URL(`otpauth://${type}/${label}`);
    uri.searchParams.set("secret", secret);
    uri.searchParams.set("issuer", issuer);
    uri.searchParams.set("algorithm", algorithm);
    uri.searchParams.set("digits", digits);
    if (type === "hotp") {
        uri.searchParams.set("counter", counter);
    }
    if (type === "totp") {
        uri.searchParams.set("period", period);
    }
    const qr = new URL("https://chart.googleapis.com/chart");
    qr.searchParams.set("cht", "qr");
    qr.searchParams.set("chs", "256x256");
    qr.searchParams.set("chl", uri.toString());
    return {
        type,
        label,
        secret,
        issuer,
        algorithm,
        digits,
        counter,
        period,
        uri: uri.toString(),
        qr: qr.toString(),
    };
}

module.exports = { hotp, totp, otpauth };
