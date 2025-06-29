const chunkArray = require("./task2");

describe('chunkArray', () => {

    it('returns empty array for invalid chunk size', () => {
        expect(chunkArray([1, 2, 3], 0)).toEqual([]);
        expect(chunkArray([1, 2, 3], -1)).toEqual([]);
        expect(chunkArray([1, 2, 3], NaN)).toEqual([]);
        expect(chunkArray("Not array", 4)).toEqual([]);
        expect(chunkArray("Not array", -1)).toEqual([]);
        expect(chunkArray("Not array", NaN)).toEqual([]);
    });

    it('splits array into chunks of given size', () => {
        expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('returns not changed array if size >= length of array', () => {
        expect(chunkArray([1, 2, 3, 4], 6)).toEqual([[1, 2, 3, 4]]);
    });

    it('returns empty array for empty input', () => {
        expect(chunkArray([], 3)).toEqual([]);
    });

    it('returns empty array if input is not an array', () => {
        expect(chunkArray('not-array', 2)).toEqual([]);
    });
});
