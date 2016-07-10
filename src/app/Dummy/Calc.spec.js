// =========================================================
// Import
// =========================================================

import Calc from './Calc';

describe('Calc', () => {

	let calc;

	beforeEach(() => {calc = new Calc()});

	it('must correct sum', () => {
		expect(calc.sum(1,2)).toBe(3);
	});

});





// =========================================================
// Inject
// =========================================================

// describe('Calc', () => {
//
// 	let Calc;
//
// 	beforeEach(window.module('app'));
//
// 	beforeEach(window.inject((_Calc_) => {Calc = _Calc_}));
//
// 	it('must correct sum', () => {
// 		expect(Calc.sum(1,2)).toBe(3);
// 	});
//
// });





// =========================================================
// Import + Inject
// =========================================================

// import Calc from './Calc';
//
// describe('Calc', () => {
//
// 	let Service;
//
// 	beforeEach(() => {
// 		angular
// 			.module('test', [])
// 			.service('Calc', Calc);
// 	});
//
// 	beforeEach(window.module('test'));
//
// 	beforeEach(inject((_Calc_) => {
// 		Service = _Calc_
// 	}));
//
// 	it('must correct sum', () => {
// 		expect(Service.sum(5,2)).toBe(7);
// 	});
//
// });
