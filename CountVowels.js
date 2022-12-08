function countVowels(str) {
    let count = 0;
    for(let i = 0; i<str.length ; i++){
        if (str[i] == 'a' || str[i] == 'A' || str[i] == 'e' || str[i] == 'E' || str[i] == 'i' || str[i] == 'I'
            || str[i] == 'o' || str[i] == 'O' || str[i] == 'u' || str[i] == 'U'){
                count++
            }
    }

    return count;
}

let str = "annejbfpajnbaipbwaeinwdnwoubcaobUuncenbcEEEnbcoancAAdwnooOOnnd";
console.log(countVowels(str));

module.exports = countVowels;
