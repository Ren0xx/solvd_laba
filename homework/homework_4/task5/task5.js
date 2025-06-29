function observeObject(obj, callback) {
    return new Proxy(obj, {
        get(target, property, receiver) {
            callback(property, 'get');
            return Reflect.get(target, property, receiver);
        },
        set(target, property, value, receiver) {
            callback(property, 'set');
            return Reflect.set(target, property, value, receiver);
        }
    });
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

function logCallback(prop, action, value) {
    const log = action === 'get'
        ? `Property "${property}" was read (value: ${value})`
        : `Attempt to set "${property}" to ${value}`;
    console.log(log);
}

const observedPerson = observeObject(person, logCallback);

module.exports = { observeObject, observedPerson };