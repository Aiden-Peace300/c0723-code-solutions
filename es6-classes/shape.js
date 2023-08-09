/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return 'The area is ' + this.area + ' The perimeter is ' + this.perimeter;
  }
}

const randomShape = new Shape(20, 20);
console.log(randomShape.describe());
