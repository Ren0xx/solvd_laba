const { observeObject } = require('./task5');

describe('observeObject', () => {
    let logs;
    const callback = (prop, action) => {
        logs.push({ prop, action });
    };

    beforeEach(() => {
        logs = [];
    });

    test('logs get operations', () => {
        const obj = { a: 1 };
        const proxy = observeObject(obj, callback);
        expect(proxy.a).toBe(1);
        expect(logs).toEqual([{ prop: 'a', action: 'get' }]);
    });

    test('logs set operations', () => {
        const obj = { b: 2 };
        const proxy = observeObject(obj, callback);
        proxy.b = 5;
        expect(obj.b).toBe(5);
        expect(logs).toEqual([{ prop: 'b', action: 'set' }]);
    });

    test('works with observedPerson example', () => {
        logs = [];
        const person = {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            email: "john.doe@example.com"
        };
        const proxy = observeObject(person, callback);
        proxy.firstName;
        proxy.age = 35;
        expect(logs).toEqual([
            { prop: 'firstName', action: 'get' },
            { prop: 'age', action: 'set' }
        ]);
    });
});