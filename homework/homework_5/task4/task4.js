function getArrayIntersection(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1.intersection(set2)];
}

function getArrayUnion(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1.union(set2)];
}

module.exports = { getArrayIntersection, getArrayUnion };