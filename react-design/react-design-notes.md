# react-design-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the phases in the React design process?

  1. Starting from a UI mockup, identify pieces that would make good components
  2. Determine the UI state that must be held in the components and where that state should live.
  3. Determine the events (actions) that need to modify state, which child components they originate in, and how parent components should respond to them.

- How does data flow in React?
  state can only flow from parent to child, as props

- How can children components modify state in their parents?
  create a state handler function in the parent component and pass it as a prop of the child component.
