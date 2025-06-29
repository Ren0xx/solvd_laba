function createImmutableObject(source) {
    //checking is source is array
    if (Array.isArray(source)) {
        const arrFrozen = source.map(item => createImmutableObject(item));
        return Object.freeze(arrFrozen);
    }
    if (source !== null && typeof source === 'object') {
        const result = {};
        Object.keys(source).forEach(key => {
            const value = createImmutableObject(source[key]);
            Object.defineProperty(result, key, {
                value, writable: false, configurable: false, enumerable: true
            });
        });
        return Object.freeze(result);
    }
    return source;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

const immutablePerson = createImmutableObject(person);
module.exports = { createImmutableObject, immutablePerson };