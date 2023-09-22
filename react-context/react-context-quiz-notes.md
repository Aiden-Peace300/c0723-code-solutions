# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  its a way or read “teleport” data to the components in the tree that need it without passing props

  https://react.dev/learn/passing-data-deeply-with-context

- What values can be stored in context?
  Any value can be stored in Context React. However, it is important to note that the value should be immutable

- How do you create context and make it available to the components?
  Wrap the context provider around your component tree.

- How do you access the context values?
  By using the createContext method

- When would you use context? (in addition to the best answer: "rarely")
  - You want to share data with many components at different nesting levels.
  - You want to pass data from a parent component to a deep-level child component without passing it down through all intermediate components.
