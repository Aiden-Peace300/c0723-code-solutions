import { writeFile } from 'node:fs/promises';

const argv = process.argv.at(-1);
const text = argv + '\n';

try {
  await writeFile('./note.txt', text);
} catch (err) {
  console.error('Error reading file:', err);
}
