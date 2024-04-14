const fetch = require("../../lib/fetch");
const Store = require("../../lib/store");

class Service {
    constructor(options = {}) {
        const { _id = "default" } = options;
        this.store = new Store(`./data/example/${_id}.json`);
    }

    fetch(resource, options = {}) {
        return fetch(resource, {
            redirect: "manual",
            store: this.store,
            ...options,
            headers: {
                ...options.headers,
            },
        });
    }

    async get(req = {}) {
        try {
            const {} = req;
            const response = await this.fetch("http://example.com", {
                method: "GET",
            });
            const text = await response.text();
            return text;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Service;
