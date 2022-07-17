import { backgroundColorChart, borderColorChart } from '../utils/colors.js';

export const showBarChart = (data) => {
	let labels = [];
	let dataChart = [];
	let backgroundColor = [];
	let borderColor = [];

	data.map((intervalClass, i) => {
		labels.push(`Clase ${intervalClass.class}`);
		dataChart.push(intervalClass.frequency);
		backgroundColor.push(backgroundColorChart[i]);
		borderColor.push(borderColorChart[i]);
	});

	showChart(labels, dataChart, backgroundColor, borderColor);
};

const destroyChartIfNecessary = (chartId) => {
	let chartStatus = Chart.getChart(chartId);
	if (chartStatus != undefined) {
		chartStatus.destroy();
	}
};

const showChart = (labels, data, backgroundColor, borderColor) => {
	console.log(labels, data, backgroundColor, borderColor);
	destroyChartIfNecessary('myChart');
	const ctx = document.getElementById('myChart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels,
			datasets: [
				{
					label: 'Frecuencia',
					data,
					backgroundColor,
					borderColor,
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	});
};
