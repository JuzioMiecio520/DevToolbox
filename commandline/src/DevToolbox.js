const argv = process.argv;
const args = process.argv.slice(2);
const DevToolbox = require("./lib/index.js");

new DevToolbox(argv, args).handle();