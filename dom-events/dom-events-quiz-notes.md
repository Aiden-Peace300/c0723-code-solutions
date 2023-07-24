# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  making it accessable for programmer to debug a JS file

---

- What is the purpose of events and event handling?
  an event handler is a callback routine that operates asynchronously once an event takes place

---

- Are all possible parameters required to use a JavaScript method or function?
  No, not all possible parameters are required to use a JavaScript method or function. JavaScript allows for flexibility in function calls, and many functions have optional parameters or default values. The parameters that are optional or have default values are not required to be provided when calling the function.

---

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener() method

---

- What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

  SIDE QUESTION: when and why would I ever wanna use a callback function ?
  A callback's primary purpose is to execute code in response to an event. These events might be user-initiated, such as mouse clicks or typing. With a callback, you may instruct your application to "execute this code every time the user clicks a key on the keyboard."

---

- What object is passed into an event listener callback when the event fires?
  event object
  addEventListener(type, listener, useCapture)
  type - https://developer.mozilla.org/en-US/docs/Web/Events
  listener - function
  useCapture - A boolean value indicating whether events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.

---

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The target property of the event object returns the HTML element that triggered an event.

  you can check by doing a console.log(event.target)

  https://developer.mozilla.org/en-US/docs/Web/API/Event/target

---

- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  ```js
  element.addEventListener('click', handleClick());
  ```

  Snippet 1 (REFERENCE TO FUNCTION) correctly sets up the event listener to execute the handleClick function when the 'click' event happens on the element.

  Snippet 2 (CALLING FUNCTION IMMEDIATELY) incorrectly invokes the handleClick function immediately and assigns its return value (if any) as the event listener, which is likely not the desired behavior for event handling.

## Notes

No notes written at this time
