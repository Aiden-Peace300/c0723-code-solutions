# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  start with "hook" also needs to be at top level in function
  Hooks in React are functions that allow you to "hook into" React state and lifecycle features from functional components.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks.

- What is the purpose of state in React?
  The purpose of state in React is to store and manage data that can change over time within a component.

- Why can't we just maintain state in a local variable?
  React's built-in state management provides automatic reactivity and optimized rendering when data changes, making it easier to manage dynamic user interfaces. Using local variables for state would require manual handling of updates and re-renders, leading to more complexity and potential issues.

- What two actions happen when you call a `state setter` function?
  State Updating & Componete Re-rendering

- When does the local `state variable` get updated with the new value?
  Once it gets recalled by parent function again
