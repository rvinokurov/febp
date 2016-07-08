const baseConfig = require('./karma.base');

const cfg = Object.assign({}, baseConfig, {
	browsers: ['Chrome'],
	autoWatch: true,
	singleRun: false
});

cfg.plugins.push('karma-chrome-launcher');

module.exports = config => config.set(cfg);
