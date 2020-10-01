
exports.min = function min (array) {
    return !array || !Array.isArray(array) || array.length == 0 ? 0 : Math.min.apply(null, array)
}

exports.max = function max (array) {
    return !array || !Array.isArray(array) || array.length == 0 ? 0 : Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    return !array || !Array.isArray(array) || array.length == 0 ? 0 : array.reduce((el, sum) => el + sum) / array.length;
}
