import { readFile, writeFile } from 'node:fs/promises';

const argVar = process.argv[2];
const content = process.argv[3];

if (argVar === 'read' && content === undefined) {
  try {
    const response = await readFile('./data.json', 'utf8');
    const data = JSON.parse(response);
    if (data && data.notes) {
      for (const key in data.notes) {
        if (Object.getOwnPropertyDescriptor(data.notes, key)) {
          const noteValue = data.notes[key];
          console.log(`${key}: ${noteValue}`);
        }
      }
    } else {
      console.error(
        'Invalid JSON format or missing "notes" object in the file.'
      );
    }
  } catch (err) {
    console.error('Error reading or parsing the file:', err);
  }
}

if (argVar === 'create' && content !== undefined) {
  try {
    // Read the existing data from the file
    const response = await readFile('./data.json', 'utf8');
    const data = JSON.parse(response);

    // Check if 'data' exists and has a 'nextId' property
    if (data && data.nextId !== undefined) {
      // Create a new note entry
      const newNoteId = data.nextId;
      data.notes[newNoteId] = content;

      // Increment 'nextId'
      data.nextId++;

      // Write the updated data back to the file
      await writeFile('./data.json', JSON.stringify(data, null, 2));
    }
  } catch (err) {
    console.error('Error reading or parsing the file:', err);
  }
}
