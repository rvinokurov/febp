const webpack = require('webpack');
const {CONFIG, PATHS} = require('./build');

const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const autoprefixer = require('autoprefixer');

const {PUBLIC_PATH} = CONFIG;
const {SRC, DIST, ROOT} = PATHS;

const cfg = {
	context: SRC,
	entry: {
		vendor: './vendor.js',
		main: './main.js'
	},
	output: {
		path: DIST,
		publicPath: PUBLIC_PATH
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
			root: ROOT
		}),
		new HtmlPlugin({
			filename: 'index.html',
			template: 'pages/index.jade'
		}),
		new ChunkPlugin({
			name: 'vendor'
		})
	]
};

module.exports = cfg;
