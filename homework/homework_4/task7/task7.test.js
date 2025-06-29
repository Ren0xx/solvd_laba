// validateObject.test.js
const { validateObject } = require('./task7');

describe('validateObject', () => {
    const schema = {
        name: { required: true, type: 'string' },
        age: { required: true, type: 'number', validate: n => n >= 0 },
        email: { required: false, type: 'string', validate: val => val.includes('@') }
    };

    test('valid object passes validation', () => {
        const obj = { name: 'Alice', age: 25, email: 'alice@example.com' };
        expect(validateObject(obj, schema)).toBe(true);
    });

    test('missing required property fails', () => {
        const obj = { age: 25 };
        expect(validateObject(obj, schema)).toBe(false);
    });

    test('wrong type fails', () => {
        const obj = { name: 'Alice', age: '25' };
        expect(validateObject(obj, schema)).toBe(false);
    });

    test('custom validate rule fails', () => {
        const obj = { name: 'Alice', age: -1 };
        expect(validateObject(obj, schema)).toBe(false);
    });

    test('optional field with invalid value fails', () => {
        const obj = { name: 'Alice', age: 30, email: 'aliceatexample.com' };
        expect(validateObject(obj, schema)).toBe(false);
    });

    test('optional field omitted passes', () => {
        const obj = { name: 'Bob', age: 40 };
        expect(validateObject(obj, schema)).toBe(true);
    });
});
