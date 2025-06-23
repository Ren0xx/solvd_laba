/**
 * @return {function(): number}
 */
function createCounter() {
    if (arguments.length !== 0) {
        throw new TypeError('createCounter takes no arguments');
    }
    let counter = 0;
    return function increment() {
        counter++;
        return counter;
    };
}

/**
 * @param {function} fn
 * @param {number} num
 * @return {function(): void}
 */
function repeatFunction(fn, num) {
    if (typeof fn !== 'function') {
        throw new TypeError('Expected first argument to be a function');
    }
    if (typeof num !== 'number' || Number.isNaN(num) || !Number.isInteger(num)) {
        throw new TypeError('Expected second argument to be an integer');
    }
    if (num < 0) {
        throw new RangeError('Repeat count must be non-negative');
    }

    return function invokeOriginal() {
        for (let i = 0; i < num; i++) {
            fn();
        }
    };
}

module.exports = { createCounter, repeatFunction };
