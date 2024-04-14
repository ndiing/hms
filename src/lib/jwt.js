const Crypto = require("./crypto");
const crypto = require("crypto");
const moment = require("moment");

const signer = {
    hs256: (data, options = {}) => {
        const { key } = options;
        return Crypto.hmac(data, {
            algorithm: "sha256",
            key,
            encoding: "base64url",
        });
    },

    hs384: (data, options = {}) => {
        const { key } = options;
        return Crypto.hmac(data, {
            algorithm: "sha384",
            key,
            encoding: "base64url",
        });
    },

    hs512: (data, options = {}) => {
        const { key } = options;
        return Crypto.hmac(data, {
            algorithm: "sha512",
            key,
            encoding: "base64url",
        });
    },

    rs256: (data, options = {}) => {
        const { key } = options;
        return Crypto.sign(data, {
            algorithm: "sha256",
            key,
            encoding: "base64url",
        });
    },

    rs384: (data, options = {}) => {
        const { key } = options;
        return Crypto.sign(data, {
            algorithm: "sha384",
            key,
            encoding: "base64url",
        });
    },

    rs512: (data, options = {}) => {
        const { key } = options;
        return Crypto.sign(data, {
            algorithm: "sha512",
            key,
            encoding: "base64url",
        });
    },

    es256: (data, options = {}) => {
        const { key } = options;
        return Crypto.sign(data, {
            algorithm: "sha256",
            key: { key, dsaEncoding: "ieee-p1363" },
            encoding: "base64url",
        });
    },

    es384: (data, options = {}) => {
        const { key } = options;
        return Crypto.sign(data, {
            algorithm: "sha384",
            key: { key, dsaEncoding: "ieee-p1363" },
            encoding: "base64url",
        });
    },

    es512: (data, options = {}) => {
        const { key } = options;
        return Crypto.sign(data, {
            algorithm: "sha512",
            key: { key, dsaEncoding: "ieee-p1363" },
            encoding: "base64url",
        });
    },

    ps256: (data, options = {}) => {
        const { key } = options;
        return Crypto.sign(data, {
            algorithm: "sha256",
            key: {
                key,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
            },
            encoding: "base64url",
        });
    },

    ps384: (data, options = {}) => {
        const { key } = options;
        return Crypto.sign(data, {
            algorithm: "sha384",
            key: {
                key,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
            },
            encoding: "base64url",
        });
    },

    ps512: (data, options = {}) => {
        const { key } = options;
        return Crypto.sign(data, {
            algorithm: "sha512",
            key: {
                key,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
            },
            encoding: "base64url",
        });
    },
};

const verifier = {
    hs256: (data, options = {}) => {
        const { key, signature } = options;
        return (
            signature ===
            Crypto.hmac(data, {
                algorithm: "sha256",
                key,
                encoding: "base64url",
            })
        );
    },

    hs384: (data, options = {}) => {
        const { key, signature } = options;
        return (
            signature ===
            Crypto.hmac(data, {
                algorithm: "sha384",
                key,
                encoding: "base64url",
            })
        );
    },

    hs512: (data, options = {}) => {
        const { key, signature } = options;
        return (
            signature ===
            Crypto.hmac(data, {
                algorithm: "sha512",
                key,
                encoding: "base64url",
            })
        );
    },

    rs256: (data, options = {}) => {
        const { key, signature } = options;
        return Crypto.verify(data, {
            algorithm: "sha256",
            key,
            signature,
            encoding: "base64url",
        });
    },

    rs384: (data, options = {}) => {
        const { key, signature } = options;
        return Crypto.verify(data, {
            algorithm: "sha384",
            key,
            signature,
            encoding: "base64url",
        });
    },

    rs512: (data, options = {}) => {
        const { key, signature } = options;
        return Crypto.verify(data, {
            algorithm: "sha512",
            key,
            signature,
            encoding: "base64url",
        });
    },

    es256: (data, options = {}) => {
        const { key, signature } = options;
        return Crypto.verify(data, {
            algorithm: "sha256",
            key: { key, dsaEncoding: "ieee-p1363" },
            signature,
            encoding: "base64url",
        });
    },

    es384: (data, options = {}) => {
        const { key, signature } = options;
        return Crypto.verify(data, {
            algorithm: "sha384",
            key: { key, dsaEncoding: "ieee-p1363" },
            signature,
            encoding: "base64url",
        });
    },

    es512: (data, options = {}) => {
        const { key, signature } = options;
        return Crypto.verify(data, {
            algorithm: "sha512",
            key: { key, dsaEncoding: "ieee-p1363" },
            signature,
            encoding: "base64url",
        });
    },

    ps256: (data, options = {}) => {
        const { key, signature } = options;
        return Crypto.verify(data, {
            algorithm: "sha256",
            key: {
                key,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
            },
            signature,
            encoding: "base64url",
        });
    },

    ps384: (data, options = {}) => {
        const { key, signature } = options;
        return Crypto.verify(data, {
            algorithm: "sha384",
            key: {
                key,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
            },
            signature,
            encoding: "base64url",
        });
    },

    ps512: (data, options = {}) => {
        const { key, signature } = options;
        return Crypto.verify(data, {
            algorithm: "sha512",
            key: {
                key,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
            },
            signature,
            encoding: "base64url",
        });
    },
};

function encode(payload, options = {}) {
    let { header, secret } = options;
    payload = Crypto.encode(JSON.stringify(payload), { encoding: "base64url" });
    header = Crypto.encode(JSON.stringify(header), { encoding: "base64url" });
    const data = [header, payload].join(".");
    const signature = sign(data, options);
    return [data, signature].join(".");
}

function decode(token, options = {}) {
    const { secret } = options;
    let payload;
    let header;
    let signature;
    try {
        [header, payload, signature] = token.split(".");
        header = JSON.parse(Crypto.decode(header, { encoding: "base64url" }));
        payload = JSON.parse(Crypto.decode(payload, { encoding: "base64url" }));
    } catch (error) {
        throw new Error(
            "The access token provided is invalid for other reasons.",
        );
    }
    return [payload, { header, secret }];
}

function sign(data, options = {}) {
    let { header, secret } = options;
    return signer[header.alg.toLowerCase()](data, { key: secret });
}
const revokes = [];

function verify(token, options = {}) {
    let { secret } = options;
    let [header, payload, signature] = token.split(".");
    const data = [header, payload].join(".");
    header = JSON.parse(Crypto.decode(header, { encoding: "base64url" }));
    const verified = verifier[header.alg.toLowerCase()](data, {
        key: secret,
        signature,
    });
    if (!verified) {
        throw new Error("The access token provided is malformed");
    }
    payload = JSON.parse(Crypto.decode(payload, { encoding: "base64url" }));
    if (payload.exp && moment(payload.exp).diff(moment()) < 0) {
        throw new Error("The access token provided is expired");
    }
    if (revokes.indexOf(payload.jti) !== -1) {
        throw new Error("The access token provided is revoked");
    }
    return verified;
}

module.exports = { encode, decode, sign, verify, signer, verifier, revokes };
