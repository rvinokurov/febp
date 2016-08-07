import './app.styl';
import './app.pug';

angular
	.module('app', ['vendor']);

console.log(process.env.API_ENDPOINT);
console.log(process.env.APP_ENVIRONMENT);
