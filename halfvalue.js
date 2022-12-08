function halfValue(numbers) {
    let newArray = [];
    for(let i = 0; i<numbers.length; i++){
        newArray[i] = Math.round(numbers[i]/2);
    }

    return newArray;
}
let numbers = [4,6,3,6,8];
console.log(halfValue(numbers));

module.exports = halfValue;
