/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    const area = Math.PI * radius ** 2;
    const perimeter = 2 * Math.PI * radius;
    super(Math.floor(area), Math.floor(perimeter));
    this.radius = radius;
  }

  describe() {
    return super.describe() + " The circle's radius is: " + this.radius;
  }
}

const circle = new Circle(6);
console.log(circle.describe());
