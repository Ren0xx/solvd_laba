/**
 * @param {number} num 
 * @return {number}
 */
function calculateFactorial(num) {
    if (typeof num !== 'number' || Number.isNaN(num)) {
        throw new TypeError('Expected num to be a number');
    }
    if (!Number.isInteger(num) || num < 0) {
        throw new RangeError('Expected num to be a non-negative integer');
    }

    const cache = {};
    function fact(n, acc) {
        if (n <= 1) return acc;
        if (cache[n]) return cache[n] * acc;
        cache[n] = fact(n - 1, n * acc) / acc;
        return cache[n] * acc;
    }

    return fact(num, 1);
}

/**
 * @param {number} base 
 * @param {number} exp 
 * @return {number}
 */
function power(base, exp) {
    if (typeof base !== 'number' || Number.isNaN(base)) {
        throw new TypeError('Expected base to be a number');
    }
    if (typeof exp !== 'number' || Number.isNaN(exp)) {
        throw new TypeError('Expected exp to be a number');
    }
    if (!Number.isInteger(exp)) {
        throw new RangeError('Expected exp to be an integer');
    }
    if (exp < 0) {
        throw new RangeError('Expected exp to be a non-negative integer');
    }

    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

module.exports = { calculateFactorial, power };
