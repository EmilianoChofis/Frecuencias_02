export const media = (data) => {
	// const sumFx = data.reduce((acc, curr) => acc + curr.fx);
	const sumFx = data.reduce((acc, curr) => acc + curr.fx, 0);
	const n = data.reduce((acc, curr) => acc + curr.frequency, 0);
	const media = sumFx / n;

	return media;
};

export const mediana = (data) => {
	const n = data.reduce((acc, curr) => acc + curr.frequency, 0);
	const pointMedian = n / 2;

	/* Finding the row where the sum of the frequencies is greater than the point of the median. */
	let sumFrecuency = 0;
	const lRow = data.find((row) => {
		sumFrecuency += row.frequency;
		if (sumFrecuency >= pointMedian) {
			return row;
		}
	});

	const l = lRow.initialInterval;
	const f = lRow.frequency;
	const fa = data[lRow.class - 2].frecuencyAcumulated;
	const i = lRow.finalInterval + 1 - lRow.initialInterval;
	const mediana = l + i * ((pointMedian - fa) / f);

	return mediana;
};

export const moda = (data) => {
	/* Counting the number of occurrences of each value in the array. */
	const occurrences = data.reduce((acc, curr) => {
		return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
	}, {});

	/* Finding the key with the highest value in the occurrences object. */
	const maxOccurrences = Object.keys(occurrences).filter(
		(key) => occurrences[key] === Math.max(...Object.values(occurrences))
	);

	return maxOccurrences;
};

export const sesgo = (data) => {
	const medianaValue = mediana(data);
	const mediaValue = media(data);

	if (mediaValue > medianaValue) {
		return 'Positivo';
	} else if (mediaValue < medianaValue) {
		return 'Negativo';
	}
};
