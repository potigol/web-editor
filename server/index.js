const env = process.env.NODE_ENV || "development";
const bundlers = {
    production: "./prod",
    development: "./dev"
}

require(bundlers[env]);