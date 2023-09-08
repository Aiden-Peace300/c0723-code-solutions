import { readFile } from 'node:fs/promises';

const argVar = process.argv.at(-1);

if (argVar === 'read') {
  try {
    const content = await readFile('./data.json', 'utf8');
    const data = JSON.parse(content);
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
