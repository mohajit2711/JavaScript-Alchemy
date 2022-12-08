function countC(str) {
    let count = 0;

    for(let i = 0; i<str.length ; i++){
        if(str[i] == 'c' || str[i] == 'C'){
            count++
        }
    }

    return count;
}

const str = "asneCnmsxcsnDCsnCCCssnccssncccn" ;
console.log(countC(str);

module.exports = countC;
