//Classes and Constructors in JS

class Rectangle {
    
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calculateArea() {
        console.log(this.height * this.width);
    }
}

let rect = new Rectangle(4,5);

console.log(rect.height);
console.log(rect.width);
rect.calculateArea();

