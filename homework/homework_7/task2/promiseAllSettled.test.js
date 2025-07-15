const promiseAllSettled = require('./promiseAllSettled');

describe('promiseAllSettled', () => {
    test('resolves with all fulfilled results', async () => {
        const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
        const result = await promiseAllSettled(promises);
        expect(result).toEqual([
            { status: 'fulfilled', value: 1 },
            { status: 'fulfilled', value: 2 },
            { status: 'fulfilled', value: 3 },
        ]);
    });

    test('resolves with mixed fulfilled and rejected results', async () => {
        const promises = [Promise.resolve(1), Promise.reject('error'), Promise.resolve(3)];
        const result = await promiseAllSettled(promises);
        expect(result).toEqual([
            { status: 'fulfilled', value: 1 },
            { status: 'rejected', reason: 'error' },
            { status: 'fulfilled', value: 3 },
        ]);
    });

    test('resolves when all promises reject', async () => {
        const promises = [Promise.reject('first'), Promise.reject('second'), Promise.reject('third')];
        const result = await promiseAllSettled(promises);
        expect(result).toEqual([
            { status: 'rejected', reason: 'first' },
            { status: 'rejected', reason: 'second' },
            { status: 'rejected', reason: 'third' },
        ]);
    });

    test('resolves to empty array when input is empty', async () => {
        const result = await promiseAllSettled([]);
        expect(result).toEqual([]);
    });

    test('handles non-Promise values', async () => {
        const input = [1, Promise.resolve(2), 3];
        const result = await promiseAllSettled(input);
        expect(result).toEqual([
            { status: 'fulfilled', value: 1 },
            { status: 'fulfilled', value: 2 },
            { status: 'fulfilled', value: 3 },
        ]);
    });
});
