# javascript-operators-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What data type is returned by an arithmetic operation?
  ANSWER: integer and floating-point.

---

---

- What is string concatenation?
  ANSWER: appending one or more strings to the end of another string

---

---

- What purpose(s) does the `+` plus operator serve in JavaScript?
  ANSWER: The + plus operator in JavaScript serves multiple purposes,
  depending on the context in which it is used.

  1. Arithmetic Addition: When used with two numeric operands (numbers),
     the + operator performs addition and returns the sum of the two numbers.

  2. String Concatenation: When used with one or both operands as strings,
     the + operator concatenates the strings together, combining them into a
     single string.

  3. Conversion and Concatenation: The + operator can also perform type
     coercion by converting non-string values to strings and then
     concatenating them.
     EXAMPLE:
     let num = 42;
     let text = "The answer is: " + num; // Converts num to string and concatenates
     console.log(text); // Output: The answer is: 42

  4. Unary Plus: When used with a single operand, the + operator can act as a
     unary operator to convert a string or other value to a number.
     EXAMPLE:
     let str = "42";
     let num = +str; // Converts the string "42" to a number: +str = 42
     console.log(num); // Output: 42

---

---

- What data type is returned by comparing two values (`<`, `>`, `===`, etc)?
  ANSWER: When comparing two values using comparison operators such as <, >, ===, etc.,
  the resulting data type returned is always a boolean.

---

---

- What does the `+=` "plus-equals" operator do?
  The += operator, also known as the "plus-equals" operator, is a compound
  assignment operator in JavaScript. It combines addition and assignment
  into a single operation.

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
