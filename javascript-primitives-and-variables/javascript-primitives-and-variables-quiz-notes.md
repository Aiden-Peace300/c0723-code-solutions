# javascript-primitives-and-variables-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of variables?
  to store information to be referenced and manipulated in a computer program.

---

---

- How do you **declare** a variable?
  a variable can be declared using var , let , const keywords.

---

---

- How do you initialize (**assign a value to**) a variable?
  The assignment ( = ) operator is used to assign a value to a variable. The
  assignment operation evaluates to the assigned value. Chaining the assignment
  operator is possible in order to assign a single value to multiple variables.

---

---

- What characters are allowed in variable names?
  1. Letters (A-Z or a-z): The variable name can start with any letter, either
     uppercase or lowercase.
  2. Underscore (\_) character: The variable name can begin with an underscore.
  3. ## Dollar sign ($) character: The variable name can start with a dollar sign.
     EXAMPLE:
     let name = "John";
     let \_count = 5;
     let $price = 10.99;
  ***

---

---

- What does it mean to say that variable names are "case sensitive"?
  This means that language keywords, variables, function names, and any other
  identifiers must always be typed with a consistent capitalization of letters.
  The while keyword, for example, must be typed “while”, not “While” or “WHILE”.

---

---

- What is the purpose of a string?
  strings are used to store and operate on sequences of characters; used to
  hold and work with text. They let you store words, sentences, or any kind
  of written information. You can do things like change the text, join
  different strings together (concatenation), or show the text on the screen.

  shorter answer:
  to store and manipulate data

---

---

- What is the purpose of a number?
  The purpose of numbers are used to represent and work with numeric values.
  Numbers allow you to perform mathematical operations, store quantities,
  calculate values, and manipulate numerical data in your code.

---

---

- What is the purpose of a boolean?
  The purpose of booleans are used to represent logical values, specifically
  true or false. Booleans are used to make decisions and control the flow
  of a program based on conditions.

---

---

- What does the `=` operator mean in JavaScript?
  = operator is known as the assignment operator. It is used to assign a value
  to a variable or property.

---

---

- How do you update the value of a variable?
  Updating a variable in JavaScript is an easy task. Using the assignment
  operator (`=`), you can assign a new value to it, or perform operations
  and update its current value.

---

---

- What is the difference between `null` and `undefined`?
  Null in JavaScript means an empty value
  The variable which has been assigned as null contains no value.
  null is a special object because typeof null returns 'object'.

  On the other hand,

  undefined means that the variable has not been declared,
  or has not been given a value.

---

- Why is it a good habit to include "labels" when you log values to the browser console?
  adding "labels" is good habbit because it helps with debugging and clear readablity to the console.

---

---

- Give five examples of JavaScript primitives.
  There are 7 primitive data types:

  - string
  - number
  - bigint
  - boolean
  - undefined
  - symbol
  - null

- AIDEN'S NOTES:

  1. in JavaScript, the const keyword is used to declare constants.
     Once a variable is declared with const, its value cannot be
     reassigned or changed.

  ***

  EXAMPLE 1A (JS CODE BELOW):
  const PI = 3.14159;
  console.log(PI); // Output: 3.14159
  PI = 3.14; // Error: Assignment to a constant variable

  ***

  EXAMPLE 1B (JS CODE BELOW):
  const myArray = [1, 2, 3];
  myArray.push(4);
  console.log(myArray); // Output: [1, 2, 3, 4]
  myArray = [5, 6, 7]; // Error: Assignment to a constant variable

  ***

  ***

  2. HERE IS A ADVANTAGE THAT 'let' HAS OVER 'var' :

  - Block Scoping: Variables declared with let are block-scoped, meaning they are only
    accessible within the block where they are defined. On the other hand, variables
    declared with var have function scope or global scope, which can lead to unintended
    variable leakage.
  - IMPORTANT: JavaScript does not allow the redeclaration of a variable with let in
    the same block scope, but with var declaration is absolutely allowed.

  ***

  ***

  3. FUN FACT: JavaScript treats a dollar sign as a letter, identifiers containing $ are
     valid variable names

  ***

  EXAMPLE:
  let $ = "Hello World";
  let $$$ = 2;
  let $myMoney = 5;

  ***

  ***

  ***

  4. JavaScript typeof:
     In JavaScript there are 5 different data types that can contain values:

  - string
  - number
  - boolean
  - object
  - function

  There are 6 types of objects:

  - Object
  - Date
  - Array
  - String
  - Number
  - Boolean

  And 2 data types that cannot contain values:

  - null
  - undefined

  NOTE : The typeof operator returns "object" for
  arrays because in JavaScript arrays are objects.

  ***

  EXAMPLE:
  typeof "John" // Returns "string"
  typeof 3.14 // Returns "number"
  typeof NaN // Returns "number"
  typeof false // Returns "boolean"
  typeof [1,2,3,4] // Returns "object"
  typeof {name:'John', age:34} // Returns "object"
  typeof new Date() // Returns "object"
  typeof function () {} // Returns "function"
  typeof myCar // Returns "undefined"
  typeof null // Returns "object"

  REALISTIC EXAMPLE:
  const name = 'John';
  typeof(name); // returns "string"

  PRACTICAL EXAMPLE:
  // making sure that the type name is a string
  if (typeof(value) !== "undefined") {}

  ***

  ***

  ***

  List of escape sequences are valid in JavaScript:
  \b Backspace
  \f Form Feed
  \n New Line
  \r Carriage Return
  \t Horizontal Tabulator
  \v Vertical Tabulator

  ***

  ***

  ## Comparing two JavaScript objects always returns false.

  ***

  JavaScript Numbers are Always 64-bit Floating Point:

  - Unlike many other programming languages, JavaScript does not define different types
    of numbers, like integers, short, long, floating-point etc.
  - JavaScript numbers are always stored as double precision floating point numbers,
    following the international IEEE 754 standard.
  - This format stores numbers in 64 bits, where the number (the fraction) is stored in
    bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.
  - Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
  - Floating point arithmetic is not always 100% accurate:
    EXAMPLE:
    let x = 0.2 + 0.1; // will output 0.30000000000000004
    To solve the problem above, it helps to multiply and divide:
    SOLUTION TO EXAMPLE:
    let x = (0.2 _ 10 + 0.1 _ 10) / 10; // will output 0.3

  ***

---

- Why is it a good habit to include "labels" when you log values to the browser console?
  This is useful for readablity when reading the console output. In addition,
  it logs messages to a debugging terminal instead of presenting them in the
  browser console.

---

---

- Give five examples of JavaScript primitives.
  7 primitive data types:
  - string
  - number
  - bigint
  - boolean
  - undefined
  - symbol
  - null

---

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
