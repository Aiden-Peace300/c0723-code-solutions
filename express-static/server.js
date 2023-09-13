import express from 'express';

const app = express();

// Serving static files from the 'public' directory
app.use(express.static('public'));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
