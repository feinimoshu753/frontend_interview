function debounceEasy(fn, wait = 200) {
    let timer = null;

    return function() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    }
}

window.debounce = debounceEasy;
