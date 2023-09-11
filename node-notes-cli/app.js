import { readFile, writeFile } from 'node:fs/promises';

const argVar = process.argv[2];
const content = process.argv[3];
const content2 = process.argv[4];

if (argVar === 'read' && content === undefined) {
  try {
    const response = await readFile('./data.json', 'utf8');
    const data = JSON.parse(response);
    if (data && data.notes) {
      for (const key in data.notes) {
        const noteValue = data.notes[key];
        console.log(`${key}: ${noteValue}`);
      }
    } else {
      console.error(
        'Invalid JSON format or missing "notes" object in the file.'
      );
    }
  } catch (err) {
    console.log(err.message);
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

if (argVar === 'delete' && content !== undefined) {
  try {
    // Read the existing data from the file
    const response = await readFile('./data.json', 'utf8');
    const data = JSON.parse(response);

    // delete from data structure
    delete data.notes[content];

    // Write the updated data back to the file
    await writeFile('./data.json', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error reading or parsing the file:', err);
  }
}

if (argVar === 'update' && content !== undefined) {
  try {
    // Read the existing data from the file
    const response = await readFile('./data.json', 'utf8');
    const data = JSON.parse(response);

    // Check if 'data' exists and has a the property the user typed
    if (data && !Object.getOwnPropertyDescriptor(data.notes, content2)) {
      // delete from data structure
      data.notes[content] = content2;

      // Write the updated data back to the file
      await writeFile('./data.json', JSON.stringify(data, null, 2));
    } else {
      console.log("The id you provided isn't found");
    }
  } catch (err) {
    console.error('Error reading or parsing the file:', err);
  }
}
