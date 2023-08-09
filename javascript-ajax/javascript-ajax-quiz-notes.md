# javascript-ajax-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is AJAX?
  AJAX just uses a combination of: A browser built-in XMLHttpRequest object (to request data from a web server) JavaScript and HTML DOM (to display or use the data)

  Allows us to have data come in without refreshing page!

- What does the AJAX acronym stand for?
  AJAX stands for (A)synchronous (J)avaScript (a)nd (X)ML

- Which object is built into the browser for making HTTP requests in JavaScript?
  XMLHttpRequest

- What event is fired by `XMLHttpRequest` objects when they are finished loading the data from the server?
  loadend: Fired when a request has completed, whether successfully (after load) or unsuccessfully (after abort or error). Also available via the onloadend event handler property.

  loadend: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

- **Bonus Question**: An `XMLHttpRequest` object has an `addEventListener()` method just like DOM elements. How is it possible that they both share this functionality?
  Both XMLHttpRequest objects and DOM elements have an addEventListener() method because they both interact with events in JavaScript. This method lets you specify functions to run when specific events occur, making it easier to build interactive and dynamic web applications.

  addeventlistener on the XMLHttpRequest is possiable using prototype chain because they where made with the same constructor

## Notes

No notes at this time
