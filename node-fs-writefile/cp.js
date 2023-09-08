import { writeFile, readFile } from 'node:fs/promises';

const [inFile, outFile] = process.argv.slice(2);
try {
  const content = await readFile(inFile);
  await writeFile(outFile, content.toString());
} catch (err) {
  console.error('Error reading file:', err);
}
