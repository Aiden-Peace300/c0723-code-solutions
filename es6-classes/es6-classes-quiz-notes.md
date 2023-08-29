# es6-classes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are JavaScript classes?
  Classes are a template for creating objects

- When would you want to use a class?
  when you want object(s) to inherit from a class to gain the same properties and methods.

- How do you declare a class?
  You can declare a class by writing the name of the next to the class keyword, followed by the flower braces.

```javascript
class ClassMates {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayInfo() {
    return this.name + 'is ' + this.age + ' years old!';
  }
}
```

- How do you inherit from another class?
  use the extends keyword

- Why would you want to inherit from another class?
  Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

- How do you add methods and properties to a class?

  for properties use the keyword "this":

```javascript
this.propertyName = value;
```

for methods simply create a function inside the class. This function becomes a method that can be used by the objects created from that class.

## Notes

- what is super()?
  ANSWER: The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

  super MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
