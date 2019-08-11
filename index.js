const rangeArray = (start = 1, end, step = 1, fn) => {
    function* range(start, end, step, fn) {
        while (start <= end) {
            yield fn ? fn(start) : start;
            start += step;
        }
    }

    return Array.from(range(start, end, step, fn));
};



module.exports = rangeArray;