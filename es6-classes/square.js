/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super();
    this.width = width;
    this.perimeter = this.width * 4;
    this.area = this.width ** 2;
  }

  describe() {
    return "The square's width is: " + this.width;
  }
}

const square = new Square(5);
console.log(square.describe());
