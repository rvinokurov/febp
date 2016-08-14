describe('Dummy', () => {

	let srv;

	beforeEach(window.module('app'));
	beforeEach(window.inject(_Dummy_ => srv = _Dummy_));

	it('must be stupid', () => {
		expect(srv.sayHello()).toBe('Hello');
	});

});
