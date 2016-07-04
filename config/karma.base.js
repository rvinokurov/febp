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
		utils.fixOSX('src/**/*.{unit,spec}.js')
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
	reporters: ['mocha'],
	frameworks: ['mocha', 'chai'],
	plugins: [
		'karma-chai',
		'karma-mocha',
		'karma-webpack',
		'karma-mocha-reporter'
	]

};

module.exports = cfg;
