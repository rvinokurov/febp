describe('Fake e2e test', () => {
	browser.get('/');
	it('must be ok', () => {
		expect(123).toEqual(123);
	});
});
