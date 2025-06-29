function chunkArray(arr, size) {
    if (!Array.isArray(arr) || typeof size !== 'number' || size <= 0 || Number.isNaN(size)) {
        return [];
    }

    const result = [];
    let idx = 0;

    while (idx < arr.length) {
        const currentChunk = arr.slice(idx, idx + size);
        result.push(currentChunk);
        idx += size; //going forward by the size step
    }
    return result;
}

module.exports = chunkArray;