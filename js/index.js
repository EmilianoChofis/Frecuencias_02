import { table } from './table/table.js';

import { showBarChart } from './charts/bars.js';
import { showLineChart } from './charts/line.js';
import { showOjivaChart } from './charts/ojiva.js';

import { media, mediana, moda, sesgo } from './func/mtc.js';

import { calcIntervalClass } from './utils/calcIntervalClass.js';
import { orderData } from './utils/orderData.js';
import { formatData } from './utils/formatData.js';
import { getMax } from './utils/getMax.js';
import { getMin } from './utils/getMin.js';
import { getStandartDeviation, getVariance } from './func/medidasDispersion.js';

const form = document.getElementById('form');
const tableHtml = document.getElementById('table');
const mediaTd = document.getElementById('media');
const medianaTd = document.getElementById('mediana');
const modaTd = document.getElementById('moda');
const sesgoTD = document.getElementById('sesgo');

const otherValuesContainer = document.getElementById('other-values');
const varianceTd = document.getElementById('variance');
const standartDeviationTd = document.getElementById('standartDeviation');

const frequency = (data, sumInterval = 1) => {
	const n = data.length;
	let classes;
	let maxValue = getMax(data);
	let minValue = getMin(data);
	// const maxValue = Math.max(...data);
	// const minValue = Math.min(...data);
	// console.log('maxValue: ' + maxValue + ' minValue: ' + minValue);

	/* Calculating the number of classes. */
	for (let i = 0; i <= data.length; i++) {
		let aux = Math.pow(2, i);
		if (aux > n || aux === n) {
			classes = i;
			break;
		}
	}
	// console.log(classes);
	const intervalClass = calcIntervalClass(maxValue, minValue, n, sumInterval);
	console.log(intervalClass);
	// console.log('intervalClass: ' + intervalClass);
	const initialValue = minValue === 1 ? 0 : minValue;

	let rowsData = [];

	for (let i = 0; i < classes; i++) {
		/* Setting the initial value of the interval. */
		const initialInterval =
			rowsData.length === 0
				? initialValue
				: rowsData[rowsData.length - 1].finalInterval + 1;
		/* Calculating the final value of the interval. */
		const finalInterval = initialInterval + (intervalClass - 1);

		/* Search for all the values in the previous interval. */
		const frequency = data.filter(
			(number) => number >= initialInterval && number <= finalInterval
		).length;

		/* Calculating the point median of the interval. */
		const middlePoint = (initialInterval + finalInterval) / 2;

		/* Calculating the relative frequency of each class. */
		const frecuencyRelative = frequency / n;

		/* Calculating the accumulated frequency of each class. */
		// console.log('frequency ', frequency);
		const frecuencyAcumulated =
			rowsData.length > 0
				? frequency + rowsData[rowsData.length - 1].frecuencyAcumulated
				: frequency;

		const fx = frequency * middlePoint;
		const fx2 = Math.pow(fx, 2);
		// console.log('frecuencyAcumulated', frecuencyAcumulated);

		rowsData.push({
			class: i + 1,
			initialInterval,
			finalInterval,
			frequency,
			middlePoint,
			frecuencyRelative,
			frecuencyAcumulated,
			fx,
			fx2,
		});

		if (
			i === classes - 1 &&
			rowsData[rowsData.length - 1].frecuencyAcumulated != n
		) {
			classes++;
			console.log(classes);
		}
	}

	/* Summing the frequency of each class. */
	const nAux = rowsData.reduce((acc, curr) => acc + curr.frequency, 0);
	// console.log(nAux);

	// // If the sum of the frequencies is lower than the total values, the intervals add 2
	// if (nAux < n) {
	// 	// console.log('Entra');
	// 	return frequency(data, 2);
	// }

	// //If is bigger than the total values, the intervals add 0
	// if (nAux > n) {
	// 	// console.log('Entra 2');
	// 	return frequency(data, 0);
	// }

	/**
	 * If the frequency property of the row object is equal to zero, return true, otherwise return false.
	 * @param row - The row object that we're checking to see if it's empty.
	 */
	const isRowEmpty = (row) => row.frequency === 0;

	/**
	 * If the last row is empty, remove it and check again.
	 */
	const dropRow = () => {
		rowsData.map((row) => {
			if (row.frequency === 0) {
				rowsData.splice(rowsData.indexOf(row), 1);
			}
		});

		const isRowEmpty = (row) => row.frequency === 0;
		if (isRowEmpty(rowsData[rowsData.length - 1])) {
			dropRow();
		}
	};

	/* It's checking if the last row is empty, if it is, it's removing it. */
	if (isRowEmpty) {
		dropRow();
	}

	return rowsData;
};

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Getting the data from the input
	const data = document.getElementById('dataSet').value;

	// Formatting the data in array
	const arrData = formatData(data);

	// Ordering the data
	const orderedData = orderData(arrData);
	const intOrderedData = orderedData.map((number) => parseInt(number));

	// Calculating each class
	let frequencyData = frequency(intOrderedData);
	const n = frequencyData
		.map((row) => row.frequency)
		.reduce((acc, curr) => acc + curr, 0);
	if (intOrderedData.length != n) {
		console.log('entra');
		frequencyData = frequency(intOrderedData, 5);
	}

	// Calculating the measures of dispersion
	const variance = getVariance(frequencyData, intOrderedData);
	const standartDeviation = getStandartDeviation(variance);

	// Charts
	showBarChart(frequencyData);
	showLineChart(frequencyData);
	showOjivaChart(frequencyData);

	// Table
	tableHtml.innerHTML = table(frequencyData);

	otherValuesContainer.classList.remove('d-none');

	// MTC
	mediaTd.innerHTML = media(frequencyData);
	medianaTd.innerHTML = mediana(frequencyData);
	modaTd.innerHTML = moda(arrData);
	sesgoTD.innerHTML = sesgo(frequencyData);

	//Measures of dispersion
	varianceTd.innerHTML = variance;
	standartDeviationTd.innerHTML = standartDeviation;
});
