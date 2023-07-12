const firstNum = 96; // assigning '96' to the 'firstNum' variable
const secondNum = 76; // assigning '96' to the 'firstNum' variable
const thirdNum = 8; // assigning '96' to the 'firstNum' variable

const maxResult = Math.max(firstNum, secondNum, thirdNum);

// the log method of the console object calls two arguments a string and 'maxResult' variable
console.log('maximumValue:', maxResult);

// declaring 'heros' variable and assigning it to an array of stings
const heroes = ['Miles Morales', 'Killua Zoldyck', 'Clark Kent', 'Mugen'];

// the result of the expression random method of the Math object times the length property of 'heros' array to 'randomNumber'
const randomNumber = Math.random() * heroes.length;

// the result of the floor method of the Math object that calls one argument which is 'randomIndex'
const randomIndex = Math.floor(randomNumber);

// the result of 'heroes' at 'randomIndex'
const randomHero = heroes[randomIndex];

// the log method of the console object calls two arguments a string and 'randomIndex' variable
console.log('randomIndex:', randomIndex);

// the log method of the console object calls two arguments a string and 'randomHero' variable
console.log('randomHero:', randomHero);

// declaring 'library' variable and assigning it to an array of objects
const library = [
  {
    title: 'Brave New World', // a string is being assigned to the 'title' property
    author: 'Aldous Huxley', // a string is being assigned to the 'author' property
  },
  {
    title: '1984', // a string is being assigned to the 'title' property
    author: 'George Orwell', // a string is being assigned to the 'author' property
  },
  {
    title:
      'Cracking the Coding Interview: 150 Programming Questions and Solutions', // a string is being assigned to the 'title' property
    author: 'Gayle Laakmann McDowell', // a string is being assigned to the 'author' property
  },
];

// assigning the result of the pop method of the library object calls no argument to 'lastBook'
const lastBook = library.pop();
// the log method of the console object calls two arguments a string and 'lastBook' variable
console.log('lastBook:', lastBook);

// assigning the result of the shift method of the library object calls no argument to 'firstBook'
const firstBook = library.shift();
// the log method of the console object calls two arguments a string and 'firstBook' variable
console.log('firstBook:', firstBook);

// declaring 'js' object
const js = {
  title: 'JavaScript for Impatient Programmers', // a string is being assigned to the 'title' property
  author: 'Dr. Axel Rauschmayer', // a string is being assigned to the 'author' property
};

// declaring 'css' object
const css = {
  title: 'CSS Secrets', // a string is being assigned to the 'title' property
  author: 'Lea Verou', // a string is being assigned to the 'author' property
};

// the push method of the library object calls one argument which is 'js' object
library.push(js);
// the unshift method of the library object calls one argument which is 'css' object
library.unshift(css);
// the splice method of the library object calls two argument which is '1' and '1'
library.splice(1, 1);
// the log method of the console object calls one argument 'library' variable
console.log(library);

// assigning a string to 'fullName' variable
const fullName = 'Aiden Peace';

// assigning the result split method of the fullName variable to 'firstAndLastName'
const firstAndLastName = fullName.split(' ');
// assigning a string to 'firstAndLastName' variable
console.log('firstAndLastName:', firstAndLastName);

// assigning the result toUpperCase method of the firstAndLastName variable at 0
const sayMyName = firstAndLastName[0].toUpperCase();
// assigning a string to 'sayMyName' variable
console.log('sayMyName:', sayMyName);
