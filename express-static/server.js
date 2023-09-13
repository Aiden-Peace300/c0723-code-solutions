import express from 'express';

const app = express();

// Serving static files from the 'public' directory
app.use(express.static('public'));

// Defining a route to serve files based on their names
app.get('/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  res.sendFile(fileName, { root: 'public' }, (err) => {
    if (err) {
      // Handling errors, such as file not found
      res.status(404).send('File not found');
    }
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
