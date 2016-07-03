const {CONFIG, PATHS} = require('./build');
const webpackConfig = require('./webpack.base');

delete webpackConfig.entry;
webpackConfig.plugins = [];

const {KARMA_PORT} = CONFIG;
const {ROOT} = PATHS;

const UNIT_TEST_BLOB = 'test/unit/{index,**/*}.js';
const UNIT_SRC_BLOB = 'src/**/*.unit.js';

module.exports = {
	files: [
		{pattern: 'dist/vendor*.js'
	}, {
		pattern: 'dist/main*.js'
	}, {
		pattern: UNIT_TEST_BLOB,
		watched: false,
		included: true,
		served: true
	}, {
		pattern: UNIT_SRC_BLOB,
		watched: false,
		included: true,
		served: true
	}],
	preprocessors: {
		[UNIT_TEST_BLOB]: ['webpack'],
		[UNIT_SRC_BLOB]: ['webpack']
	},
	webpack: webpackConfig,
	webpackMiddleware: {noInfo: true},
	port: KARMA_PORT,
	basePath: ROOT,
	colors: true,
	reporters: ['mocha'],
	frameworks: ['mocha', 'chai'],
	plugins: [
		'karma-chai',
		'karma-mocha',
		'karma-webpack',
		'karma-jasmine',
		'karma-mocha-reporter'
	]

};
