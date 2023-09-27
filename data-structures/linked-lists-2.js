import LinkedList from './lib/linked-list';

export function getLength(list) {
  let temp = list;
  let count = 0;
  while (temp != null) {
    count++;
    temp = temp.next;
  }
  return count;
}

export function append(list, value) {
  const newNode = new LinkedList(value);

  if (list === null) {
    return newNode;
  }

  // IMPORTANT: current is a reference to the same object
  // that list points to in memory!
  let current = list;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
}

export function getTail(list) {
  if (list === null) {
    return null;
  }

  let current = list;

  while (current.next !== null) {
    current = current.next;
  }

  return current.data;
}

export function includes(list, value) {
  let current = list;

  while (current != null) {
    if (current.data === value) {
      return true;
    }
    current = current.next;
  }
  return false;
}
