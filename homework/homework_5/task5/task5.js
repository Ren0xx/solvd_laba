const { customFilterUnique, hasProperty } = require("../task1/task1");
const chunkArray = require("../task2/task2");
const customShuffle = require("../task3/task3");
const { getArrayIntersection, getArrayUnion } = require("../task4/task4");

function measureArrayPerformance(fn, arr, ...args) {
    if (typeof fn !== "function" || !Array.isArray(arr)) return "Incorrect parameter type";

    const start = performance.now();
    const result = fn(arr, ...args);
    const end = performance.now();

    const time = end - start;
    return { result, time };
}


const arr1 = Array.from({ length: 100000 }, (_, i) => i);
const arr2 = Array.from({ length: 100000 }, (_, i) => i + 50000);
const nums = Array.from({ length: 100000 }, (_, i) => i);


console.log('customFilterUnique:', measureArrayPerformance(customFilterUnique, arr1, hasProperty).time.toFixed(2), 'ms');
console.log('chunkArray:', measureArrayPerformance(chunkArray, nums, 5000).time.toFixed(2), 'ms');
console.log('customShuffle:', measureArrayPerformance(customShuffle, [...nums]).time.toFixed(2), 'ms');
console.log('getArrayIntersection:', measureArrayPerformance(getArrayIntersection, nums, arr2).time.toFixed(2), 'ms');
console.log('getArrayUnion:', measureArrayPerformance(getArrayUnion, nums, arr2).time.toFixed(2), 'ms');

console.log('\n');

console.log('built-in map:', measureArrayPerformance(arr => arr.map(x => x * 2), nums).time.toFixed(2), 'ms');
console.log('built-in filter:', measureArrayPerformance(arr => arr.filter(x => x % 2 === 0), nums).time.toFixed(2), 'ms');
console.log('built-in reduce:', measureArrayPerformance(arr => arr.reduce((acc, x) => acc + x, 0), nums).time.toFixed(2), 'ms');
