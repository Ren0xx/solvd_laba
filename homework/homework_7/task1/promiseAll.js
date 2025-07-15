/**
 * @param {Array<Promise>} promises
 * @return {Promise} single promise that resolves to an array or rejected or resolved values
 */
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const values = [];
        let completedPromises = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then(value => {
                    values[idx] = value;
                    completedPromises++;
                    // all promises are completed - resolve with values
                    if (completedPromises === promises.length) {
                        resolve(values);
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    });
}


const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

promiseAll(promises)
    .then((results) => {
        console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch((error) => {
        console.error("At least one promise rejected:", error);
    });

module.exports = promiseAll;