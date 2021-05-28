function range(start, stop, step = 1) {
    if (typeof stop == 'undefined') {
        // if one parameter defined
        stop = start;
        start = 0;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    let result = [];
    let i;
    for (i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

module.exports = range;
