describe('Fake e2e test', () => {
	browser.get('/');
	it('must be ok', () => {
		expect(browser.getTitle()).toEqual('App');
	});
});
