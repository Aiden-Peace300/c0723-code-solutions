# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The `async` keyword means one simple thing: a function always returns a promise.
  The `await` keyword is used to indicate that the JavaScript Runtime should "wait" or "pause" until the asynchronous function completes.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async/await provides a more procedural syntax that makes asynchronous code look similar to synchronous code, with better error handling capabilities.

  The then keyword is used with Promises and allows you to specify what should happen after a Promise is fulfilled. On the other hand, the await keyword can only be used within an asynchronous function and suspends the execution of the function until the specified Promise is resolved.

- When do you use `async`?
  We should use async/await where possible, to minimize promise chaining

  We would wanna use `async` when the task that we are making will take to long and if you have any I/O-bound needs (such as requesting data from a network, accessing a database, or reading and writing to a file system

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Await function is used to wait for the promise function.
  Do not use await if you are not waiting for a promise function
  adding await has no effect whatsoever

- How do you handle errors with `await`?
  by implementing try-catch blocks within the async function

- What do `try`, `catch` and `throw` do? When do you use them?
  The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed.

```javascript
try {
  // Try to run this code
} catch (err) {
  // if any error, Code throws the error
} finally {
  // Always run this code regardless of error or not
  //this block is optional
}
```

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the code inside the promise will still run, but nothing will happen when you call resolve

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I perfer async/await because it looks like procedural syntax that makes asynchronous code look similar to synchronous code which looks like normal JS code beacuse JS is naturally asynchronous
