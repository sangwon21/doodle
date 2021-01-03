const throttle = (callback, time) => {
    let check = 0;
    return () => {
        if (!check) {
            check = setTimeout(() => {
                callback(...arguments);
                check = 0;
            }, time);
        }
    };
};
