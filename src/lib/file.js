const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

function afterRead(file, data) {
    if (/\b.gz\b/.test(file)) {
        data = zlib.gunzipSync(data);
    }
    data = data.toString();
    if (/\b.json\b/.test(file)) {
        data = JSON.parse(data);
    }
    return data;
}

function beforeWrite(file, data) {
    if (/\b.json\b/.test(file)) {
        if (/\b.min\b/.test(file)) {
            data = JSON.stringify(data);
        } else {
            data = JSON.stringify(data, null, 4);
        }
    }
    if (/\b.gz\b/.test(file)) {
        data = zlib.gzipSync(data);
    }
    return data;
}

function read(file, data) {
    try {
        data = fs.readFileSync(file, {});
        data = afterRead(file, data);
    } catch (error) {
        write(file, data);
    }
    return data;
}

function write(file, data) {
    const dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, { recursive: true });
    }
    data = beforeWrite(file, data);
    fs.writeFileSync(file, data);
}

function remove(file) {
    try {
        fs.unlinkSync(file);
    } catch (error) {}
}

async function readAsync(file, data) {
    try {
        data = await readFile(file, { encoding: "utf8" });
        data = afterRead(file, data);
    } catch (error) {
        await writeAsync(file, data);
    }
    return data;
}

async function writeAsync(file, data) {
    const dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, { recursive: true });
    }
    data = beforeWrite(file, data);
    await writeFile(file, data);
}

async function removeAsync(file) {
    try {
        await unlink(file);
    } catch (error) {}
}

module.exports = { read, write, remove, readAsync, writeAsync, removeAsync };
