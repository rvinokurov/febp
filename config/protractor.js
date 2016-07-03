const {CONFIG, utils} = require('./build');

const {WD_HUB_URL, WD_HUB_BASE} = CONFIG;

const cfg = {
	specs: [
		utils.root('test/e2e/index.js'),
		utils.root('test/e2e/**/*.js'),
		utils.root('src/**/*.e2e.js')
	],
	baseUrl: WD_HUB_BASE,
	seleniumAddress: WD_HUB_URL,
	debug: false,
	framework: 'jasmine',
	maxSessions: 1,
	capabilities: {
		browserName: 'chrome'
	}
};

exports.config = cfg;
