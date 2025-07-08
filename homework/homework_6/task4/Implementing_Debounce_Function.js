function debounce(func, delay) {
    let timeoutId;
    return fn = (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}
function debouncedSearch(query) {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] Searching for:`, query);
    const p = document.createElement('p');
    p.textContent = time;
    document.getElementById("output_container").appendChild(p);
}

const debouncedSearchHandler = debounce(debouncedSearch, 2000); //2s

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
    debouncedSearchHandler(event.target.value);
});