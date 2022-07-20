const getFrequencies = (data) => {
	const frequencies = [];
	data.map((row) => {
		frequencies.push(row.frequency);
	});

	return frequencies;
};

export const showLineChart = (data) => {
	let labels = [];
	let dataChart = getFrequencies(data);
	// console.log(dataChart);
	// let backgroundColor = [];
	// let borderColor = [];

	data.map((intervalClass, i) => {
		labels.push(`Clase ${intervalClass.class}`);
		// borderColor.push(borderColorChart[i]);
	});

	const dataLine = {
		labels: labels,
		datasets: [
			{
				label: 'Frecuencia',
				data: dataChart,
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1,
			},
		],
	};

	const config = {
		type: 'line',
		data: dataLine,
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	};

	lineChart(config);
};

const destroyChartIfNecessary = (chartId) => {
	let chartStatus = Chart.getChart(chartId);
	if (chartStatus != undefined) {
		chartStatus.destroy();
	}
};

//Create line chart
const lineChart = (config) => {
	// console.log(labels, data, backgroundColor, borderColor);
	destroyChartIfNecessary('lineChart');
	const ctx = document.getElementById('lineChart').getContext('2d');
	const myChart = new Chart(ctx, config);
};
