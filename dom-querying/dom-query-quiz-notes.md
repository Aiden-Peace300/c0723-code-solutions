# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  used for printing messages to the console. It helps developers debug their code by displaying the output of their program in the console.

---

- What is a "model"?
  A representation of all the objects that can be modified

  MORE DEPTH:
  The model is again a reference to encapsulate data or output for rendering.

  encapsulation refers to the bundling of data with the mechanisms or methods that operate on the data.

  encapsulation simple def: to show or express the main idea or quality of (something) in a brief way

---

- Which "document" is being referred to in the phrase Document Object Model?
  When an HTML document is loaded into a web browser, it becomes a document object.

- What is the word "object" referring to in the phrase Document Object Model?
  The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

- What is a DOM Tree?
  A DOM tree is a hierarchical structure representing the elements of an HTML document. Each node in the tree is an object representing a part of the document. The DOM tree starts at the root node

---

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById(id)
  document.querySelector(cssSelector)

---

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.getElementsByClassName(className)
  document.getElementsByTagName(tagName)
  document.querySelectorAll(cssSelector)

---

- Why might you want to assign the return value of a DOM query to a variable?
  Assigning the return value of a DOM (Document Object Model) query to a variable is a common practice in web development for several reasons:
  - Reusability!!!!
  - Efficiency
  - Cleaner code
  - Minimizing DOM manipulation: Manipulating the DOM can trigger reflows and repaints, which can be performance-intensive. By storing the reference to a DOM element in a variable, you can perform multiple operations on that element without repeatedly accessing the DOM.
  - Working with collections: DOM queries like querySelectorAll() return collections (e.g., NodeList) of elements. Assigning these collections to variables allows you to loop through the elements, apply changes, or perform various operations on the entire collection.
  - Easier error handling: When performing a DOM query, there's always a chance that the element you are looking for might not exist on the page. By assigning the query result to a variable, you can easily check if the variable holds a valid reference or is null/undefined, and handle any errors or edge cases gracefully.

---

- What `console` method allows you to inspect the properties of a DOM element object?

  dir method of the console object then pass in a argument in the parentheses

---

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The reason for this is that HTML loads from top to bottom. The head loads first, then the body, and then everything inside the body.

---

- What does `document.querySelector()` take as its argument and what does it return?
  MDN ANSWER (arguments): A group of selectors to match the descendant elements of the Element baseElement against; this must be valid CSS syntax, or a SyntaxError exception will occur.

  It returns only the first "thing you call" then returns the first one it finds in the tree

---

- What does `document.querySelectorAll()` take as its argument and what does it return?
  MDN ANSWER (arguments): A string containing one or more selectors to match against. This string must be a valid CSS selector string; if it's not, a SyntaxError exception is thrown. See Locating DOM elements using selectors for more information about using selectors to identify elements. Multiple selectors may be specified by separating them using commas.

  It returns a static NodeList containing all elements that match the specified selector.

## Notes

All student notes should be written here.

- difference between console.log and console.dir ?
  The main difference between these two methods is that the console. log() method displays the “toString” representation of any object passed to it. Whereas, the console. dir() method displays an interactive list of the properties of the specified JavaScript object.

- querySelector vs getElementsbyTagName

- $ in front of that variable for DOM is best practive!

- Nodelist are static

- HTMLCollection are live/dynamic
