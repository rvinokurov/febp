const {CONFIG, utils} = require('./build');

const {WD_HUB_URL, WD_HUB_BASE} = CONFIG;
const E2E_TEST_BLOB = utils.root('test/e2e/{index,**/*}.js');
const E2E_SRC_BLOB = utils.root('src/**/*.e2e.js');

exports.config = {
	seleniumAddress: WD_HUB_URL,
	baseUrl: WD_HUB_BASE,
	specs: [
		E2E_TEST_BLOB,
		E2E_SRC_BLOB
	],
	debug: false,
	framework: 'jasmine',
	maxSessions: 1,
	capabilities: {
		browserName: 'chrome'
	}
};
