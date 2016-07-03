const path = require('path');

const ROOT = process.cwd();

exports.CONFIG = {
	APP_PORT: 9000,
	DEV_PORT: 9001,
	KARMA_PORT: 9876,
	WD_HUB_URL: 'http://localhost:4444/wd/hub',
	WD_HUB_BASE: 'http://localhost:9000'
};

exports.PATHS = {
	ROOT,
	SRC: root('src'),
	DIST: root('dist')
};

exports.utils = {
	root
};

function root (p = '') {
	return path.join(ROOT, p);
}

