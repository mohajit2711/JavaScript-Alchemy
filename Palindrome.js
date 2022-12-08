function reverse(string) {
    let newStr = "";

    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }

    return newStr;
}
function isPalindrome(string) {
    let revStr = reverse(string);
    if(revStr == string)
        return true;
    
    else
        return false;
}

let str = "popopop";
console.log(isPalindrome(str));
