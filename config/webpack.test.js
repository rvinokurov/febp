const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

const cfg = {
	entry: {},
	plugins: [],
	debug: false
};

module.exports = merge(baseConfig, cfg);
