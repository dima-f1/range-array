/** @module @dima-f1/range-array */

/**
 * @callback fn
 * @param {number} entry - Unwrapped entry to be inserted into array.
 */



/**
 * Generator function, which used to create an iterable object that can be passed to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from|`Array.from`} method inside `rangeArray`.
 *
 * @generator
 * @function range
 * @yields {*} The next entry in the array with range.
 */
function* _range(start, end, step, callbackFn) {
    while (start <= end) {
        yield callbackFn ? callbackFn(start) : start;
        start += step;
    }
}



/**
 * Create an array with configurable range and optional callback invocation on each entry.
 *
 * @param {number} [start=1] - The value from which will be started range of array entries.
 * @param {number} end - The value at which will be ended range of array entries. If the value of `end` param is
 *     `undefined` then `rangeArray` returns an empty array
 * @param {number} [step=1] - The value, which will be used to determine the gap between adjacent array entries. If the
 *     value of `step` param is less than `0` then `rangeArray` returns an empty array
 * @param {function(number)} [callbackFn] - A function that accepts only one argument - the next range item. If
 *     `callbackFn` function provided then `rangeArray` calls it one time for each element in the array.
 * @return {array} The array that corresponds with given params.
 */
function rangeArray(start = 1, end, step = 1, callbackFn) {
    if (step <= 0 || end === undefined) return [];

    return Array.from(_range(start, end, step, callbackFn));
}



module.exports = rangeArray;
