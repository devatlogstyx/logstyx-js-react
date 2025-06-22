//@ts-check

exports.sendFn = (endpoint, { body, }) => {
    return navigator.sendBeacon(endpoint, body);
}

exports.safeParse = (input) => {
    try {
        return input ? JSON.parse(input) : {};
    } catch {
        return {};
    }
}


exports.num2Int = (number) => {
    if (isNaN(number)) {
        return 0;
    }

    return parseInt(number);
};
