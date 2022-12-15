// Warrior.js
const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(health) {
        super();
        this.health = health;
        this.rage = 0;
    }

    takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;
    }
}

module.exports = Warrior

// Hero.js

// class Hero {
//     constructor(health) {
//        this.health =  health;  
//     }
//     takeDamage(damage){
//         this.health -= damage; 
//     }
// }

// module.exports = Hero;
