function sortStringsUp(array) {
    array.sort((a,b) => {
        return a.localeCompare(b);
    });
}

module.exports = sortStringsUp;
