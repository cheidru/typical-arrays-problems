
exports.min = function min (array) {
    let result = 0;
    for (let item of array) {
        result = result > item ? item : result;
    }

  return result;
}

exports.max = function max (array) {
    let result = 0;
    for (let item of array) {
        result = result < item ? item : result;
    }

  return result;
}

exports.avg = function avg (array) {
    let result = 0;
    for (let item of array) {
        result += item;
    }

  return result / array.length;
}
