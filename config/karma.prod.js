const baseConfig = require('./karma.base');

const cfg = Object.assign({}, baseConfig, {
	browsers: ['Chrome', 'Firefox'],
	singleRun: true,
	autoWatch: false
});

cfg.plugins.push('karma-chrome-launcher');
cfg.plugins.push('karma-firefox-launcher');

module.exports = config => config.set(cfg);
