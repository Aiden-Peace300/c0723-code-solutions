# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When the component gets successfully inserted into the DOM, the component is at that moment mounted.

- What is a React Effect?
  React, an "effect" typically refers to the concept of a "side effect" in the lifecycle of a component. React Effects are a way to perform tasks that have side effects, such as data fetching, DOM manipulation, or setting up subscriptions, in a React component.

- When should you use an Effect and when should you not use an Effect?

  Use React effects (useEffect) when your component needs to do any asynchronous operations.

  Use an Effect When:

  - Performing Data Fetching: When you need to fetch data from an API, a database, or any external source, you should use an effect.
  - DOM Manipulation: When you need to manipulate the DOM, such as adding or removing elements or altering styles, use an effect. This ensures that the DOM manipulation occurs after the initial render.

  Avoid Using an Effect When:

  - Handling Local State Updates: If you need to manage local state within your component and don't require any asynchronous operations or side effects, you might not need an effect. Use React's state management mechanisms like useState instead.
  - Simple Render Logic: For simple rendering logic that doesn't involve side effects, there's no need for an effect. Just return the JSX directly from the functional component.

- When do Effects run?
  useEffect runs by default after every render of the componen

- What function is used to declare an Effect?
  `useEffect` function

```javascript
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Code for the effect (e.g., data fetching, subscriptions, DOM manipulation)
  }, []); // Dependency array (optional)
}
```

- What are Effect dependencies and how do you declare them?
  Dependencies help you control when the effect runs and ensure that it runs in response to specific changes in your component's state or props.

  To declare effect dependencies in React, you pass an array as the second argument to the useEffect function. This array contains the variables or values that the effect depends on.

```javascript
import React, { useEffect, useState } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
  }, [count, props.someProp]); // Dependency array with 'count' and 'props.someProp'
}
```

- Why would you want to clean up from an Effect?
  To Prevent Memory leaks and Avoid unwanted side effects

- How do you clean up from an Effect?
  To clean up from a React effect, you can return a cleanup function from within the effect itself.

- When does the cleanup function run?
  This cleanup function will be executed when the component unmounts or when any of the dependencies specified in the dependency array changes!

## Notes

Render and Commit: https://react.dev/learn/render-and-commit

- Any screen update in a React app happens in three steps:

  - Trigger -> Triggering a render (delivering the guest’s order to the kitchen)
  - Render -> Rendering the component (preparing the order in the kitchen)
  - Commit -> Committing to the DOM (placing the order on the table)

- Define a React component that, when mounted, fetches data from a specified URL and logs the data:

```javascript
export default function MyComponent() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('url');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
}
```

links:
Synchronizing with Effects: https://react.dev/learn/synchronizing-with-effects
useEffect: https://react.dev/reference/react/useEffect
