const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter((x) => x % 2 === 0);

console.log('Even Numbers', evenNumbers);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const namesWithoutD = names.filter((name) => {
  for (let i = 0; i < name.length; i++) {
    if (name.includes('D') || name.includes('d')) {
      return false; // Exclude names with 'D' or 'd'
    }
  }
  return true; // Include names without 'D' or 'd'
});

console.log('No D', namesWithoutD);
