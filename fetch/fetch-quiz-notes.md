# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  fetch() a promise that can either be resolved or not
  fetch() does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

- What is the default request method used by `fetch()`?
  The default method of fetch() is GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`? use the second argument of the fetch method which will be a object and within that object create a property named `Method:` and assign the value to a string that will be `GET`, `POST`, `PUT`, `DELETE`, `UPDATE`, ect...

- How does `fetch` report errors?
  The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.
