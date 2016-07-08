process.env.BABEL_ENV = 'test';

const {CONFIG, PATHS, utils} = require('./build');
const webpackConfig = require('./webpack.test');

const {KARMA_PORT} = CONFIG;
const {ROOT} = PATHS;

const cfg = {
	files: [
		'dist/vendor*.{js,css}',
		'dist/main*.{js,css}',
		utils.fixOSX('test/unit/index.js'),
		utils.fixOSX('test/unit/**/*.js'),
		utils.fixOSX('src/**/*.unit.js'),
		utils.fixOSX('src/**/*.spec.js')
	],
	preprocessors: {
		'{src,test}/**/*': ['webpack']
	},
	webpack: webpackConfig,
	webpackMiddleware: {
		noInfo: true
	},
	port: KARMA_PORT,
	basePath: ROOT,
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
