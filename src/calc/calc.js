export {sum, multi};

function sum (a, b) {
	return a + b;
}

function multi (a, b) {
	if (a === 0) return 0;
	if (b === 0) return 0;
	return a * b;
}
