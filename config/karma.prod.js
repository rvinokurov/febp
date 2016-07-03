const base = require('./karma.base');

module.exports = config => {

	const patch = Object.assign({}, base, {
		browsers: ['Firefox'],
		autoWatch: false,
		singleRun: true
	});

	patch.plugins.push('karma-firefox-launcher');

	config.set(patch);

};
