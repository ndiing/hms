const EventEmitter = require("events");

class Client extends EventEmitter {
    constructor(options = {}) {
        super();
        this.options = options;
        this.init();
    }

    init() {}

    start() {}

    stop() {}

    send() {}
}

module.exports = Client;
