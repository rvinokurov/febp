const path = require('path');

const ROOT = process.cwd();

exports.CONFIG = {
	APP_PORT: 9000,
	DEV_PORT: 9001,
	KARMA_PORT: 9876,
	WD_HUB_URL: 'http://localhost:4444/wd/hub',
	WD_HUB_BASE: 'http://localhost:9000',
	PUBLIC_PATH: '/',
	ASSETS_LIMIT: 1024 * 10 // 10KB
};

exports.PATHS = {
	ROOT,
	SRC: root('src'),
	PAGES: root('src/pages'),
	TEST: root('test'),
	DIST: root('dist')
};

exports.utils = {
	root,
	src,
	fixOSX
};

function root (p = '') {
	return path.join(ROOT, p);
}

function src (p = '') {
	return path.join(exports.PATHS.SRC, p);
}

function fixOSX (blob) {
	return {
		pattern: blob,
		watched: false,
		included: true,
		served: true
	};
}

