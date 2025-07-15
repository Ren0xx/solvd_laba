/**
 * @param {Array<Promise>} promises
 * @return {Promise} single promise that resolves to an array or rejected or resolved values
 */
function promiseAllSettled(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedPromises = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }
        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[idx] = { status: "fulfilled", value: value };
                })
                .catch((err) => {
                    results[idx] = { status: "rejected", reason: err };
                })
                .finally(() => {
                    completedPromises++;
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
}

// const promises = [
//     Promise.resolve(1),
//     Promise.reject("Error occurred"),
//     Promise.resolve(3),
// ];

// promiseAllSettled(promises).then((results) => {
//     console.log("All promises settled:", results);
//     // Expected: [{ status: 'fulfilled', value: 1 },
//     //            { status: 'rejected', reason: 'Error occurred' },
//     //            { status: 'fulfilled', value: 3 }]
// });

module.exports = promiseAllSettled;