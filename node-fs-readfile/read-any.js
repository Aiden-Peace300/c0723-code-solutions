import { readFile } from 'node:fs/promises';

const args = process.argv.at(-1);

try {
  const content = await readFile(args, 'utf8');
  console.log(content);
} catch (err) {
  console.error('Error reading file:', err);
}
