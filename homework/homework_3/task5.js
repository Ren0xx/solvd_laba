//1.
/**
 * 
 * @param {number[]} arr 
 * @param {function()} fn 
 */
function lazyMap(arr, fn) {
    let idx = 0;

    return {
        next() {
            if (idx >= arr.length) {
                return { done: true }; //finished
            }
            const value = fn(arr[idx]); //applying function
            idx++;
            return { value, done: false };
        }
    };
}
const arr = [1, 2, 3, 4, 5];
const lazy = lazyMap(arr, x => x * 2);

console.log(lazy.next()); // { value: 2, done: false }
console.log(lazy.next()); // { value: 4, done: false }
console.log(lazy.next()); // { value: 6, done: false }
console.log(lazy.next()); // { value: 8, done: false }
console.log(lazy.next()); // { value: 10, done: false }
console.log(lazy.next()); // { done: true }

console.log('\n');
//2.
function fibonacciGenerator() {
    let a = 0, b = 1;

    return {
        next() {
            const value = a;
            [a, b] = [b, a + b]; // number before + current
            return { value, done: false };
        }
    };
}
const fib = fibonacciGenerator();

console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next()); //34