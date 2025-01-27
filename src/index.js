
exports.min = function min (array) {
    if (!array || array.length == 0) return 0;

    let result = 0;
    for (let item of array) {
        result = result > item ? item : result;
    }

  return result;
}

exports.max = function max (array) {
    if (!array || array.length == 0) return 0;

    let result = 0;
    for (let item of array) {
        result = result < item ? item : result;
    }

  return result;
}

exports.avg = function avg (array) {
    if (!array || array.length == 0) return 0;

    let result = 0;
    for (let item of array) {
        result += item;
    }

  return result / array.length;
}
