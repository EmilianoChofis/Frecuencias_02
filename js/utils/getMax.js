export const getMax = (arr) => {
	let len = arr.length;
	let max = -Infinity;

	while (len--) {
		max = arr[len] > max ? arr[len] : max;
	}
	console.log('MAX: ', max);
	const intMax = parseInt(max);
	return intMax;
};
