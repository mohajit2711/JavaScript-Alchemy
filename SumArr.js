function sumTogether(arr1, arr2) {
    let sumarr = [];

    for(let i = 0; i<arr1.length ; i++){
        sumarr[i] = arr1[i]+arr2[i];
    }

    return sumarr;
}

arr1 = [2,3,4];
arr2 = [3,6,4];

console.log(sumTogether(arr1,arr2));

module.exports = sumTogether;
