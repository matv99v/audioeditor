export default function(data, k) {
    const dataOpt = [];

    let min = data[0];
    let max = data[0];

    for (let i = 1; i < data.length; i++) {
        const el = data[i];
        if (i % k === 0) {
            dataOpt.push(min, max);
            min = max = el;
        } else {
            min = el < min ? el : min;
            max = el > max ? el : max;
        }
    }

    return dataOpt;
}
