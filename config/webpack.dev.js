const merge = require('webpack-merge');
const base = require('./webpack.base');
const {PATHS} = require('./build');

const {SRC} = PATHS;

let cfg = {
	watch: true,
	cache: true,
	debug: true,
	devtool: 'inline-source-map',
	output: {
		pathinfo: true,
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.styl$/,
			loader: 'style!css!postcss!stylus',
			include: [SRC]
		}]
	}
};

module.exports = merge(base, cfg);
