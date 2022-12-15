const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    
    Shape.call(this,x,y);
    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);
let temp = 0;
Rectangle.prototype.flip = function () {
    temp = this.height;
    this.height = this.width;
    this.width = temp;
}

module.exports = Rectangle;

// Shape.js

// function Shape(x, y) {
//     this.position = { x, y }
// }

// Shape.prototype.move = function (x, y) {
//     this.position.x += x;
//     this.position.y += y;
// }

// module.exports = Shape;
