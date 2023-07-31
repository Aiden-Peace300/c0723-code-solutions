# javascript-local-storage-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you store data in `localStorage`?
  To store data in localStorage, we can use the localStorage.setItem() method provided by the web browser's localStorage object. The setItem() method allows us to save data in the form of key-value pairs.

---

- How do you retrieve data from `localStorage`?
  To retrieve data from localStorage, we can use the localStorage.getItem() method provided by the web browser's localStorage object. This method allows us to access the value associated with a specific key that we have previously stored using localStorage.setItem().

- What data type can `localStorage` save in the browser?
  localStorage can store data in the form of strings. It means that when you store data using localStorage.setItem(), the data will be converted to a string before being saved

- When does the `'beforeunload'` event fire on the `window` object?
  The 'beforeunload' event fires on the window object just before the user is about to leave the current webpage.

## Notes

Useful links:

- Window: localStorage property: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Storage: setItem() method : https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
- Window: beforeunload event: https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
- EventTarget: addEventListener() method: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- JSON.stringify(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
- Storage: setItem() method: https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
- Storage: getItem() method: https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
- Storage: getItem() method: https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
- JSON.parse(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
