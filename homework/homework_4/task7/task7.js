function validateObject(obj, schema) {
    for (const key of Object.keys(schema)) {
        const rules = schema[key];
        const value = obj[key];

        if (rules.required && !(key in obj)) return false;
        if (value === undefined) continue;

        if (rules.type && typeof value !== rules.type) return false;

        if (rules.validate && typeof rules.validate === 'function') {
            if (!rules.validate(value)) return false;
        }
    }
    return true;
}

module.exports = { validateObject };
