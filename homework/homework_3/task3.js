//1.
/**
 * @return {function(): number}
 */
function createCounter() {
    let counter = 0;
    function increment() {
        counter++;
        return counter;
    }
    return increment;
}


const counter = createCounter();
counter();
counter();
counter();
console.log(counter()); // should show 4

//2.
/**
 * @param {function()} fn
 * @param {number} num
 */
function repeatFunction(fn, num) {
    function invokeOriginal() {
        if (num < 0) {
            while (true) {
                fn();
            }
        } else {
            for (let i = 0; i < num; i++) {
                fn();
            }
        }
    }
    return invokeOriginal;
};
function printMe() {
    console.log("Some text");
}
const f1 = repeatFunction(printMe, 3);
f1();

const f2 = repeatFunction(printMe, -1);
// f2(); <- WARNING: Will print itself indefinitely