# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  In React, just like the DOM, an "event" refers to an occurrence that takes place within the user interface, such as a user clicking a button, typing in an input field, or hovering over an element.

- What is an "event handler"? Which component declares the handler?
  React's event handling system involves attaching event handlers, 'onclick', to specific elements or components in the user interface. The component that declares the event handler is typically the one where the event is being listened for.

- How do you pass an event handler to a React component?

  1. Define the Event Handler Function
  2. Pass the Event Handler as a Prop
  3. Use the Event Handler in the Child Component

- What is the naming convention for event handlers?
  CamelCase

- What is an "event handler prop"? Which component declares the prop?
  An "event handler prop" in React refers to a prop that is passed from a parent component to a child component that contains a function that will be used as an event handler in the child component.

- What are some custom event handler props a component may wish to define?

  - onClick: For clickable elements like buttons or links, a component could define an onClick prop to respond to click events.
  - onSubmit: If the component contains a form, it might define an onSubmit prop to handle form submission.
  - onToggle: Components that can be toggled on and off might define an onToggle prop to handle toggle events.
  - onHover: If the component should respond to hover events, it could define an onHover prop.
  - onFocus / onBlur: These props can be defined to handle focus and blur events for input fields or other focusable elements.
  - onLoad: For components that load data asynchronously, they might define an onLoad prop to signal when the data has been loaded.
  - onError: Similarly, an onError prop could be defined to handle error events that occur within the component.

- What is the naming convention for custom event handler props?
  "handle[ENTER REST OF NAME]"
