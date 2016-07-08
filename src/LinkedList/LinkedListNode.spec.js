import LinkedListNode from './LinkedListNode';

describe('LinkedListNode', () => {

	let node;

	beforeEach(() => node = new LinkedListNode());

	it('must be a node', () => {
		expect(node).toBe(node);
	});

});
