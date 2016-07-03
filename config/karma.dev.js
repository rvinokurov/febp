const base = require('./karma.base');

module.exports = config => {

	const patch = Object.assign({}, base, {
		browsers: ['Chrome'],
		autoWatch: true,
		singleRun: false
	});

	patch.plugins.push('karma-chrome-launcher');

	config.set(patch);

};
