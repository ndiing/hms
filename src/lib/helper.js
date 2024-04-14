const fs=require('fs');

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

function chromePath(){

    const dirs=[
        process.env['LOCALAPPDATA'],
        process.env['ProgramFiles'],
        process.env['ProgramFiles(x86)'],
    ]
    const files=[
        '/Google/Chrome/Application/chrome.exe',
        '/Google/Chrome Beta/Application/chrome.exe',
        '/Google/Chrome SxS/Application/chrome.exe',
        '/Chromium/Application/chrome.exe',
    ]
    
    let executablePath=null
    for(const dir of dirs){
        for(const file of files){
            try {
                fs.accessSync(dir+file)
                executablePath=dir+file
                break
            } catch (error) {
                
            }
        }
        if(executablePath){
            break
        }
    }
    return (executablePath)
    
}

module.exports = { replacePhone, isEmpty, queue,chromePath };
