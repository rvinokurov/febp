const base = require('./karma.base');

const cfg = Object.assign({}, base, {
	browsers: ['Chrome'],
	autoWatch: true,
	singleRun: false
});

cfg.plugins.push('karma-chrome-launcher');

module.exports = config => config.set(cfg);
