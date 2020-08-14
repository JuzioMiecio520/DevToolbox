const chalk = require("chalk");

function log(type, string, color, custom = {color: "white", background: "bgBlue", text: "Test!"}) {
	if(type == "error") {
		if(color == null || color == undefined) {
			console.log(chalk.white.bgRed.bold("ERROR!") + "   " + string);
		} else {
			eval(`console.log(chalk.white.bgRed.bold("ERROR!") + "   " + chalk.${color}(string));`);
		}
	} else if(type == "info") {
		if(color == null || color == undefined) {
			console.log(chalk.white.bgBlue.bold("INFO!") + "    " + string);
		} else {
			eval(`console.log(chalk.white.bgBlue.bold("INFO!") + "    " + chalk.${color}(string));`);
		}
	} else if(type == "warning") {
		if(color == null || color == undefined) {
			console.log(chalk.white.bgYellow.bold("WARNING!") + "  " + string);
		} else {
			eval(`console.log(chalk.white.bgYellow.bold("WARNING!") + "  " + chalk.${color}(string));`);
		}
	} else if(type == "success") {
		if(color == null || color == undefined) {
			console.log(chalk.white.bgGreen.bold("SUCCESS!") + " " + string);
		} else {
			eval(`console.log(chalk.white.bgGreen.bold("WARNING!") + " " + chalk.${color}(string));`);
		}
	} else if(type == "custom") {
		eval(`console.log(chalk.${custom.color}.${custom.background}.bold("${custom.text}") + " " + chalk.${color}(string));`);
	} else if(type == "nl") {
		console.log();
	}
}

module.exports = {
	log: log
}