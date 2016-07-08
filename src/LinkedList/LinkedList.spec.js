import LinkedList from './LinkedList';

describe('LinkedList', () => {

	let list;

	beforeEach(() => list = new LinkedList());

	it('must be a list', () => {
		expect(list).toBe(list);
	});

});
