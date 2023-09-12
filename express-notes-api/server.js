import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const app = express();
app.use(express.json());

app.get('/api/notes/:id', async (req, res) => {
  // noteId holds the id that is a key in data.json
  const noteId = req.params.id;

  try {
    // Reading the JSON file and waiting for its response
    const data = JSON.parse(await readFile('./data.json', 'utf-8'));

    // Find the note with the specified ID in the data
    const foundNote = data.notes[noteId];

    if (!(noteId > 0)) {
      res.status(400).json({ message: 'Invalid note ID' });
    } else if (foundNote) {
      return res.status(200).json(foundNote);
    } else {
      res.status(200).json({ message: `Retrieved note with ID ${noteId}` });
    }
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/notes', async (req, res) => {
  const { content } = req.body;

  try {
    if (!content) {
      return res.status(400).json({ error: 'Content doesn\t exist' });
    }

    const data = JSON.parse(await readFile('./data.json', 'utf-8'));
    const newNoteId = data.nextId++;

    const newNote = {
      id: newNoteId,
      content,
    };

    data.notes[newNoteId] = newNote;

    await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8');

    res.status(201).json(newNote);
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
