// Fisher–Yates shuffle Algorithm 

function customShuffle(arr) {
    if (!Array.isArray(arr)) return "Incorrect parameter type";

    for (let i = arr.length - 1; i > 0; i--) {

        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));

        // Swap arr[i] with the element 
        // at random index 
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

module.exports = customShuffle;