const {
    getFullName,
    filterUniqueWords,
    getAverageGrade,
} = require('../task2');

describe('getFullName', () => {
    it('returns "First Last"', () => {
        expect(getFullName({ firstName: 'A', lastName: 'B' })).toBe('A B');
    });
    it('throws on invalid', () => {
        expect(() => getFullName(null)).toThrow(TypeError);
        expect(() => getFullName({ firstName: 'A' })).toThrow(TypeError);
    });
});

describe('filterUniqueWords', () => {
    it('filters only letters, groups case-insensitive, keeps first', () => {
        expect(filterUniqueWords('You yOu yoU')).toEqual(['you']);
        expect(filterUniqueWords('apple banana Apple BANANA kiwi')).toEqual([
            'apple',
            'banana',
            'kiwi',
        ]);
    });
    it('rejects words with digits or symbols', () => {
        expect(filterUniqueWords('a1 b2 c')).toEqual(['c']);
    });
    it('throws on non-string', () => {
        expect(() => filterUniqueWords(123)).toThrow(TypeError);
    });
});

describe('getAverageGrade', () => {
    it('computes averages', () => {
        const students = [
            { name: 'X', grades: [10, 20] },
            { name: 'Y', grades: [30, 50] },
        ];
        expect(getAverageGrade(students)).toEqual([
            { name: 'X', averageGrade: 15 },
            { name: 'Y', averageGrade: 40 },
        ]);
    });
    it('throws on invalid array', () => {
        expect(() => getAverageGrade(null)).toThrow(TypeError);
        expect(() =>
            getAverageGrade([{ name: 'X', grades: ['a'] }])
        ).toThrow(TypeError);
    });
});
