# react-custom-hooks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React custom hook?
  Custom hooks in React are reusable functions that developers can use to add unique functionality to React applications

- When are custom hooks useful? When are they not required?
  Custom Hooks are typically used for local component state management and can handle specific functionality, such as form validation or API calls. They promote code reuse and simplify the logic within components.

- What is the syntax (or naming convention) for writing a custom hook?
  The naming convention for custom hooks is as follows: Prefix with "use": Custom hooks should be prefixed with the word "use" to indicate that they are hooks. This convention helps distinguish custom hooks from regular functions and helps React apply the necessary rules and optimizations.

- How do you call a custom hook?
  Import your custom hook into the file where you want to implement it, and then use destructuring to obtain the variables and methods you need from your custom hook.

- When do custom hooks execute?
  Custom hooks execute each time you call them within a functional component.
