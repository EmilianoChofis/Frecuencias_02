export const formatData = (data) => {
	const arr = data.split(',');
	const result = arr.filter((number) => number.trim().length > 0);

	return result;
};
