import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Middleware to send a response with a string
app.use((req, res, next) => {
  res.send('Hello, World!');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
