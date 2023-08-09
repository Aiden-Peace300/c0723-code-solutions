# javascript-timers-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a "callback" function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
  By using the setTimeout() function. setTimeout() allows you to schedule the execution of a function after a specified delay in milliseconds.

- How can you set up a function to be called repeatedly without using a loop?
  By using the setInterval() function. setInterval() allows you to specify a function and a time interval in milliseconds. The function will be called at regular intervals defined by the time interval you provide, creating a repeating execution pattern without the need for a loop.

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
  the default time delay is 0 milliseconds.

- What do `setTimeout()` and `setInterval()` return?
  both will return a numeric non zer value

## Notes

- Difference between `setTimeout()` and `setInterval()`:
  setTimeout(): allows us to run a function once after the interval of time.
  setInterval(): allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval
