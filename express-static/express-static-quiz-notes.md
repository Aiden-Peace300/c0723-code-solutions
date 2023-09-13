# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
  The Express Static middleware is used to serve static files such as HTML, CSS, JavaScript, images, and other assets in an Express.js application. Its main purpose is to simplify the process of serving these files to clients (e.g., web browsers) by mapping URL paths to corresponding files on the server's file system.

- What does `express.static()` return?
  `express.static()` returns a function that can be used as middleware. This function is designed to serve static files, and when called, it returns a middleware function.

```javascript
express.static(root, [options]);
```

- What are several examples of static files?
  static files such as HTML, CSS, JavaScript, images, and other assets in an Express.js application.

- What is a good way to serve application images using Express?
  you can use the express.static() middleware or create custom routes that handle image requests.

```javascript
// Serve images from the 'images' directory
app.use('/images', express.static('images'));
```

## Notes
