const getItem = (key) => {
    const value = sessionStorage.getItem(key);

    return value === null ? null : JSON.parse(value);
};

const setItem = (key, value) => {
    if (!value || !key) {
        return;
    }

    const stringfiedValue = JSON.stringify(value);

    sessionStorage.setItem(key, stringfiedValue);
};
