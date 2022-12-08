function playerHandScore(hand) {
    let count = 0;
    for(let i = 0; i<hand.length ; i++){
        if(hand[i] == "K")
            count+=4;
        else if(hand[i] == "Q")
            count+=3;
        else if(hand[i] == "J")
            count+=2;
    }

    return count;
}

let hand = "JKJJQ";
console.log(playerHandScore(hand));

module.exports = playerHandScore;
