process.env.BABEL_ENV = 'test';

const {CONFIG, PATHS, utils} = require('./build');
const webpackConfig = require('./webpack.test');

const {KARMA_PORT} = CONFIG;
const {ROOT} = PATHS;

const cfg = {
	port: KARMA_PORT,
	basePath: ROOT,
	files: [
		'dist/vendor*.{js,css}',
		'dist/main*.{js,css}',
		utils.fixOSX('test/unit/index.js')
	],
	preprocessors: {
		'test/unit/index.js': ['webpack']
	},
	webpack: webpackConfig,
	webpackMiddleware: {
		noInfo: true
	},
	captureTimeout: 60000,
	colors: true,
	reporters: ['mocha', 'coverage'],
	frameworks: ['jasmine'],
	plugins: [
		'karma-jasmine',
		'karma-webpack',
		'karma-coverage',
		'karma-mocha-reporter'
	],
	coverageReporter: {
		reporters: [
			{type: 'lcov', dir: 'coverage/', subdir: '.'},
			{type: 'json', dir: 'coverage/', subdir: '.'},
			{type: 'text-summary'}
		]
	}
};

module.exports = cfg;
