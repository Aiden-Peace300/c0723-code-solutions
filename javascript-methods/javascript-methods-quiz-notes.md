# javascript-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  Debugging

---

---

- What is a method?
  JavaScript methods are actions that can be performed on objects.
  A JavaScript method is a property containing a function definition.

---

---

- How is a method different from any other function?
  A method, like a function, is a set of instructions that perform a task.
  The difference is that a method is associated with an object, while a
  function is not.

---

---

- How do you remove the last element from an array?
  use the pop method
  EXAMPLE:
  Array.pop();

---

---

- How do you round a number down to the nearest integer?
  use the Math.floor() static method
  EXAMPLE:
  Math.round(5.5);

---

---

- How do you generate a random number?
  you want to primarily using Math.random() static method
  and will return a number between 0 and 1. coupling the
  Math.floor static method with Math.random static method
  will give me you whole number. The Math.floor static
  method will returns the largest integer less than or
  equal to a given number

  EXAMPLE:
  // will produce a random whole number 0 - 9
  Math.floor(Math.random() \* 10);

---

---

- How do you delete an element from an array?
  use the .slice() method
  EXAMPLE:
  arr.slice();

---

---

- How do you append an element to an array?
  use the .push() method. This method adds elements to the end of an array
  EXAMPLE:
  var colors= ["red","blue"];
  colors.push("yellow");

---

---

- How do you break a string up into an array?
  The split() method splits a string into an array of substring
  EXAMPLE:
  let input = "How are you doing today?";
  let result = input.split(" ");

---

---

- Do string methods change the original string? How would you check if you weren't sure?
  All string methods return a new string. They don't modify the original string
  Strings are immutable: Strings cannot be changed, only replaced.

  Using a string method simply performs the action (upper, lower, etc.) and then
  moves on to the next line without changing the actual string stored in memory.

  if we aren't sure then using the log method of the console object with the argument of the variable that is assigned to the orginal string.

---

---

- Roughly how many string methods are there according to the MDN Web docs?

---

---

- Is the return value of a function or method useful in every situation?

---

---

- Roughly how many array methods are there according to the MDN Web docs?
  52?

  HERE IS A LIST:
  String.prototype[@@iterator]()
  String.prototype.anchor()
  String.prototype.at()
  String.prototype.big()
  String.prototype.blink()
  String.prototype.bold()
  String.prototype.charAt()
  String.prototype.charCodeAt()
  String.prototype.codePointAt()
  String.prototype.concat()
  String.prototype.endsWith()
  String.prototype.fixed()
  String.prototype.fontcolor()
  String.prototype.fontsize()
  String.fromCharCode()
  String.fromCodePoint()
  String.prototype.includes()
  String.prototype.indexOf()
  String.prototype.isWellFormed()
  String.prototype.italics()
  String.prototype.lastIndexOf()
  String.prototype.link()
  String.prototype.localeCompare()
  String.prototype.match()
  String.prototype.matchAll()
  String.prototype.normalize()
  String.prototype.padEnd()
  String.prototype.padStart()
  String.raw()
  String.prototype.repeat()
  String.prototype.replace()
  String.prototype.replaceAll()
  String.prototype.search()
  String.prototype.slice()
  String.prototype.small()
  String.prototype.split()
  String.prototype.startsWith()
  String.prototype.strike()
  String.prototype.sub()
  String.prototype.substr()
  String.prototype.substring()
  String.prototype.sup()
  String.prototype.toLocaleLowerCase()
  String.prototype.toLocaleUpperCase()
  String.prototype.toLowerCase()
  String.prototype.toString()
  String.prototype.toUpperCase()
  String.prototype.toWellFormed()
  String.prototype.trim()
  String.prototype.trimEnd()
  String.prototype.trimStart()
  String.prototype.valueOf()

---

---

- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?
  MDN?

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
