import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const argv = process.argv.slice(2);

if (argv[1] === 'plus') {
  const sum = add(parseInt(argv[0]), parseInt(argv[2]));
  console.log('result:', sum);
} else if (argv[1] === 'minus') {
  const sum = subtract(parseInt(argv[0]), parseInt(argv[2]));
  console.log('result:', sum);
} else if (argv[1] === 'times') {
  const sum = multiply(parseInt(argv[0]), parseInt(argv[2]));
  console.log('result:', sum);
} else if (argv[1] === 'over') {
  const sum = divide(parseInt(argv[0]), parseInt(argv[2]));
  console.log('result:', sum);
} else {
  console.log('Invalid Operation');
}
