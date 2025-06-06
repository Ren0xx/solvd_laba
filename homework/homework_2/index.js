function addValues(a, b) {
    // one string or both
    if (typeof a === 'string' || typeof b === 'string') {
        return String(a) + String(b);
    }
    // both arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b);
    }
    // objects, but not arrays
    if (a !== null && b !== null && typeof a === 'object' && typeof b === 'object' &&
        !Array.isArray(a) && !Array.isArray(b)) {
        return { ...a, ...b };
    }
    //both BigInts
    if (typeof a === 'bigint' && typeof b === 'bigint') {
        return a + b;
    }
    // bigint and boolean combinations
    if ((typeof a === 'bigint' && typeof b === 'boolean') ||
        (typeof a === 'boolean' && typeof b === 'bigint')) {
        const bigA = typeof a === 'bigint' ? a : (a ? 1n : 0n);
        const bigB = typeof b === 'bigint' ? b : (b ? 1n : 0n);
        return bigA + bigB;
    }
    // both numbers
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    // number and boolean combinations
    if ((typeof a === 'number' && typeof b === 'boolean') ||
        (typeof a === 'boolean' && typeof b === 'number')) {
        const numA = typeof a === 'number' ? a : (a ? 1 : 0);
        const numB = typeof b === 'number' ? b : (b ? 1 : 0);
        return numA + numB;
    }
    // both booleans 
    if (typeof a === 'boolean' && typeof b === 'boolean') {
        return (a ? 1 : 0) + (b ? 1 : 0);
    }
    // Throw error for unsupported type combinations
    throw new Error('Addition not possible for the given types');
}

function stringifyValue(arg) {
    if (typeof arg === 'object' || Array.isArray(arg)) {
        return JSON.stringify(arg);
    }
    return String(arg);
}

function invertBoolean(value) {
    if (typeof value !== 'boolean') {
        throw new Error('Value must be a boolean');
    }
    return !value;
}

function convertToNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string' && !isNaN(value)) {
        return Number.parseFloat(value);
    }
    if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }
    if (value === null) {
        return 0;
    }
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return 0; //return 0 for empty arrays
        }
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += convertToNumber(value[i]);
        }
        return sum;
    }

    throw new Error('Value cannot be converted to a number');
}

function coerceToType(value, type) {
    if (type === 'string') {
        return stringifyValue(value);
    }

    if (type === 'number') {
        return convertToNumber(value);
    }

    if (type === 'boolean') {
        if (typeof value === 'string') {
            const lowerVal = value.toLowerCase();
            if (lowerVal === 'true') return true;
            if (lowerVal === 'false') return false;
        }
        return Boolean(value);
    }

    if (type === 'object') {
        if (value === null) return null;
        //object but no array
        if (typeof value === 'object' && !Array.isArray(value)) return value;
        try {
            return JSON.parse(stringifyValue(value));
        } catch {
            throw new Error('Cannot coerce to object');
        }
    }

    if (type === 'array') {
        if (Array.isArray(value)) return value;
        if (typeof value === 'string') {
            try {
                const parsed = JSON.parse(value);
                if (Array.isArray(parsed)) return parsed;
            } catch {
                //we continue to the next value
            }
        }
        return [value];
    }

    if (type === 'bigint') {
        if (typeof value === 'bigint') return value;
        try {
            return BigInt(convertToNumber(value));
        } catch {
            throw new Error('Cannot coerce to bigint');
        }
    }

    if (type === 'null') {
        return null;
    }

    if (type === 'undefined') {
        return undefined;
    }

    throw new Error(`Unsupported target type: ${type}`);
}

console.log('===== function addValues() =====');
console.log('Numbers:', addValues(2, 3)); // 5
console.log('Strings:', addValues('a', 'b')); // "ab"
console.log('Arrays:', addValues([1], [2])); // [1, 2]
console.log('Objects:', addValues({ a: 1 }, { b: 2 })); // {a:1, b:2}
console.log('Mixed:', addValues(1, '2')); // "12"

console.log('\n===== function stringifyValue() =====');
console.log('Number:', stringifyValue(123)); // "123"
console.log('Boolean:', stringifyValue(true)); // "true"
console.log('Array:', stringifyValue([1, 2])); // "[1,2]"
console.log('Object:', stringifyValue({ x: 1 })); // "{"x":1}"

console.log('\n===== function invertBoolean() =====');
console.log('True:', invertBoolean(true)); // false
console.log('False:', invertBoolean(false)); // true

console.log('\n===== function convertToNumber() =====');
console.log('String:', convertToNumber("123")); // 123
console.log('Boolean:', convertToNumber(true)); // 1
console.log('Array:', convertToNumber([1, 2])); // 3
console.log('Null:', convertToNumber(null)); // 0

console.log('\n===== function coerceToType() =====');
console.log('To string:', coerceToType(123, 'string')); // "123"
console.log('To number:', coerceToType("3.14", 'number')); // 3.14
console.log('To boolean:', coerceToType(1, 'boolean')); // true
console.log('To array:', coerceToType('1,2', 'array')); // ["1,2"]
console.log('To bigint:', coerceToType("42", 'bigint')); // 42n