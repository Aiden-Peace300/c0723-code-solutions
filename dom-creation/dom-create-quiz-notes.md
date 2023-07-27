# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  No, the document.createElement() method does not insert a new element into the page by itself. It is used to create a new element node in memory, which you can then manipulate and add to the DOM (Document Object Model) to insert it into the page.

- How do you add an element as a child to another element?

```javascript
// Append the new element as the last child of the parent element
parentElement.appendChild(aChildElement);
```

- What do you pass as the arguments to the `element.setAttribute()` method?
  Attribute name: The second argument is the name of the attribute you want to set. This should be a string that represents the name of the attribute, such as 'src', 'class', 'id', 'href', etc.

  Attribute value: The third argument is the value that you want to assign to the attribute. This value should also be a string, and it represents the value that will be associated with the attribute you specified in the second argument.

```javascript
// Append the new element as the last child of the parent element
element.setAttribute(attributeName, attributeValue);
```

- What steps do you need to take in order to insert a new element into the page?

  - create the new element: using "domcument.createElement()" to create a new node in memory.
  - set any attributes and content: using methods like as setAttribute() or textContent before adding the element to the DOM.
  - Insert the new element into the DOM: Use DOM manipulation methods like appendChild()

- What is the `textContent` property of an element object for?
  GETTER & SETTER
  The textContent property of an element object is used to get or set the text content of the element, including any nested elements it contains. It represents the text content that appears between the opening and closing tags of the element in the HTML document.

  When you access the textContent property of an element, it returns a string representing the concatenated text content of the element and its descendants. If the element contains other child elements, their text content is also included in the string.

  GET EXAMPLE:

```html
<div id="myDiv">
  This is some text.
  <p>This is a paragraph.</p>
</div>
```

```javascript
const myDiv = document.getElementById('myDiv');
console.log(myDiv.textContent);
```

the output would be :
This is some text. This is a paragraph.

SET EXAMPLE:

```javascript
const myDiv = document.getElementById('myDiv');
myDiv.textContent = 'This is the updated text content.';
```

- Name two ways to set the `class` attribute of a DOM element.
  1. Using setAttribute(): The setAttribute() method allows you to set any attribute on an element, including the class attribute.

```javascript
const element = document.getElementById('myElement');
element.setAttribute('class', 'my-class-name');
```

In this example, the class attribute of the element with the ID "myElement" will be set to "my-class-name".

2. Directly setting the className property: The className property of an element provides a more convenient way to set the class attribute. You can simply assign a new class name (or a space-separated list of class names) to the className property:

```javascript
const element = document.getElementById('myElement');
element.className = 'my-class-name';
```

This will have the same effect as using setAttribute(), and the class attribute will be set to "my-class-name".

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  - Reusability & Readability

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
