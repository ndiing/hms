const Service = require("./service.js");
const Client = require("./client.js");
const Model = require("./model.js");
const Helper = require("./helper.js");
const Store = require("../../lib/store.js");

const store = new Store("./data/example/config.json", {});

class Controller {
    static async init(req, res, next) {
        try {
            next();
        } catch (error) {
            next(error);
        }
    }

    static async post(req, res, next) {
        try {
            const result = store.db.post(req.body);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async get(req, res, next) {
        try {
            const result = store.db.getAll();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async patch(req, res, next) {
        try {
            const result = store.db.patch(req.params._id, req.body);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const result = store.db.delete(req.params._id);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
