const webpack = require('webpack');
const {PATHS} = require('./build');

const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const autoprefixer = require('autoprefixer');

const {SRC, DIST, ROOT} = PATHS;
const PUBLIC = '/';

let cfg = {
	context: SRC,
	entry: {
		vendor: './vendor.js',
		main: './main.js'
	},
	output: {
		path: DIST,
		publicPath: PUBLIC
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel!eslint',
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
