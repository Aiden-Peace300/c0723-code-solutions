# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The most deeply nested element that caused the event is called a target element, accessible as event.target.

  SIDE QUESTION: what does it return ?
  The event. target property returns the HTML element that triggered an event. By using this property we can get access to the element's properties and attributes. We can also use the event target Javascript property to modify the properties of an element.

---

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.

  https://javascript.info/bubbling-and-capturing
  Bubbling: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

  Capturing: the event goes down to the element.

---

- What DOM element property tells you what type of element it is?
  tagName property
  event.target.tagName

---

- What does the `element.closest()` method take as its argument and what does it return?
  The closest ancestor Element or itself, which matches the selectors. If there are no such element, null.

  https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

---

- How can you remove an element from the DOM?
  remove() method
  https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

---

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  event.stopPropagation() OR event.stopImmediatePropagation()

## Notes

- Intro to events: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects

- Event Delegation (Bubbling and capturing): https://javascript.info/bubbling-and-capturing#capturing

- target property: https://developer.mozilla.org/en-US/docs/Web/API/Event/target

- tagName property: https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName

- remove() method : https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
