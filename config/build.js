const path = require('path');

const ROOT = process.cwd();

exports.CONFIG = {
	APP_PORT: 9000,
	DEV_PORT: 9001
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

