/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.perimeter = 2 * Math.PI * radius;
    this.area = Math.PI * radius ** 2;
  }

  describe() {
    return "The circle's radius is: " + this.radius;
  }
}

const circle = new Circle(6);
console.log(circle.describe());
