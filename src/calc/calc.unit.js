import * as calc from './calc';

describe('Calculator', () => {

	it('must have "sum" action', () => {
		expect(calc.sum).to.be.ok;
	});

	it('must correct "sum"', () => {
		expect(calc.sum(1, 2)).to.equal(3);
	});

	it('must have "multi" action', () => {
		expect(calc.multi).to.be.ok;
	});

	it('must correct "multi"', () => {
		expect(calc.multi(2, 3)).to.equal(6);
		expect(calc.multi(0, 3)).to.equal(0);
	});

});
