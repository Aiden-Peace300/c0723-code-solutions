import { writeFile } from 'node:fs/promises';

const randomNum = Math.random();
const text = randomNum + '\n';
try {
  await writeFile('./random.txt', text);
  console.log(randomNum);
} catch (err) {
  console.error('Error reading file:', err);
}
