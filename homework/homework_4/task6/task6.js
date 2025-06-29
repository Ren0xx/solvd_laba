function deepCloneObject(source, seen = new Map()) {
    if (source === null || typeof source !== 'object') return source;
    if (seen.has(source)) return seen.get(source);

    const clone = Array.isArray(source) ? [] : {};
    seen.set(source, clone);

    for (const key of Reflect.ownKeys(source)) {
        clone[key] = deepCloneObject(source[key], seen);
    }

    return clone;
}

module.exports = { deepCloneObject };
