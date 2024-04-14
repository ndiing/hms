const smsPdu = require("node-sms-pdu");
const { SerialPort } = require("serialport");

function setParameter(pattern, data) {
    pattern = pattern.replace(/\<([^\<\>]+)\>/gm, ($, $1) => {
        return data[$1];
    });

    while (/\[([^\[\]]+)\]/.test(pattern)) {
        pattern = pattern.replace(/\[([^\[\]]+)\]/gm, ($, $1) => {
            if ($1.includes("undefined")) {
                return "";
            }
            return $1;
        });
    }
    return pattern;
}

function stringify(pattern, options = {}) {
    let { data = {}, join = {} } = options;
    let i = 0;
    const patterns = {};
    pattern = pattern.replace(/\{([^\{\}]+)\}/gm, ($, $1) => {
        const name = `$${++i}`;
        patterns[name] = $1;
        return `<${name}>`;
    });

    for (const name in patterns) {
        const pattern = patterns[name];
        const array = [];

        for (const data2 of data[name]) {
            array.push(setParameter(pattern, data2));
        }
        data[name] = array.join(join[name] ?? ",");
    }
    pattern = setParameter(pattern, data);
    return pattern;
}

function parse(output, options = {}) {
    let { pattern, match = {} } = options;
    pattern = pattern.replace(/[+()]/gm, "\\$&");

    while (/\[([^\[\]]+)\]/.test(pattern)) {
        pattern = pattern.replace(/\[([^\[\]]+)\]/gm, ($, $1) => {
            return `(${$1})?`;
        });
    }
    pattern = pattern.replace(/\<([^\<\>]+)\>/gm, ($, $1) => {
        const pattern = match[$1] ?? '[^,"]+';
        return `(?<${$1}>${pattern})`;
    });
    let i = 0;
    const patterns = {};
    pattern = pattern.replace(/\{([^\{\}]+)\}/gm, ($, $1) => {
        const name = `$${++i}`;
        patterns[name] = $1;
        return `(?<${name}>(${$1}){1,})`;
    });
    pattern = new RegExp(pattern);
    const matches = output.match(pattern);
    const data = matches?.groups;

    if (!data) {
        return null;
    }

    for (const name in patterns) {
        let pattern = new RegExp(patterns[name], "gm");
        const matches = data[name].matchAll(pattern);
        data[name] = Array.from(matches, (matches) => matches?.groups);
    }
    return data;
}

class Modem extends SerialPort {
    constructor(options = {}) {
        options = { autoOpen: false, baudRate: 115200, ...options };
        super(options);
        this.queue = (() => {
            let pending = Promise.resolve();
            const execute = async (callback) => {
                try {
                    await pending;
                } finally {
                    return callback();
                }
            };
            return (callback) => (pending = execute(callback));
        })();
        let output = "";
        this.on("data", (chunk) => {
            output += chunk;
            const stacks = [
                {
                    pattern: `\r\n+CMTI: <mem>,<index>\r\n`,
                    method: (response) => {
                        this.emit("smsincoming", response);
                    },
                },
                {
                    pattern: `\r\n+CMT: "?<oa>"?,[<alpha>],"?<scts>"?[,<tooa>,<fo>,<pid>,<dcs>,<sca>,<tosca>,<length>]\r\n<data>\r\n`,
                    method: (response) => {
                        this.emit("smsincoming", response);
                    },
                },
                {
                    pattern: `\r\n+CMT: [<alpha>],<length>\r\n<pdu>\r\n`,
                    method: (response) => {
                        if (response?.data?.pdu) {
                            const data = smsPdu.parse(response.data.pdu);
                            response.data = {
                                oa: data.origination,
                                scts: data.timestamp,
                                data: data.text,
                            };
                        }
                        this.emit("smsincoming", response);
                    },
                },
            ];
            let data;
            const stack = stacks.find((stack) => {
                data = parse(output, stack);
                return data;
            });

            if (stack) {
                stack.method({ output, data });
                output = "";
            }
        });
    }

