import { readFile } from 'node:fs/promises';

const args = process.argv.at(-1);

try {
  const data = await readFile(Buffer.from(args), {
    encoding: 'utf8',
  });
  console.log(data);
} catch (err) {
  console.error('Error reading file:', err);
}
