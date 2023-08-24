# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?
  React is a JavaScript library that helps developers build interactive and user-friendly parts of websites or web applications. It makes it easier to create and manage components that update and display data efficiently, providing a smooth and dynamic user experience.

- What is a React component?
  A React component is a reusable, self-contained piece of user interface (UI) that encapsulates a specific functionality or visual element. Components are the building blocks of a React application, allowing developers to break down the user interface into smaller, manageable pieces.

- How do you mount a React app (root component) to the DOM?
  Create the Root Component: First, you need to create your root component. This is the top-level component that represents your entire application.

  Locate the DOM Element: Choose a DOM element in your HTML where you want to mount your React app. This element will serve as the container for your app's UI.

  Render the Root Component: Use the ReactDOM.render() function from the react-dom library to render your root component into the chosen DOM element.

for JS:

```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

- What are some other popular frontend frameworks?
  Angular, vue.js, ect...
