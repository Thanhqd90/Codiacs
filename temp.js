function add (n1, n2) {
    if (n1 === undefined || n2 === undefined) {
        return (0);
    }
    if (typeof (n1) !== "number" || typeof (n2) !== "number") {
        throw {err};
    }

    return (n1 + n2);
}

module.exports = add;
