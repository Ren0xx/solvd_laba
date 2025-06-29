const { deepCloneObject } = require('./task6');

describe('deepCloneObject', () => {
    test('clones simple objects', () => {
        const original = { a: 1, b: 'text' };
        const cloned = deepCloneObject(original);
        expect(cloned).toEqual(original);
        expect(cloned).not.toBe(original);
    });

    test('clones nested objects', () => {
        const original = { a: { b: { c: 3 } } };
        const cloned = deepCloneObject(original);
        expect(cloned).toEqual(original);
        expect(cloned.a.b).toEqual({ c: 3 });
        expect(cloned.a.b).not.toBe(original.a.b);
    });

    test('clones arrays', () => {
        const original = [1, 2, { a: 3 }];
        const cloned = deepCloneObject(original);
        expect(cloned).toEqual(original);
        expect(cloned[2]).not.toBe(original[2]);
    });

    test('handles circular references', () => {
        const original = { name: 'A' };
        original.self = original;
        const cloned = deepCloneObject(original);
        expect(cloned.name).toBe('A');
        expect(cloned.self).toBe(cloned);
    });

    test('clones symbol properties', () => {
        const sym = Symbol('id');
        const original = { [sym]: 42 };
        const cloned = deepCloneObject(original);
        expect(cloned[sym]).toBe(42);
        expect(Object.getOwnPropertySymbols(cloned)).toEqual([sym]);
    });
});
