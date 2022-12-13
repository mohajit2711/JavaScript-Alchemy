function looseEquals(a, b) {
    if(a == b){
        return true;
    }
    else
        return false
}

let a = 2;
let b = "2";

looseEquals(a,b)

module.exports = looseEquals;
