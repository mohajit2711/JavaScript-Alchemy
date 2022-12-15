function sortUp(array) {
    array.sort((a,b) => a-b);
}

let array = {3,4,51,2,3};

sortUp(array);

module.exports = sortUp;
