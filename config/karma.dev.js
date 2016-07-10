const baseConfig = require('./karma.base');

const cfg = Object.assign({}, baseConfig, {
	browsers: ['Chrome'],
	singleRun: false,
	autoWatch: true,
	autoWatchBatchDelay: 250
});

cfg.plugins.push('karma-chrome-launcher');

module.exports = config => config.set(cfg);
