function countElements(elements) {
    let elementCount = {};
    for(let i = 0; i < elements.length; i++) {
        if(!elementCount[elements[i]]) {
            elementCount[elements[i]] = 1;
        } else {
            elementCount[elements[i]] += 1;
        }
    }

    return elementCount;
}

let elements= {'e','g','e','k','g','k'};
console.log(countElements(elements));

module.exports = countElements;
