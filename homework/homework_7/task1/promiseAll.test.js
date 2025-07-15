const promiseAll = require('./promiseAll');

describe('promiseAll', () => {
    test('resolves when all promises succeed', async () => {
        const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
        const result = await promiseAll(promises);
        expect(result).toEqual([1, 2, 3]);
    });

    test('rejects when any promise fails', async () => {
        const promises = [Promise.resolve(1), Promise.reject('error'), Promise.resolve(3)];
        await expect(promiseAll(promises)).rejects.toBe('error');
    });

    test('rejects when all promises fail', async () => {
        const promises = [Promise.reject('first'), Promise.reject('second'), Promise.reject('third')];
        await expect(promiseAll(promises)).rejects.toBe('first');
    });

    test('works when input is empty array', async () => {
        const result = await promiseAll([]);
        expect(result).toEqual([]);
    });

    test('works with non-Promise values', async () => {
        const input = [1, Promise.resolve(2), 3];
        const result = await promiseAll(input);
        expect(result).toEqual([1, 2, 3]);
    });
});
