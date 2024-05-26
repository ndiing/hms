const nodeFetch = require("node-fetch");
const { HttpProxyAgent } = require("http-proxy-agent");
const { HttpsProxyAgent } = require("https-proxy-agent");

global.fetch=function(url,init){
    let agent
    if(process.env.PROXY){
        const Agent = url.includes("https:") ? HttpsProxyAgent : HttpProxyAgent;
        agent = new Agent(process.env.PROXY);
    }
    return nodeFetch(url,{
        ...(process.env.PROXY&&{agent}),
        ...init
    })
}