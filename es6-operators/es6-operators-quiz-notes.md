# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  Logical AND (&&):
  The && operator returns true if both of its operands are true. If any of the operands is false, it returns false.

  Logical OR (||):
  The || operator returns true if at least one of its operands is true. If both operands are false, it returns false.

EXAMPLE:

```js
// Logical AND for conditional assignment
const value = isLoggedIn && hasPermission;

// Logical OR for conditional fallback
const name = user.name || 'Guest';

// Logical OR for conditional assignment
const config = userConfig || defaultConfig;
```

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  It refers to the fact that these operators do not always evaluate both of their operands. Instead, they "short-circuit" the evaluation as soon as the result can be determined based on the value of the first operand.

  Logical AND (&&):

- When using &&, if the first operand evaluates to false, the entire expression will be false regardless of the value of the second operand.
- If the first operand is true, the second operand will be evaluated to determine the final result.

Logical OR (||):

- When using ||, if the first operand evaluates to true, the entire expression will be true regardless of the value of the second operand.
- If the first operand is false, the second operand will be evaluated to determine the final result.

EXAMPLE:

```js
// Logical AND short-circuiting
const resultAnd = false && someFunction(); // someFunction() is not called because the first operand is false

// Logical OR short-circuiting
const resultOr = true || someFunction(); // someFunction() is not called because the first operand is true
```

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The ?? (nullish coalescing) operator is used to provide a default value when a variable is null or undefined

  ?? operator and the || operator have similar uses but differ in how they handle various falsy and nullish values. when dealing with nullish values use ?? when working with falsy values use ||

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It provides a concise way to write conditional expressions and is often used as a shorthand for if/else statements.

  differences:

  - Syntax
  - Return Value:
    - The ternary operator returns a value based on the condition evaluation, making it suitable for inline value assignments or return statements.
    - if/else statements don't return a value directly; they control the flow of execution.

EXAMPLE:

```js
condition ? expressionIfTrue : expressionIfFalse;
```

- What is the `?.` (optional chaining) operator? When would you use it?
  Optional chaining allows you to safely access properties and methods of an object without encountering errors if any intermediate property or object is null or undefined.

  Working with complex nested data structures where you want to avoid errors due to missing properties.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  spread syntax allows you to easily create new arrays or objects by expanding elements or properties from existing ones. It can be useful when you may need to copying data in a clean and efficient way.

- What data types can be spread into an array? Into an object?
  Spread into an Array:

  - Arrays: Spread out the elements of an existing array into a new array.
  - Strings: Spread out the characters of a string into an array of characters.
  - Iterable Objects: Spread out the items of iterable objects like Sets or Maps into an array.

  Spread into an Object:

  - Objects: Spread out the properties of an existing object into a new object.
  - Arrays: If you spread out the elements of an array into an object, they become property values with numeric keys.
  - new Objects: Spread out the properties of another object into a new object.

- How does spread syntax differ from rest syntax?
  - Spread syntax is used to expand elements or properties.
  - Rest syntax is used to collect elements or properties into a single entity.
