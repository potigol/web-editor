const env = process.argv.slice(2)[0];
const path = require("path");
require(path.join(__dirname, env));