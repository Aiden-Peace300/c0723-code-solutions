# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?

```javascript
const functionName = (parameters) => {
  // function body
};
```

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  concise body syntax and block body syntax. The key difference between the two is in how they handle the return value and the execution of multiple statements.

Concise Body Syntax:

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

Block Body Syntax:

```javascript
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(5, 2)); // Output: 3
```

- When using _concise body syntax_, how do you return an object literal?

Object literal using concise body syntax:

```javascript
const createPerson = (name, age) => ({ name: name, age: age });

const person = createPerson('Alice', 30);
console.log(person); // Output: { name: 'Alice', age: 30 }
```

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    The arrow function in this expression is: "() => 42"

  - How many arguments does the arrow function take?
    The arrow function takes no arguments. It's an example of a function without parameters. The () indicates an empty parameter list.

  - What value does it return?
    The arrow function returns the value 42.

  - How many arguments are passed to the function `foo`?
    One argument is passed to the function foo. The argument is the arrow function () => 42.

  - What type of argument is passed to the function `foo`?
    The argument passed to the function foo is a function. In this case it's an arrow function with an empty parameter list that returns the value 42.

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    The arrow function in this expression is: "(y) => {console.log(`4y = ${4 * y}`);
    }"

  - How many arguments does the arrow function take?
    The arrow function takes one argument, which is y.

  - What value does it return?
    The arrow function doesn't have an explicit return statement, so it doesn't return a specific value. It is logging the result of 4 \* y to the console.

  - How many arguments are passed to the function `bar`?
    One argument is passed to the function bar. The argument is the arrow function (y) => { console.log(4y = ${4 \* y}); }.

  - What type of argument is passed to the function `bar`?
    The argument passed to the function bar is an arrow function that takes one parameter y and logs a message to the console.

  - When does the arrow function's code get executed?
    The arrow function will be executed when bar calls it.

- How does the value of `this` differ between standard functions and arrow functions?
  Unlike regular functions, arrow functions don't have their own this binding. If we access 'this' in the arrow function it will return the this of the closest non-arrow parent function. The value of 'this' in the arrow function is determined at the time of declaration and never changes.
