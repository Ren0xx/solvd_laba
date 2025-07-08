function throttle(func, interval) {
    let timeSinceCall = 0;
    return fn = (...args) => {
        const time = Date.now();
        if (time - timeSinceCall >= interval) {
            func(...args);
            timeSinceCall = time;
        }
    };
}

function onScroll(event) {
    // Handle scroll event
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 2000); //2s

window.addEventListener("scroll", throttledScrollHandler);