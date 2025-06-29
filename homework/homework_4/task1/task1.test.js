const person = require('./task1');

describe('person object', () => {
    test('initial properties are read-only', () => {
        const properties = ['firstName', 'lastName', 'age', 'email'];
        properties.forEach(key => {
            const desc = Object.getOwnPropertyDescriptor(person, key);
            expect(desc.writable).toBe(false);
            expect(desc.configurable).toBe(true);
            expect(person[key]).toBeDefined();
        });
    });

    test('updateInfo does not change read-only properties', () => {
        const original = { ...person };
        person.updateInfo({ firstName: 'Jane', age: 35 });
        expect(person.firstName).toBe(original.firstName);
        expect(person.age).toBe(original.age);
    });

    test('address property exists with correct descriptor', () => {
        const desc = Object.getOwnPropertyDescriptor(person, 'address');
        expect(desc).toMatchObject({
            writable: true,
            enumerable: false,
            configurable: false
        });
        expect(person.address).toEqual({});
    });

    test('can modify contents of address object', () => {
        person.address.city = 'Warsaw';
        expect(person.address.city).toBe('Warsaw');
    });

    test('address is non-enumerable', () => {
        const keys = Object.keys(person);
        expect(keys).not.toContain('address');
    });
});
