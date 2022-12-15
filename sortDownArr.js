function sortDown(array) {
    return array.sort((a,b) => {
        return b-a;
        
    });
}

let array = {3,2,4,1};        

sortDown(array);

module.exports = sortDown;