    execute(command, options = {}) {
        options = { stacks: [], ...options };
        command = stringify(command, options);
        return this.queue(() => {
            return new Promise((resolve) => {
                let timeout = setTimeout(() => {
                    callback(`\r\n+CMS ERROR: Request timeout\r\n`);
                }, 1000 * 60);
                let output = "";
                const callback = (chunk) => {
                    output += chunk;
                    const stacks = [
                        ...options.stacks,
                        {
                            pattern: `\r\n<status>\r\n`,
                            match: { status: "OK" },
                        },
                        {
                            pattern: `\r\n<status>\r\n`,
                            match: { status: "ERROR" },
                        },
                        {
                            pattern: `\r\n+CME <status>: <err>\r\n`,
                            match: { status: "ERROR" },
                        },
                        {
                            pattern: `\r\n+CMS <status>: <err>\r\n`,
                            match: { status: "ERROR" },
                        },
                    ];
                    let data;
                    const stack = stacks.find((stack) => {
                        data = parse(output, stack);
                        return data;
                    });

                    if (stack) {
                        clearTimeout(timeout);
                        this.off("data", callback);
                        resolve({ command, output, data });
                    }
                };
                this.on("data", callback);
                this.write(command);
            });
        });
    }

    async getRequestInternationalMobileEquipmentIdentityIMEI(options = {}) {
        const response = await this.execute(`AT+CGSN\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n<IMEI>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async testErrorMessageFormat(options = {}) {
        const response = await this.execute(`AT+CMEE=?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CMEE: ({<n>,?})\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async checkErrorMessageFormat(options = {}) {
        const response = await this.execute(`AT+CMEE?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CMEE: <n>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async setErrorMessageFormat(options = {}) {
        const response = await this.execute(`AT+CMEE=<n>\r`, {
            data: options,
            stacks: [{ pattern: `\r\n<status>\r\n`, match: { status: "OK" } }],
        });
        return response;
    }

    async testSelectTECharacterSet(options = {}) {
        const response = await this.execute(`AT+CSCS=?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CSCS: ({"?<chset>"?,?})\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async checkSelectTECharacterSet(options = {}) {
        const response = await this.execute(`AT+CSCS?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CSCS: "?<chset>"?\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async setSelectTECharacterSet(options = {}) {
        const response = await this.execute(`AT+CSCS="<chset>"\r`, {
            data: options,
            stacks: [{ pattern: `\r\n<status>\r\n`, match: { status: "OK" } }],
        });
        return response;
    }

    async getRequestInternationalMobileSubscriberIdentityIMSI(options = {}) {
        const response = await this.execute(`AT+CIMI\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n<IMSI>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async getSignalQualityReport(options = {}) {
        const response = await this.execute(`AT+CSQ\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CSQ: <rssi>,<ber>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async getSubscriberNumber(options = {}) {
        const response = await this.execute(`AT+CNUM\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CNUM: "?[<alpha>]"?,"?<number>"?,<type>[,<type2>[,<type3>]]\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async testMessageFormat(options = {}) {
        const response = await this.execute(`AT+CMGF=?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CMGF: ({<mode>,?})\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async checkMessageFormat(options = {}) {
        const response = await this.execute(`AT+CMGF?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CMGF: <mode>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async setMessageFormat(options = {}) {
        const response = await this.execute(`AT+CMGF[=<mode>]\r`, {
            data: options,
            stacks: [{ pattern: `\r\n<status>\r\n`, match: { status: "OK" } }],
        });
        return response;
    }

    async setDeleteMessage(options = {}) {
        const response = await this.execute(`AT+CMGD=<index>[,<delflag>]\r`, {
            data: options,
            stacks: [{ pattern: `\r\n<status>\r\n`, match: { status: "OK" } }],
        });
        return response;
    }

    async setListMessage(options = {}) {
        const {
            data: { mode },
        } = await this.checkMessageFormat();

        if (mode === "0") {
            return this.setListMessagePDU(options);
        }
        const response = await this.execute(`AT+CMGL[="<stat>"]\r`, {
            data: options,
            stacks: [
                {
                    pattern: `{\r\n+CMGL: <index>,"?<stat>"?,"?<oa>"?,[<alpha>],"?<scts>"?[,<tooa>,<fo>,<pid>,<dcs>,<sca>,<tosca>,<length>]\r\n<data>\r\n}\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async setListMessagePDU(options = {}) {
        const response = await this.execute(`AT+CMGL[=<stat>]\r`, {
            data: options,
            stacks: [
                {
                    pattern: `{\r\n+CMGL: <index>,<stat>,[<alpha>],<length>\r\n<pdu>\r\n}\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });

        if (response?.data?.$1) {
            response.data.$1 = response.data.$1.map(($1) => {
                const data = smsPdu.parse($1.pdu);
                return {
                    index: $1.index,
                    stat: $1.stat,
                    oa: data.origination,
                    scts: data.timestamp,
                    data: data.text,
                };
            });
        }
        return response;
    }

    async setReadMessage(options = {}) {
        const response = await this.execute(`AT+CMGR=<index>\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CMGR: "?<stat>"?,"?<oa>"?,[<alpha>],"?<scts>"?[,<tooa>,<fo>,<pid>,<dcs>,<sca>,<tosca>,<length>]\r\n<data>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
                {
                    pattern: `\r\n+CMGR: <stat>,[<alpha>],<length>\r\n<pdu>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });

        if (response?.data?.pdu) {
            const data = smsPdu.parse(response.data.pdu);
            response.data = {
                stat: response.data.stat,
                oa: data.origination,
                scts: data.timestamp,
                data: data.text,
            };
        }
        return response;
    }

    async setSendMessage(options = {}) {
        const {
            data: { mode },
        } = await this.checkMessageFormat();

        if (mode === "0") {
            return this.setSendMessagePDU(options);
        }
        const response = await this.execute(
            `AT+CMGS="<da>"[,<toda>]\r<data>\x1A`,
            {
                data: options,
                stacks: [
                    {
                        pattern: `\r\n+CMGS: <mr>\r\n\r\n<status>\r\n`,
                        match: { status: "OK" },
                    },
                ],
            },
        );
        return response;
    }

    async setSendMessagePDU(options = {}) {
        let response;
        const pdu_list = smsPdu.generateSubmit(options.da, options.data);

        for (const pdu_item of pdu_list) {
            options.length = pdu_item.length;
            options.pdu = pdu_item.hex;
            response = await this.execute(`AT+CMGS=<length>\r<pdu>\x1A`, {
                data: options,
                stacks: [
                    {
                        pattern: `\r\n+CMGS: <mr>\r\n\r\n<status>\r\n`,
                        match: { status: "OK" },
                    },
                ],
            });
        }
        return response;
    }

    async testSMSEventReportingConfiguration(options = {}) {
        const response = await this.execute(`AT+CNMI=?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CNMI: ({<mode>,?}),({<mt>,?}),({<bm>,?}),({<ds>,?}),({<bfr>,?})\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async checkSMSEventReportingConfiguration(options = {}) {
        const response = await this.execute(`AT+CNMI?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CNMI: <mode>,<mt>,<bm>,<ds>,<bfr>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async setSMSEventReportingConfiguration(options = {}) {
        const response = await this.execute(
            `AT+CNMI[=<mode>[,<mt>[,<bm>[,<ds>[,<bfr>]]]]]\r`,
            {
                data: options,
                stacks: [
                    { pattern: `\r\n<status>\r\n`, match: { status: "OK" } },
                ],
            },
        );
        return response;
    }

    async testUnstructuredSupplementaryServiceData(options = {}) {
        const response = await this.execute(`AT+CUSD=?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CUSD: ({<mode>,?})\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async checkUnstructuredSupplementaryServiceData(options = {}) {
        const response = await this.execute(`AT+CUSD?\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CUSD: <mode>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }

    async setUnstructuredSupplementaryServiceData(options = {}) {
        const response = await this.execute(
            `AT+CUSD[=<mode>[,"<reqstr>"[,<dcs>]]]\r`,
            {
                data: options,
                stacks: [
                    {
                        pattern: `\r\n+CUSD: <mode>[,"?<rspstr>"?[,<dcs>]]\r\n\r\n<status>\r\n`,
                        match: { status: "OK", rspstr: "[\\s\\S]+?" },
                    },
                ],
            },
        );
        return response;
    }

    async getBatteryCharge(options = {}) {
        const response = await this.execute(`AT+CBC\r`, {
            data: options,
            stacks: [
                {
                    pattern: `\r\n+CBC: <bcs>,<bcl>,<voltage>\r\n\r\n<status>\r\n`,
                    match: { status: "OK" },
                },
            ],
        });
        return response;
    }
}

module.exports = Modem;
