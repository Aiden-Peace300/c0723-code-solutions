import { isEmpty } from './stacks-1';

export function countValues(stack) {
  let count = 0;

  while (stack.peek() !== undefined) {
    stack.pop();
    count++;
  }

  return count;
}

export function maxValue(stack) {
  if (isEmpty(stack) === true) {
    return -Infinity;
  }

  let highest = stack.peek();
  stack.pop();

  while (isEmpty(stack) === false) {
    const current = stack.peek();
    if (current > highest) {
      highest = current;
    }
    stack.pop();
  }
  return highest;
}
