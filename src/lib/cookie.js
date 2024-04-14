class CookieStore {
    get cookie() {
        const cookie = [];

        for (const name of Object.getOwnPropertyNames(this)) {
            const value = this[name].value;
            cookie.push([name, value].join("="));
        }
        return cookie.join("; ");
    }

    set cookie(value) {
        if (!Array.isArray(value)) {
            value = [value];
        }

        for (const string of value) {
            for (const [, name, value] of string.matchAll(
                /([^= ]+)=([^;]+)/g,
            )) {
                if (
                    /(Domain|Expires|HttpOnly|Max-Age|Partitioned|Path|Secure|SameSite)/i.test(
                        name,
                    )
                ) {
                    continue;
                }

                if (value) {
                    this.set(name, value);
                } else {
                    this.delete(name);
                }
            }
        }
    }

    constructor(init) {
        if (typeof init === "object") {
            for (const name in init) {
                const options = init[name];
                this.set(options);
            }
        }
    }

    delete(name) {
        const options = typeof name === "object" ? name : { name };
        delete this[options.name];
    }

    get(name) {
        const options = typeof name === "object" ? name : { name };
        return this[options.name];
    }

    getAll() {
        return [].concat(this[options.name]).filter(Boolean);
    }

    set(name, value) {
        const options = typeof name === "object" ? name : { name, value };
        this[options.name] = options;
    }
}

module.exports = CookieStore;
