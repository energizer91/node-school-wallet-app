const log4js = require('log4js');

log4js.configure({
	appenders: {
		out: {type: 'stdout'},
		app: {
			type: 'file',
			filename: 'app.log'
		}
	},
	categories: {
		default: {
			appenders: ['out', 'app'],
			level: 'debug'
		}
	}
});

module.exports = (category) => log4js.getLogger(category);
