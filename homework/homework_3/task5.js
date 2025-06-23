/**
 * @param {any[]} arr 
 * @param {function(any): any} fn 
 * @return {{ next(): { value?: any, done: boolean } }}
 */
function lazyMap(arr, fn) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected first argument to be an array');
    }
    if (typeof fn !== 'function') {
        throw new TypeError('Expected second argument to be a function');
    }
    let idx = 0;
    return {
        next() {
            if (idx >= arr.length) {
                return { done: true };
            }
            const value = fn(arr[idx]);
            idx++;
            return { value, done: false };
        }
    };
}

/**
 * @return {{ next(): { value: number, done: boolean } }}
 */
function fibonacciGenerator() {
    if (arguments.length !== 0) {
        throw new TypeError('fibonacciGenerator function takes no arguments');
    }
    let a = 0, b = 1;
    return {
        next() {
            const value = a;
            [a, b] = [b, a + b];
            return { value, done: false };
        }
    };
}

module.exports = { lazyMap, fibonacciGenerator };
