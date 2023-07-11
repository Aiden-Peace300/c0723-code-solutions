function convertMinutesToSeconds(minutes) {
  minutes *= 60;
  return minutes;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return height * width;
}

function getFirstName(person) {
  return person.fullName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('convertMinutesToSeconds:', convertMinutesToSeconds(5));
console.log('greet:', greet('Beavis'));
console.log('getArea:', getArea(17, 42));
console.log(
  'getFirstName:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);
console.log(
  'getLastElement:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
