// const puppeteer = require("puppeteer-core");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { chromePath } = require("../lib/helper");
const { getProxyServer } = require("./reg");

puppeteer.use(StealthPlugin());

const launch = puppeteer.launch.bind(puppeteer);
puppeteer.launch = function (userOptions = {}) {
    userOptions = {
        userDataDir: `${process.cwd()}/data/chrome/default`,
        headless: false,
        devtools: true,
        proxyServer: getProxyServer()?.[0],
        args: [],
        ...userOptions,
    };

    const options = {
        executablePath: chromePath(),
        defaultViewport: null,
        ignoreDefaultArgs: true,
        ...userOptions,
        args: [
            //
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--disable-web-security",
            "--disable-features=IsolateOrigins",
            "--disable-site-isolation-trials",
            `--user-data-dir=${userOptions.userDataDir}`,
            "--no-first-run",
            "about:blank",
            ...((userOptions.headless && ["--headless"]) || []),
            ...((userOptions.devtools && ["--auto-open-devtools-for-tabs"]) || []),
            ...((userOptions.proxyServer && [`--proxy-server=${userOptions.proxyServer}`]) || []),
            ...userOptions.args,
        ],
    };


    return launch(options);
};

async function run() {
    const browser = await puppeteer.launch({
        headless: true,
        devtools: false,
        userDataDir: process.cwd() + "/data/chrome/default",
    });
    const [page] = await browser.pages();

    // setDefaultNavigationTimeout
    await page.setDefaultNavigationTimeout(0);

    // setUserAgent
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36");

    // dialog
    page.on("dialog", async (dialog) => {
        const message = await dialog.message();
        await dialog.dismiss();
        page.emit("error", message);
    });

    // setRequestInterception
    page.on("request", async (request) => {
        if (request.isInterceptResolutionHandled()) {
            return;
        }
        request.continue();
    });
    page.on("response", (response) => {});
    await page.setRequestInterception(true);

    try {
        const response = await Promise.race([
            new Promise(async (resolve, reject) => {
                try {
                    // for (const name in this.store.cookieStore) {
                    //     const cookie = this.store.cookieStore[name];
                    //     await page.setCookie(cookie);
                    // }

                    await page.goto("https://example.com/");

                    await page.evaluate(() => {
                        setTimeout(() => {
                            alert("welcome to my live");
                        }, 1000);
                    });

                    const response = await page.evaluate(() => {
                        return [document.querySelector("body > div > h1").textContent, document.querySelector("body > div > p:nth-child(2)").textContent, document.querySelector("body > div > p:nth-child(3)").textContent];
                    });

                    // for (const cookie of await page.cookies()) {
                    //     this.store.cookieStore.set(cookie);
                    // }

                    await new Promise((resolve) => setTimeout(resolve, 1000 * 5));

                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            }),
            new Promise((resolve, reject) => {
                page.on("error", reject);
            }),
        ]);

        await browser.close();
        return response;
    } catch (error) {
        await browser.close();
        throw error;
    }
}

// run()
// .then(console.log)
// .catch(console.log);

module.exports = puppeteer;
