function throttleEasy(fn, wait = 200) {
    let time = 0;

    return function() {
        const now = Date.now();
        if (now - time < wait) {
            return;
        }
        fn.apply(this, arguments);
        time = now;
    }
}

window.throttle = throttleEasy;
