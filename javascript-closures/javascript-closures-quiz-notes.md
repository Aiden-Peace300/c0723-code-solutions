# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  The accessibility of variables is determined by their location in the code.
  So, the scope in JavaScript is determined at compile time

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closures allow a function to access variables from an enclosing scope even after the execution of that scope has ended.

- What values does a closure contain?
  closures do not store static values. Instead, they store references to the variables present inside the scope chain.

- When is a closure created?
  In JavaScript, closures are created every time a function is created, at function creation time.

- How can you tell if a function will be created with a closure?
  when you notice that a function has one or more functions inside it!

- In React, what is one important case where you need to know if a closure was created?
  watching out for stale Closures!

  Stale Closures:
  A stale closure happens when a closure "captures" a variable but is not updated when that variable changes. Since closures capture variables, you would think that the function always accesses the up-to-date value. However, this will only be true if the variable that the closure captured changes. It is easy to miss when a closure accidentally captures a variable that is no longer in scope.

## Notes

Links:
I never understood JavaScript closures: https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8

You Don't Know Js:
Book: https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed
Chapter 7: Using Closures: https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md

useCallback: https://react.dev/reference/react/useCallback
