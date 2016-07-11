// =========================================================
// Import
// =========================================================
// Fastest way for testing plain JS modules

import Dummy from './Dummy';

describe('Dummy', () => {

	let dummy;

	beforeEach(() => {dummy = new Dummy()});

	it('must be stupid', () => {
		expect(dummy.sayHello()).toBe('Hello');
	});

});





// =========================================================
// Inject
// =========================================================
// Fastest way for testing ng modules (but without coverage)

// describe('Dummy', () => {
//
// 	let Dummy;
//
// 	beforeEach(window.module('app'));
//
// 	beforeEach(window.inject((_Dummy_) => {Dummy = _Dummy_}));
//
// 	it('must be stupid', () => {
// 		expect(Dummy.sayHello()).toBe('Hello');
// 	});
//
// });





// =========================================================
// Import + Inject
// =========================================================
// Longest way for testing ng modules with coverage

// import Dummy from './Dummy';
//
// describe('Dummy', () => {
//
// 	let Service;
//
// 	beforeEach(() => {
// 		angular
// 			.module('test', [])
// 			.service('Dummy', Dummy);
// 	});
//
// 	beforeEach(window.module('test'));
//
// 	beforeEach(inject((_Dummy_) => {
// 		Service = _Dummy_
// 	}));
//
// 	it('must be stupid', () => {
// 		expect(Service.sayHello()).toBe('Hello');
// 	});
//
// });
