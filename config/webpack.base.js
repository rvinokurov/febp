const {PATHS, utils} = require('./build');

const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

const {SRC, DIST} = PATHS;
const PUBLIC = '/';

let cfg = {
	context: SRC,
	entry: {
		'vendor': './vendor.js',
		'main': './main.js'
	},
	output: {
		path: DIST,
		publicPath: PUBLIC
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'ng-annotate!babel!eslint',
			include: [SRC]
		}, {
			test: /\.jade$/,
			loader: 'jade',
			include: [SRC]
		}]
	},
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	],
	plugins: [
		new CleanPlugin([DIST], {
			root: utils.root()
		}),
		new HtmlPlugin({
			filename: 'index.html',
			template: 'pages/index.jade'
		})
	]
};

module.exports = cfg;
