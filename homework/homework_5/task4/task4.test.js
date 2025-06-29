const { getArrayIntersection, getArrayUnion } = require("./task4");

describe('getArrayIntersection', () => {
    it('returns common elements', () => {
        expect(getArrayIntersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });

    it('removes duplicates', () => {
        expect(getArrayIntersection([1, 2, 2], [2])).toEqual([2]);
    });

    it('returns empty array if no intersecting elements', () => {
        expect(getArrayIntersection([1, 2], [3, 4])).toEqual([]);
    });

    it('returns empty array if any input is invalid', () => {
        expect(getArrayIntersection(null, [1])).toEqual([]);
        expect(getArrayIntersection([1], 'x')).toEqual([]);
    });
});

describe('getArrayUnion', () => {
    it('returns merged unique values', () => {
        expect(getArrayUnion([1, 2], [2, 3])).toEqual([1, 2, 3]);
    });

    it('handles empty arrays', () => {
        expect(getArrayUnion([], [1, 2])).toEqual([1, 2]);
        expect(getArrayUnion([1, 2], [])).toEqual([1, 2]);
    });

    it('returns empty array if invalid inputs', () => {
        expect(getArrayUnion(null, [1])).toEqual([]);
        expect(getArrayUnion([1], 'x')).toEqual([]);
    });
});