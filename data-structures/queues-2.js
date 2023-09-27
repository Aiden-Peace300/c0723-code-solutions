import { isEmpty } from './queues-1';

export function postpone(queue) {
  if (queue.peek() === undefined) return undefined;
  queue.enqueue(queue.peek());
  queue.dequeue();
}

export function takeValueAtIndex(queue, index) {
  if (isEmpty(queue) === true) {
    return undefined;
  }

  for (let i = 0; i < index; i++) {
    const frontValue = queue.dequeue();
    queue.enqueue(frontValue);
  }

  return queue.dequeue();
}
