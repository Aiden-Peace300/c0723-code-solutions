import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const argv = process.argv.slice(2);
const operation = argv[1];
const number1 = parseInt(argv[0]);
const number2 = parseInt(argv[2]);
if (operation === 'plus') {
  const sum = add(number1, number2);
  console.log('result:', sum);
} else if (operation === 'minus') {
  const sum = subtract(number1, number2);
  console.log('result:', sum);
} else if (operation === 'times') {
  const sum = multiply(number1, number2);
  console.log('result:', sum);
} else if (operation === 'over') {
  const sum = divide(number1, number2);
  console.log('result:', sum);
} else {
  console.log('Invalid Operation');
}
