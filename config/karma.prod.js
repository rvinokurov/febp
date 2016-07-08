const baseConfig = require('./karma.base');

const cfg = Object.assign({}, baseConfig, {
	browsers: ['Firefox'],
	autoWatch: false,
	singleRun: true
});

cfg.plugins.push('karma-firefox-launcher');

module.exports = config => config.set(cfg);
