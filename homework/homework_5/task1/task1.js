function customFilterUnique(arr, fn) {
    if (!Array.isArray(arr) || typeof fn !== 'function') return "Incorrect parameters types";

    const seenSet = new Set(); //for uniqueness

    return arr.filter(item => {
        const key = fn(item);
        if (seenSet.has(key)) return false;
        seenSet.add(key);
        return true;
    });
}

function hasProperty(object) {
    const property = "admin"; //custom property
    return object.hasOwnProperty(property);
}

module.exports = { customFilterUnique, hasProperty };