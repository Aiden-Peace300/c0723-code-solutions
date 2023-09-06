# node-process-argv-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
  A 'process' object is a global object, so it can be accessed from anywhere which is an instance of EventEmitter and can be accessed directly.

- How do you access the `process` object in a Node.js program?
  It can also be explicitly accessed using module global i.e. require. const process = require('process'); process object has a property 'argv' which is an array containing the properties passed to node process.

- What is the data type of `process.argv` in Node.js?
  process. argv is a property that holds an array of command-line values provided when the current process was initiated.

- How do you access the command line arguments in a Node.js program?

```javascript
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
```

```javascript
const args = process.argv.at(-1);
console.log(args);
```
