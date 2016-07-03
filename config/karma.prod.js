const base = require('./karma.base');

module.exports = config => {

	const patch = Object.assign({}, base, {
		browsers: ['Chrome', 'Firefox'],
		autoWatch: false,
		singleRun: true
	});

	patch.plugins.push('karma-chrome-launcher');
	patch.plugins.push('karma-firefox-launcher');

	config.set(patch);

};
