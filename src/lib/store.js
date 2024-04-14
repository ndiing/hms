const CookieStore = require("./cookie");
const DB = require("./db");
const { read, write, writeAsync } = require("./file");

class Store {
    constructor(file, data = {}) {
        this.file = file;
        this.data = read(this.file, data);
        this.data.cookieStore = new CookieStore(this.data.cookieStore);
        this.data.db = new DB(this.data.db?.docs);
        return new Proxy(this.data, this);
    }

    get(target, property, value) {
        if (
            ["[object Object]", "[object Array]"].includes(
                toString.call(target[property]),
            )
        ) {
            return new Proxy(target[property], this);
        }
        return target[property];
    }

    set(target, property, value) {
        const oldValue = target[property];

        if (oldValue === value) {
            return true;
        }
        Reflect.set(target, property, value);
        write(this.file, this.data);
        return true;
    }

    deleteProperty(target, property) {
        const oldValue = target[property];

        if (oldValue === undefined) {
            return true;
        }
        Reflect.deleteProperty(target, property);
        write(this.file, this.data);
        return true;
    }
}

module.exports = Store;
