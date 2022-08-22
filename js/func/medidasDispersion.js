// const data = [
// 	{
// 		class: 1,
// 		initialInterval: 51,
// 		finalInterval: 60,
// 		frequency: 4,
// 		middlePoint: 55.5,
// 		frecuencyRelative: 0.2,
// 		frecuencyAcumulated: 4,
// 		fx: 222,
// 		fx2: 49284,
// 	},
// 	{
// 		class: 2,
// 		initialInterval: 61,
// 		finalInterval: 70,
// 		frequency: 6,
// 		middlePoint: 65.5,
// 		frecuencyRelative: 0.3,
// 		frecuencyAcumulated: 10,
// 		fx: 393,
// 		fx2: 154449,
// 	},
// 	{
// 		class: 3,
// 		initialInterval: 71,
// 		finalInterval: 80,
// 		frequency: 6,
// 		middlePoint: 75.5,
// 		frecuencyRelative: 0.3,
// 		frecuencyAcumulated: 16,
// 		fx: 453,
// 		fx2: 205209,
// 	},
// 	{
// 		class: 4,
// 		initialInterval: 81,
// 		finalInterval: 90,
// 		frequency: 2,
// 		middlePoint: 85.5,
// 		frecuencyRelative: 0.1,
// 		frecuencyAcumulated: 18,
// 		fx: 171,
// 		fx2: 29241,
// 	},
// 	{
// 		class: 5,
// 		initialInterval: 91,
// 		finalInterval: 100,
// 		frequency: 2,
// 		middlePoint: 95.5,
// 		frecuencyRelative: 0.1,
// 		frecuencyAcumulated: 20,
// 		fx: 191,
// 		fx2: 36481,
// 	},
// ];

// const valuesArr = [
// 	51, 55, 56, 59, 62, 62, 63, 65, 66, 70, 71, 72, 73, 79, 79, 80, 85, 90, 94,
// 	98,
// ];

export const getVariance = (data, valuesData) => {
	const n = data.reduce((acc, curr) => acc + curr.frequency, 0);
	const arithmeticMedia = valuesData.reduce((acc, curr) => acc + curr, 0) / n;
	const variances = data
		.map((row) => {
			const mediaValue = row.middlePoint;
			const variance =
				row.frequency * (mediaValue - arithmeticMedia) ** 2;
			return variance;
		})
		.reduce((acc, curr) => acc + curr, 0);
	const variance = variances / (n - 1);
	return variance;
};

export const getStandartDeviation = (variance) => {
	const standartDeviation = Math.sqrt(variance);
	return standartDeviation;
};
