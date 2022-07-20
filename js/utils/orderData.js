export const orderData = (data) => {
	const arrOrdered = data.sort((a, b) => a - b);

	return arrOrdered;
};
