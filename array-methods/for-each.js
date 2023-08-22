const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In Order:');
values.forEach((element) => console.log(element));

const reverseArr = [];

console.log('Reverse Order:');
values.forEach((element) => {
  reverseArr.unshift(element);
});

reverseArr.forEach((element) => console.log(element));
