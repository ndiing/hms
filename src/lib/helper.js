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

function findMissingItems(arr1, arr2) {
    const missingItems = [];

    // Iterate through the first array
    for (const item of arr1) {
        // Check if the item is present in the second array
        if (!arr2.includes(item)) {
            // If not present, add it to the missingItems array
            missingItems.push(item);
        }
    }

    return missingItems;
}

// // Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [2, 3, 5, 6];

// const missingItems = findMissingItems(array1, array2);
// console.log("Missing items from array1:", missingItems); // Output: [1, 4]
function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        } else {
            seen[arr[i]] = true;
        }
    }

    return duplicates;
}

// let myArray = [1, 2, 3, 4, 5, 2, 7, 8, 3, 4];
// let duplicates = findDuplicates(myArray);
// console.log(duplicates); // Output: [2, 3, 4]


module.exports = {
    replacePhone,
    isEmpty,
    queue,
    chromePath,
    flattenObject,
    unflattenObject,
    findMissingItems,
    findDuplicates,
};
