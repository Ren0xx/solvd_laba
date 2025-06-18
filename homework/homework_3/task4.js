//1.
/**
 * @param {number} num 
 * @param {number} acc 
 * @param {object} cache - cache for optimization
 */
function calculateFactorial(num, acc = 1, cache = {}) {
    if (num <= 1) return acc;
    if (cache[num]) return cache[num] * acc;

    cache[num] = calculateFactorial(num - 1, num * acc, cache) / acc;
    return cache[num] * acc;

}
console.log(calculateFactorial(5)); //120
console.log(calculateFactorial(15)); //1307674368000

//Version with one argument
function factorial(n) {
    function factTail(n, acc = 1) {
        if (n <= 1) return acc;
        return factTail(n - 1, n * acc);
    }
    return factTail(n);
}

//2.

/**
 * 
 * @param {number} base 
 * @param {number} exp 
 */
function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

console.log(power(2, 8));
console.log(power(2, 16));