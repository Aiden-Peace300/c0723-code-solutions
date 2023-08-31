# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  Components are independent and reusable bits of code. So knowing this we should create a function or class doing this will encapsulates a piece of the UI and its behavior, allowing you to create reusable and modular UI elements

- How do you use JSX in a React component?
  Use Props and Components: You can pass props to your components using JSX attributes. JSX also allows you to use other React components within your component's render function.

```javascript
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```

- How do you declare the props a React component needs?
  you can declare the props a component needs by specifying a parameter in the functional component or by using a class component's this.props object.

- How do you pass props to a React component?
  Pass Props: When using the component in JSX, include attributes with values to pass the props.

- How do you include JavaScript expressions in JSX?
  n JSX, you can include JavaScript expressions by enclosing them in curly braces {}. This allows you to dynamically insert values, perform calculations, and use variables within your JSX elements.

- What are React hooks and what are the three "Rules of Hooks"?
  React hooks are functions that allow you to use state and lifecycle features in functional components without needing to write a class component.

  1. Only Call Hooks need to start with USE-followed by uppercase!
  2. Only Call Hooks from React Functions
  3. Hooks can only be called within a component or another hook

- How do you manage state in a React component?

  1. Import useState:

  - Import the useState hook from 'react'.

  2. Declare State:

  - Inside your component, use the useState hook to declare a state variable and its initial value.

  3. Use State and Setter:

  - Access the state value and its setter function. Modify the state with the setter to trigger re-renders.

- How do you handle events in React?

  1. Define Function: Create a function to handle the event.
  2. Attach Handler: Attach the function to the JSX element using event attributes (e.g., onClick, onChange).
  3. React to Event: In the function, update state or perform actions as needed.

- How do you let a parent component know that an event happened?
  Define a callback function in the parent and pass it as a prop to the child.
