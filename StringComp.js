function sortStringsUp(array) {
    array.sort((a,b) => {
        return a.localeCompare(b);
    });
}

let array = {a,b,b,a,a,b,};

console.log(sortStringsUp(array));

module.exports = sortStringsUp;
