import express from 'express';

const app = express();

// mounting json middleware
app.use(express.json());

const grades = {};

let nextId = 1;

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  // Assign a new id and add the grade to the grades object
  res.status(201).json(newGrade);
  nextId++;
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
