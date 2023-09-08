import { writeFile } from 'node:fs/promises';

const argv = process.argv.at(-1);

try {
  await writeFile('./note.txt', argv.toString());
} catch (err) {
  console.error('Error reading file:', err);
}
