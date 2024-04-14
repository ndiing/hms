const fs = require("fs");

function replacePhone(number, start = "", end = "") {
    number = number.match(/^\+?0?([\d\(\)]+)/)[1];
    return start + number.replace(/[^\d]/g, "") + end;
}

function isEmpty(value) {
    return value === null || value === undefined || value === "";
}

function queue() {
    let pending = Promise.resolve();
    let execute = async (callback) => {
        try {
            await pending;
        } finally {
            return callback();
        }
    };
    return (callback) => (pending = execute(callback));
}

function chromePath() {
    const dirs = [process.env["LOCALAPPDATA"], process.env["ProgramFiles"], process.env["ProgramFiles(x86)"]];
    const files = ["/Google/Chrome/Application/chrome.exe", "/Google/Chrome Beta/Application/chrome.exe", "/Google/Chrome SxS/Application/chrome.exe", "/Chromium/Application/chrome.exe"];

    let executablePath = null;
    for (const dir of dirs) {
        for (const file of files) {
            try {
                fs.accessSync(dir + file);
                executablePath = dir + file;
                break;
            } catch (error) {}
        }
        if (executablePath) {
            break;
        }
    }
    return executablePath;
}

// Flatten nested object or array
function flattenObject(obj, prefix = "") {
    return Object.keys(obj).reduce((acc, key) => {
        const pre = prefix.length ? prefix + "." : "";
        if (typeof obj[key] === "object" && obj[key] !== null) {
            acc = { ...acc, ...flattenObject(obj[key], pre + key) };
        } else {
            acc[pre + key] = obj[key];
        }
        return acc;
    }, {});
}
// Unflatten flattened object
function unflattenObject(obj) {
    const result = {};
    for (const key in obj) {
        const keys = key.split(".");
        keys.reduce((acc, cur, index) => {
            if (index === keys.length - 1) {
                acc[cur] = obj[key];
            } else {
                acc[cur] = acc[cur] || (isNaN(keys[index + 1]) ? {} : []);
            }
            return acc[cur];
        }, result);
    }
    return result;
}

// // Test data
// const data = {
//     a: 'b',
//     c: { d: 'e', f: 'h' },
//     h: [
//         { i: 'j' },
//         { i: 'k' },
//         { i: 'l' },
//     ]
// };

// // Test flattening
// const flattenedData = flattenObject(data);
// console.log('Flattened Object:');
// console.log(flattenedData);

// // Test unflattening
// const unflattenedData = unflattenObject(flattenedData);
// console.log('\nUnflattened Object:');
// console.log(unflattenedData);

module.exports = {
    replacePhone,
    isEmpty,
    queue,
    chromePath,
    flattenObject,
    unflattenObject,
};
