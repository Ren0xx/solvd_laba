const { createImmutableObject, immutablePerson } = require('./task4');

describe('createImmutableObject', () => {
    test('makes primitive values unchanged', () => {
        expect(createImmutableObject(42)).toBe(42);
        expect(createImmutableObject('hello')).toBe('hello');
        expect(createImmutableObject(null)).toBe(null);
    });

    test('freezes top-level properties', () => {
        const obj = { a: 1, b: 2 };
        const imm = createImmutableObject(obj);
        const descA = Object.getOwnPropertyDescriptor(imm, 'a');
        expect(descA.writable).toBe(false);
        expect(descA.configurable).toBe(false);
        expect(Object.isFrozen(imm)).toBe(true);
    });

    test('handles nested objects recursively', () => {
        const nested = { x: { y: { z: 3 } } };
        const imm = createImmutableObject(nested);
        expect(Object.isFrozen(imm)).toBe(true);
        expect(Object.isFrozen(imm.x)).toBe(true);
        expect(Object.isFrozen(imm.x.y)).toBe(true);
        // Attempt to modify deep value
        imm.x.y.z = 100;
        expect(imm.x.y.z).toBe(3);
    });

    test('handles arrays recursively', () => {
        const arrSource = [1, [2, 3], { a: 4 }];
        const immArr = createImmutableObject(arrSource);
        expect(Array.isArray(immArr)).toBe(true);
        expect(Object.isFrozen(immArr)).toBe(true);
        expect(Object.isFrozen(immArr[1])).toBe(true);
        expect(Object.isFrozen(immArr[2])).toBe(true);
        // Attempt modification
        immArr[2].a = 10;
        expect(immArr[2].a).toBe(4);
    });
});

describe('immutablePerson example', () => {
    test('properties match original and are frozen', () => {
        expect(immutablePerson.firstName).toBe('John');
        expect(immutablePerson.lastName).toBe('Doe');
        expect(immutablePerson.age).toBe(30);
        expect(immutablePerson.email).toBe('john.doe@example.com');
        // all descriptors
        ['firstName', 'lastName', 'age', 'email'].forEach(key => {
            const desc = Object.getOwnPropertyDescriptor(immutablePerson, key);
            expect(desc.writable).toBe(false);
            expect(desc.configurable).toBe(false);
        });
    });
});
