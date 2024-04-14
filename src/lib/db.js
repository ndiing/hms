const crypto = require("crypto");

class DB {
    docs = [];

    constructor(docs = []) {
        this.docs = docs;
    }

    post(doc = {}) {
        if (!doc._id) {
            throw new Error("Diperlukan _id");
        }
        const index = this.docs.findIndex((oldDoc) => oldDoc._id === doc._id);

        if (index !== -1) {
            throw new Error("Duplikat _id");
        }
        this.docs.push(doc);
        return { _id: doc._id, posted: true };
    }

    get(_id) {
        if (!_id) {
            throw new Error("Diperlukan _id");
        }
        return this.docs.find((doc) => doc._id === _id);
    }

    getAll(query = {}) {
        return this.docs;
    }

    patch(_id, doc = {}) {
        if (!_id) {
            throw new Error("Diperlukan _id");
        }
        const index = this.docs.findIndex((doc) => doc._id === _id);

        if (index === -1) {
            throw new Error("Dokumen tidak ada");
        }
        const oldDoc = this.docs[index];

        for (const name in doc) {
            const value = doc[name];
            oldDoc[name] = value;
        }
        this.docs.splice(index, 1, oldDoc);
        return { _id, patched: true };
    }

    put(_id, doc = {}) {
        if (!_id) {
            throw new Error("Diperlukan _id");
        }
        const index = this.docs.findIndex((doc) => doc._id === _id);

        if (index === -1) {
            doc._id = _id;
            this.post(doc);
        } else {
            this.patch(_id, doc);
        }
        return { _id, saved: true };
    }

    delete(_id) {
        if (!_id) {
            throw new Error("Diperlukan _id");
        }
        const index = this.docs.findIndex((doc) => doc._id === _id);

        if (index === -1) {
            throw new Error("Dokumen tidak ada");
        }
        this.docs.splice(index, 1);
        return { _id, deleted: true };
    }
}

module.exports = DB;
