const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base');
const {PATHS} = require('./build');

const ExtractPlugin = require('extract-text-webpack-plugin');
const NoErrorsPlugin = webpack.NoErrorsPlugin;
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;
const DedupePlugin = webpack.optimize.DedupePlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const {SRC} = PATHS;

let cfg = {
	watch: false,
	cache: false,
	debug: false,
	bail: true,
	devtool: 'source-map',
	output: {
		filename: '[name]-[chunkhash].js'
	},
	module: {
		loaders: [{
			test: /\.styl$/,
			loader: ExtractPlugin.extract('css!postcss!stylus'),
			include: [SRC]
		}]
	},
	plugins: [
		new ExtractPlugin('[name]-[contenthash].css'),
		new NoErrorsPlugin(),
		new DedupePlugin(),
		new UglifyJsPlugin(),
		new LoaderOptionsPlugin({
			minimize: true,
			debug: false
		})
	]
};

module.exports = merge(base, cfg);
