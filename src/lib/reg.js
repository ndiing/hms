const { execSync } = require("child_process");

function getProxyServer() {
    const array = [];
    try {
        const command =
            'reg query "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /s /f "ProxyServer"';
        const output = execSync(command, { encoding: "utf-8" });
        for (const [, protocol, host] of output.matchAll(
            /(http|https|ftp)=([\d.:]+)/g,
        )) {
            array.push([protocol, host].join("://"));
        }
    } catch (error) {}
    return array;
}
module.exports = { getProxyServer };
