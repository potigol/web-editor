const ParcelProxyServer = require("parcel-proxy-server");

const port = 8080;
const server = new ParcelProxyServer({
    entryPoint: "./src/index.html",
    parcelOptions: {
        https: false
    },
    // proxies: {
    //     "/api": {
    //          target: ""
    //     }
    // }
});

server.bundler.on("buildEnd", () => {
    console.log("Build completed!");
});

server.listen(port, () => {
    console.log("Parcel proxy server has started");
});