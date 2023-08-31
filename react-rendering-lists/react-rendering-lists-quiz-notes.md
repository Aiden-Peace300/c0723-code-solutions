# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  we want to dynamically create a list when you notice the same property or element in a data stucture

- Why is it important for React components to be data-driven?
  allows us to use dynamic interact with the user interface so that the component can respond to changes

  data-driven means when changing data causes my browser to change

- Where in the component code would a list of React components typically be built?
  in the return statement

- What `Array` method is commonly used to create a list of React components?
  map()

- Why do components in a list need to have unique keys?
  key ensures that React can accurately track and update elements as they are added, removed, or reordered in the list.

- What is the best value to use as a "key" prop when rendering lists?
  The value of the key prop should be a unique identifier for each item in the list
