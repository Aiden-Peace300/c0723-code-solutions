const firstNum = 96;
const secondNum = 76;
const thirdNum = 8;

const maxResult = Math.max(firstNum, secondNum, thirdNum);

console.log('maximumValue:', maxResult);

const heroes = ['Miles Morales', 'Killua Zoldyck', 'Clark Kent', 'Mugen'];

const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
const randomHero = heroes[randomIndex];

console.log('randomIndex:', randomIndex);
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },
  {
    title: '1984',
    author: 'George Orwell',
  },
  {
    title:
      'Cracking the Coding Interview: 150 Programming Questions and Solutions',
    author: 'Gayle Laakmann McDowell',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log(library);

const fullName = 'Aiden Peace';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const sayMyName = firstAndLastName[0].toUpperCase();
console.log('sayMyName:', sayMyName);
