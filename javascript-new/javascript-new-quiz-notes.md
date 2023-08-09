# javascript-constructors-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the `new` operator do?
  ANSWER: The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// Expected output: "Eagle"
```

- What property of JavaScript functions can store shared behavior for instances created with `new`?
  ANSWER: Whenever we create a JavaScript function, JavaScript adds a prototype property to that function. A prototype is an object, where it can add new variables and methods to the existing object. i.e., Prototype is a base class for all the objects, and it helps us to achieve the inheritance.

- What does the `instanceof` operator do?
  MDN ANSWER: The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
```

## Notes

All student notes should be written here.
