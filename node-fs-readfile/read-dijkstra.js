import { readFile } from 'node:fs/promises';

try {
  const data = await readFile(Buffer.from('./dijkstra.txt'), {
    encoding: 'utf8',
  });
  console.log(data);
} catch (err) {
  console.error('Error reading file:', err);
}
