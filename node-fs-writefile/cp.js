import { writeFile, readFile } from 'node:fs/promises';

const argv = process.argv.slice(2);
try {
  const content = await readFile(argv[0], 'utf8');
  await writeFile(argv[1], content.toString());
} catch (err) {
  console.error('Error reading file:', err);
}
