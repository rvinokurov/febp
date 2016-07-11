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
	reporters: ['mocha', 'coverage', 'html'],
	frameworks: ['jasmine'],
	plugins: [
		'karma-jasmine',
		'karma-webpack',
		'karma-coverage',
		'karma-mocha-reporter',
		'karma-html-reporter'
	],
	htmlReporter: {
		outputDir: 'reports/karma-html',
		reportName: 'report'
	},
	coverageReporter: {
		reporters: [
			{type: 'lcov', dir: 'reports/coverage/', subdir: '.'},
			{type: 'json', dir: 'reports/coverage/', subdir: '.'},
			{type: 'text-summary'}
		]
	}
};

module.exports = cfg;
