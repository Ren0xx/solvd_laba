const customShuffle = require("./task3");


describe('customShuffle', () => {
    it('returns error string if parameter is not an array', () => {
        expect(customShuffle(null)).toBe("Incorrect parameter type");
        expect(customShuffle({})).toBe("Incorrect parameter type");
        expect(customShuffle(123)).toBe("Incorrect parameter type");
    });

    it('contains the same elements after shuffle', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = customShuffle([...arr]);
        expect(result.sort()).toEqual(arr.sort());
    });

    it('can shuffle an empty array', () => {
        expect(customShuffle([])).toEqual([]);
    });

    it('can shuffle array with one element', () => {
        expect(customShuffle([42])).toEqual([42]);
    });
});