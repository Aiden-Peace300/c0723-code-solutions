import LinkedList from './lib/linked-list';

export function getHead(list) {
  return list.data;
}

export function updateHead(list, value) {
  const newHead = (list.data = value);
}

export function withoutHead(list) {
  return list.next;
}

export function prepend(list, value) {
  const newLinked = new LinkedList(value);
  newLinked.next = list;
  return newLinked;
}
