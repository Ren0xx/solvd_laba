const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

Object.keys(person).forEach(key => {
    Object.defineProperty(person, key, {
        writable: false,
        configurable: true
    });
});

person.updateInfo = (data) => {
    Object.keys(data).forEach(key => {
        if (this.hasOwnProperty(key)) {
            Object.defineProperty(person, key, {
                value: data[key],
                writable: false,
                configurable: true
            });
        }
    });
};

Object.defineProperty(person, 'address', {
    value: {},
    writable: true,
    enumerable: false,
    configurable: false
});

module.exports = person;