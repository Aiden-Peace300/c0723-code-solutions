import { readFile } from 'node:fs/promises';

try {
  const content = await readFile('./dijkstra.txt', 'utf8');
  console.log(content);
} catch (err) {
  console.error('Error reading file:', err);
}
