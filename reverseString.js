function reverse(string) {
    let newStr = "";

    for(let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }

    return newStr;
}

let str = "afbpaiufbapw";
console.log(reverse(str));

module.exports = reverse;
