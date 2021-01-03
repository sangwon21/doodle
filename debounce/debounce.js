const debounce = (callback, time) => {
    let inDebounce = 0;
    return () => {
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => {
            callback(...arguments);
        }, time);
    };
};
