# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  The queue, also referred to as message queue or task queue, is a waiting area for functions. Whenever the call stack is empty, the event loop will check the queue for any waiting messages, starting from the oldest message. Once it finds one, it will add it to the stack, which will execute the function in the message.

- What are the three states a Promise can be in?
  Three states of promises: Resolved, Reject, Pending

- How do you handle the fulfillment of a Promise?
  with a try statement

- How do you handle the rejection of a Promise?
  with a catch statement

```javascript
takeAChance('Aiden')
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });
```
