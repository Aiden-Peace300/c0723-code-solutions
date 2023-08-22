const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In Order:');
values.forEach((element) => console.log(element));

const reverseArr = [];
for (let i = values.length - 1; i >= 0; i--) {
  reverseArr.push(values[i]);
}
console.log('Reverse Order:');
reverseArr.forEach((element) => console.log(element));
