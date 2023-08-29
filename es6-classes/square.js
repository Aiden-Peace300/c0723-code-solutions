/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    const area = width ** 2; // Calculate area
    const perimeter = width * 4; // Calculate perimeter
    super(area, perimeter); // Call the superclass constructor
    this.width = width; // Set the width property
  }

  describe() {
    return super.describe() + " The square's width is: " + this.width;
  }
}

const square = new Square(5);
console.log(square.describe());
