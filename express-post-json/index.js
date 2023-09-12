import express from 'express';

const app = express();

const grades = {};

app.get('/api/grades', (req, res) => {
  // Convert the grades object to an array of values
  const response = Object.values(grades);
  res.json(response);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  // Assign a new id and add the grade to the grades object
  res.status(201).json(newGrade);
  app.get(newGrade);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
