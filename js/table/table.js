import { row } from './row.js';

/**
 * It takes an array of objects and returns a string of HTML
 * @param data - Array of objects with the following properties:
 * @returns A string.
 */

export const table = (data) => {
	return `<div class="container table-responsive"> 
    <table class="table table-hover">
    <thead class="custom-thead">
      <tr class="text-primary">
        <th scope="col"> <p class="text-center">Clases</p></th>
        <th scope="col"><p class="text-center">Intervalo de clase</p></th>
        <th scope="col"><p class="text-center">Frecuencia</p></th>
        <th scope="col"><p class="text-center">Punto medio</p></th>
        <th scope="col"><p class="text-center">Frecuencia relativa</p></th>
        <th scope="col"><p class="text-center">Frecuencia acumulada</p></th>
        <th scope="col"><p class="text-center">Fx</p></th>
        <th scope="col"><p class="text-center">Fx^2</p></th>
      </tr>
    </thead>
    <tbody>
    ${data.map((rowData, i) => row(rowData, i)).join('')}
      <tr>
        <td>
          
        </td>
        <td>
          
        </td>
        <td class="fw-bold text-center">
        Σ${data.reduce((acc, rowData) => acc + rowData.frequency, 0)}
        </td>
        <td>
         
        </td>
        <td class="fw-bold text-center">
        Σ${data.reduce((acc, rowData) => acc + rowData.frecuencyRelative, 0)}
        </td>
        <td>
          
        </td>
        <td class="fw-bold text-center">
        Σ${data.reduce((acc, rowData) => acc + rowData.fx, 0)}
        </td>
        <td class="fw-bold text-center">
        Σ${data.reduce((acc, rowData) => acc + rowData.fx2, 0)}
        </td>
    </tbody>
  </table>
  </div>
`;
};
