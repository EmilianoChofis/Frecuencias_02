export const media = (data) => {
    
    const sumFx = data.reduce((acc, curr) => acc + curr.fx);
    const n = data.reduce((acc, curr) => acc + curr.frequency);
    const media = sumFx / n;

    return media;
}

export const mediana = (data) => {
    const n = data.reduce((acc, curr) => acc + curr.frequency);
    const pointMedian = n / 2;

    let sumFrecuency = 0;
    const l = data.filter(row => {
        frequency += row.frequency;

        if (frequency >= pointMedian) {
            return row;
        }
    })
}