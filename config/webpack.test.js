const merge = require('webpack-merge');
const base = require('./webpack.base');

const cfg = {
	entry: {},
	plugins: [],
	debug: false
};

module.exports = merge(base, cfg);
