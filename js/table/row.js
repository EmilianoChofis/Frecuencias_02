
/**
 * It takes a data object and an index, and returns a string of HTML.
 * @param data - is the data that is being passed to the function
 * @param i - index of the current row
 * @returns A string of HTML.
 */
export const row = (data, i) => {
	return `
        <tr>
            <td class="text-center">
                <p class="fw-bold text-center">
                    ${i + 1}
                </p>
            </td>
            <td >
                <p class="text-center">
                ${
					data.initialInterval
				} - ${data.finalInterval}
                </p>
            </td>
            <td>
                <p class="text-center">
                    ${data.frequency}
                </p>
            </td>
            <td>
                <p class="text-center">
                    ${data.pointMedian}
                </p>
            </td>
            <td>
                <p class="text-center">
                    ${
                        data.frecuencyRelative
                    }
                </p>
            </td>
            <td>
                <p class="text-center">
                    ${
					    data.frecuencyAcumulated
				    }
                </p>
            </td>
            <td >
                <p class="text-center">
                    ${data.fx}
                 </p>
            </td>
            <td >
                <p class="text-center">
                    ${data.fx2}
                </p>
               
            </td>
        </tr>
        `;
};
