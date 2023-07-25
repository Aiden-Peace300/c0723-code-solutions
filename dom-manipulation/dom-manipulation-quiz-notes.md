# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
  The className property of element objects is a property in the DOM (Document Object Model) that allows you to access and modify the class attribute of an HTML element.

- How do you update the CSS class attribute of an element using JavaScript?
  you can directly modify the className property of the element. The className property allows you to set or change the value of the class attribute of the element.

```javascript
// Assuming you have an element with the ID 'myElement' in your HTML
const element = document.getElementById('myElement');

// Update the class attribute
element.className = 'new-class-name';
```

- What is the `textContent` property of element objects?
  The textContent property of element objects in the DOM (Document Object Model) provides access to the textual content of an HTML element, including its descendants (child elements and their text).

- How do you update the text within an element using JavaScript?
  To update the text within an element using JavaScript, you can access and modify the textContent property of the element.

- Is the `event` parameter of an event listener callback always useful?
  No, the event parameter of an event listener callback is not always useful. Whether you need to include the event parameter in your event listener callback function depends on your specific use case

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  Using a variable to keep track of the number of clicks simplifies the assignment. Without using a variable to track the number of clicks, you would need to find another way to persist and access this information between different event invocations. Typically, this would involve traversing the DOM or using data attributes on the element, which can be more complex and less efficient.

- Why is storing information about a program in variables better than only storing it in the DOM?
  Here's a concise summary of why storing information about a program in variables is better than only storing it in the DOM:

  Efficiency: Variables are faster and more efficient to access and manipulate compared to traversing the DOM.

  Decoupling: Using variables separates application data from the presentation layer, improving maintainability.

  Data Integrity: Variables allow for better data control and validation.

  Scope Control: Variables have well-defined scopes, preventing unintended access.

  Simplicity and Clarity: Using variables leads to clearer and more readable code.

  Manipulation Flexibility: Variables offer more flexibility for data processing and transformations before updating the presentation layer.

## Notes

No notes at this time
