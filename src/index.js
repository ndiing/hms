// const { read, write } = require("./lib/file");
// let errorLog = read("./error-log.txt", "");
function handleLog(error) {
    // errorLog += `${new Date().toISOString()}\r\n`;
    // errorLog += `${JSON.stringify(error,Object.getOwnPropertyNames(error))}\r\n`;
    // errorLog += `\r\n`;
    // write("./error-log.txt", errorLog);
    console.log(error)
}
process.on("uncaughtException", (error, origin) => handleLog(error));
process.on("unhandledRejection", (reason, promise) => handleLog(reason));

const config = require("./lib/config");
const http = require("http");
const https = require("https");
const { WebSocketServer } = require("ws");
const moment = require("moment");
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const { init, message, compression, cookie, auth, missing, error } = require("./lib/middleware");
const { store } = require("./api/auth/controller");

try {
    require("./lib");
    require("./dev");
} catch (error) {
    console.log(error);
}

const app = express();
// app.use(cors())
// app.use(helmet())
app.use(init(), message(), compression(), cookie(), auth(store.securities));
app.use("/api", require("./api"));
app.use(missing(), error());

const httpServer = http.createServer(app);
const httpsServer = https.createServer(config.https.options, app);

//
// SOCKET START
//
const wss = new WebSocketServer({ noServer: true });

wss.on("connection", function connection(ws, request) {
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        ws.send(data.toString());
    });
});

function upgrade(request, socket, head) {
    socket.on("error", console.error);
    function done(ws) {
        wss.emit("connection", ws, request);
    }
    wss.handleUpgrade(request, socket, head, done);
}

httpServer.on("upgrade", upgrade);
httpsServer.on("upgrade", upgrade);
//
// SOCKET END
//

httpServer.listen(config.http.port, "0.0.0.0", () => {
    console.log(httpServer.address());
});
httpsServer.listen(config.https.port, "0.0.0.0", () => {
    console.log(httpsServer.address());
});
