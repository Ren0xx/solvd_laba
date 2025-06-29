const { customFilterUnique } = require("./task1");
describe('customFilterUnique', () => {
    it('filters unique by callback result (boolean)', () => {
        const arr = [
            { admin: true, name: 'John' },
            { admin: true, name: 'Joe' },
            { name: 'Jojo' }
        ];
        const result = customFilterUnique(arr, obj => obj.hasOwnProperty('admin'));
        expect(result).toEqual([
            { admin: true, name: 'John' },
            { name: 'Jojo' }
        ]);
    });
    it('filters unique by custom key', () => {
        const arr = [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            { id: 1, name: 'C' }
        ];
        const result = customFilterUnique(arr, obj => obj.id);
        expect(result).toEqual([
            { id: 1, name: 'A' },
            { id: 2, name: 'B' }
        ]);
    });

    it('returns error string on invalid input', () => {
        const result = customFilterUnique('not-array', () => true);
        expect(result).toBe('Incorrect parameters types');
    });

    it('works with primitives', () => {
        const arr = [1, 2, 2, 3];
        const result = customFilterUnique(arr, n => n);
        expect(result).toEqual([1, 2, 3]);
    });
});
