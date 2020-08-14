const Markdown = require("./Markdown.js");
const chalk = require("chalk");
const functions = require("./functions.js");
const l = function(type, string, color) { functions.log(type, string, color) };

class DevToolbox {
	constructor(argv, args) {
		this.argv = argv;
		this.args = args;
	}
	
	handle() {
		if(this.args[0] == "markdown") {
			if(this.args[1] == "convert") {
				if(this.args[2] == "html") {
					l("info", "Starting conversion, please wait...");
					let html = new Markdown().convert("html", this.args.slice(3));
					l("success", "Conversion done!");
					l("nl");
					l("info", "Here is your encoded string:");
					l("nl");
					console.log(html);
				} else if(this.args[2] == "md" || this.args[2] == "markdown") {
					l("error", "This feature is still in development and cannot be used yet!");
					/*console.log(chalk.green("Starting conversion, please wait..."));
					let md = new Markdown().convert("md", this.args.slice(3));
					console.log(chalk.green("Conversion done!"));
					console.log();
					console.log(chalk.blue("Here is your encoded string:"));
					console.log();
					console.log(md);*/
				}
			}
		} else if(this.args[0] == "DEV-TEST") {
			l("error", "Test");
			l("info", "Test");
			l("waring", "Test");
			l("success", "Test");
		}
	}
}

module.exports = DevToolbox;