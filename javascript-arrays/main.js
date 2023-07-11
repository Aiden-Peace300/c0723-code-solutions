// A new array literal is being assigned to 'colors' variable
const colors = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]); // the log method of the console object is being called with two arguments a string and 'colors' element at 0
console.log('value of colors[1]:', colors[1]); // the log method of the console object is being called with two arguments a string and 'colors' element at 1
console.log('value of colors[2]:', colors[2]); // the log method of the console object is being called with two arguments a string and 'colors' array element at 2
console.log('America is', colors[0] + ', ' + colors[1] + ', and ' + colors[2]); // the log method of the console object is being called with two arguments a sting and a concatnated string

colors[2] = 'green'; // assinging the string 'green' to 'colors' array at index 2
console.log('Mexico is', colors[0] + ', ' + colors[1] + ', and ' + colors[2]); // the log method of the console object is being called with two arguments a sting and a concatnated string
console.log('value of colors:', colors); // the log method of the console object is being called with two arguments a string and 'colors' array

// A new array literal is being assigned to 'students' variable
const students = ['John', 'Jack', 'Jacob', 'Jordan'];
const numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class.'); // the log method of the console object is being called with three arguments a string, numberOfStudents, and a string
console.log(
  'The last student in the array is',
  students[numberOfStudents - 1],
  '.'
); // the log method of the console object is being called with three arguments a string, accessing the index of 'students' array at [numberOfStudents], and a string
console.log(students); // the log method of the console object is being called with two arguments a string and 'students' array
