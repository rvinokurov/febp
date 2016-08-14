import './app.styl';
import './app.pug';
import Dummy from './Dummy/Dummy';

angular
	.module('app', ['vendor'])
	.service('Dummy', Dummy);
