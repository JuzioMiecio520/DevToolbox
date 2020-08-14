class Markdown {
	constructor() {}
	
	convert(convertTo, string) {
		if(convertTo == "html") {
			let showdown  = require('showdown');
			let converter = new showdown.Converter();
			let html      = converter.makeHtml(string.toString());
			return html;
		} else if(convertTo == "md") {
			let showdown  = require('showdown');
			let converter = new showdown.Converter();
			let md        = converter.makeMarkdown(string.toString());
			return md;
		}
	}
}

module.exports = Markdown;