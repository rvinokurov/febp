const webpack = require('webpack');
const {CONFIG, PATHS, utils} = require('./build');

const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const autoprefixer = require('autoprefixer');

const {PUBLIC_PATH, ASSETS_LIMIT} = CONFIG;
const {ROOT, SRC, DIST, PAGES} = PATHS;

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
	resolve: {
		extensions: ['', '.js', '.json'],
		alias: {
			assets: utils.src('assets')
		}
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'ng-annotate!babel!eslint',
			include: [SRC]
		}, {
			test: /\.jade$/,
			loader: 'jade?pretty=true',
			include: [PAGES]
		}, {
			test: /\.jade$/,
			loader: 'ng-cache?prefix=tpl/[dir]/[dir]!jade-html',
			include: [SRC],
			exclude: [PAGES]
		}, {
			test: /\.(svg|png|jpg|gif|eot|ttf|woff|woff2)$/,
			loader: `url?limit=${ASSETS_LIMIT}&name=[name]-[hash].[ext]`
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
