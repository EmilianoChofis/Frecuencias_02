export const calcIntervalClass = (maxValue, minValue, n, sumInterval) => {
	// let intervalClass = (maxValue - minValue) / classes;
	// const remainder = intervalClass - parseInt(intervalClass);

	let intervalClass = (maxValue - minValue) / (1 + 3.322 * Math.log10(n));
	const remainder = intervalClass - parseInt(intervalClass);

	remainder > 0.5
		? (intervalClass = Math.round(intervalClass) + sumInterval)
		: (intervalClass = Math.floor(intervalClass) + sumInterval);

	return intervalClass;
};
