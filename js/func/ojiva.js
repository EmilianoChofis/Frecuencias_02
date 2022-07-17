const getFrequencies = (data) => {
	const frequencies = [];
	let frequenciesSum = 0;
	data.map((row) => {
		frequencies.push(row.frequency + frequenciesSum);
		frequenciesSum += row.frequency;
	});

	console.log(frequenciesSum);
	return frequencies;
};

export const showOjivaChart = (data) => {
	let labels = [];
	let dataChart = getFrequencies(data);
	console.log(dataChart);
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
				tension: 0.5,
			},
		],
	};

	const config = {
		type: 'line',
		data: dataLine,
	};

	ojivaChart(config);
};

const destroyChartIfNecessary = (chartId) => {
	let chartStatus = Chart.getChart(chartId);
	if (chartStatus != undefined) {
		chartStatus.destroy();
	}
};

//Create line chart
export const ojivaChart = (config) => {
	// console.log(labels, data, backgroundColor, borderColor);
	destroyChartIfNecessary('ojivaChart');
	const ctx = document.getElementById('ojivaChart').getContext('2d');
	const myChart = new Chart(ctx, config);
};
