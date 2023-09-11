import { readFile } from 'node:fs/promises';

const args = process.argv.slice(2);

const promises = args.map(async (filePath) => {
  try {
    const data = await readFile(filePath, {
      encoding: 'utf8',
    });
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
});

Promise.all(promises)
  .then(() => {
    console.log('All files have been processed.');
  })
  .catch((err) => {
    console.error('Error reading files:', err);
  });
