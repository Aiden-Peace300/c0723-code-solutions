/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

// defining a function called 'isUnderFive' with one parameter called number with a opening curly bracket
function isUnderFive(number) {
  if (number < 5) {
    return true; // returning the boolean data type 'true'
  } else {
    // closing curly brace for if code block
    return false; // returning the boolean data type 'false'
  } // closing else curly brace
}

// the log method of the console object called with two arguments a string and 'isUnderFive()' function with 4 as the single arguement
console.log('isUnderFive(4):', isUnderFive(4));
// true

// the log method of the console object called with two arguments a string and 'isUnderFive()' function with 10 as the single arguement
console.log('isUnderFive(10):', isUnderFive(10));
// false

// the log method of the console object called with two arguments a string and 'isUnderFive()' function with 5 as the single arguement
console.log('isUnderFive(5):', isUnderFive(5));
// false

function isEven(number) {
  if (number % 2 === 0) {
    return true; // returning the boolean data type 'true'
  } else {
    // closing curly brace for if code block
    return false; // returning the boolean data type 'false'
  } // closing else curly brace
}

// the log method of the console object called with two arguments a string and 'isEven()' function with 4 as the single arguement
console.log('isEven(4):', isEven(4));
// true

// the log method of the console object called with two arguments a string and 'isEven()' function with 10 as the single arguement
console.log('isEven(10)', isEven(10));
// true

// the log method of the console object called with two arguments a string and 'isEven()' function with 5 as the single arguement
console.log('isEven(5)', isEven(5));
// false

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true; // returning the boolean data type 'true'
  } else {
    // closing curly brace for if code block
    return false; // returning the boolean data type 'false'
  } // closing else curly brace
}

// the log method of the console object called with two arguments a string and 'startsWithJ()' function with 'JavaScript' as the single arguement
console.log("startsWithJ('JavaScript'):", startsWithJ('JavaScript'));
// true

// the log method of the console object called with two arguments a string and 'startsWithJ()' function with 'PHP' as the single arguement
console.log("startsWithJ('PHP'):", startsWithJ('PHP'));
// false

// the log method of the console object called with two arguments a string and 'startsWithJ()' function with 'HTML' as the single arguement
console.log("startsWithJ('HTML'):", startsWithJ('HTML'));
// false

// the log method of the console object called with two arguments a string and 'startsWithJ()' function with 'Java' as the single arguement
console.log("startsWithJ('Java'):", startsWithJ('Java'));
// true

// the log method of the console object called with two arguments a string and 'startsWithJ()' function with 'Kotlin' as the single arguement
console.log("startsWithJ('Kotlin'):", startsWithJ('Kotlin'));
// false

// the log method of the console object called with two arguments a string and 'startsWithJ()' function with 'C#' as the single arguement
console.log("startsWithJ('C#'):", startsWithJ('C#'));
// false

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true; // returning the boolean data type 'true'
  } else {
    // closing curly brace for if code block
    return false; // returning the boolean data type 'false'
  } // closing else curly brace
}

// a new object literal is being assigned to 'bart' variable
const bart = {
  name: 'Bartholomew JoJo Simpson', // a string is being assigned to the name property
  age: 10, // a interger is being assigned to the age property
}; // closing code block

// the log method of the console object called with two arguments a string and 'isOldEnoughToDrink()' function with bart object as a single arguement
console.log('isOldEnoughToDrink(bart):', isOldEnoughToDrink(bart));
// false

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true; // returning the boolean data type 'true'
  } else {
    // closing curly brace for if code block
    return false; // returning the boolean data type 'false'
  } // closing else curly brace
}

// a new object literal is being assigned to 'homer' variable
const homer = {
  name: 'Homer Jay Simpson', // a string is being assigned to the name property
  age: 39, // a interger is being assigned to the age property
}; // closing code block

// the log method of the console object called with two arguments a string and 'isOldEnoughToDrive()' function with 'homer' object as a single arguement
console.log('isOldEnoughToDrive(homer):', isOldEnoughToDrive(homer));
// true

function isOldEnoughToDrinkAndDrive(person) {
  return false; // returning the boolean data type 'true'
}

// a new object literal is being assigned to 'lisa' variable
const lisa = {
  name: 'Lisa Marie Simpson', // a string is being assigned to the name property
  age: 8, // a interger is being assigned to the age property
}; // closing code block

// the log method of the console object called with two arguments a string and 'isOldEnoughToDrinkAndDrive()' function with 'homer' object as a single arguement
console.log(
  'isOldEnoughToDrinkAndDrive(lisa):',
  isOldEnoughToDrinkAndDrive(lisa)
);
// false

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
// the log method of the console object called with two arguments a string and 'categorizeAcidity()' function with '-1' object as a single arguement
console.log('categorizeAcidity(-1):', categorizeAcidity(-1));
// "invalid pH level"

// the log method of the console object called with two arguments a string and 'categorizeAcidity()' function with '14.0000001' object as a single arguement
console.log('categorizeAcidity(14.0000001):', categorizeAcidity(14.0000001));
// "invalid pH level"

// the log method of the console object called with two arguments a string and 'categorizeAcidity()' function with '7' object as a single arguement
console.log('categorizeAcidity(7):', categorizeAcidity(7));
// "neutral"

// the log method of the console object called with two arguments a string and 'categorizeAcidity()' function with '2' object as a single arguement
console.log('categorizeAcidity(2):', categorizeAcidity(2));
// "acid"

// the log method of the console object called with two arguments a string and 'categorizeAcidity()' function with '9' object as a single arguement
console.log('categorizeAcidity(9):', categorizeAcidity(9));
// "base"

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

// the log method of the console object called with two arguments a string and 'introduceWarnerBro()' function with 'yakko' object as a single arguement
console.log("introduceWarnerBro('yakko'):", introduceWarnerBro('yakko'));
// "We're the warner brothers!"

// the log method of the console object called with two arguments a string and 'introduceWarnerBro()' function with 'wakko' object as a single arguement
console.log("introduceWarnerBro('wakko'):", introduceWarnerBro('wakko'));
// "We're the warner brothers!"

// the log method of the console object called with two arguments a string and 'introduceWarnerBro()' function with 'dot' object as a single arguement
console.log("introduceWarnerBro('dot'):", introduceWarnerBro('dot'));
// "I'm cute~"

// the log method of the console object called with two arguments a string and 'introduceWarnerBro()' function with 'cody' object as a single arguement
console.log("introduceWarnerBro('cody'):", introduceWarnerBro('cody'));
// "Goodnight everybody!"

// the log method of the console object called with two arguments a string and 'introduceWarnerBro()' function with 'minerva' object as a single arguement
console.log("introduceWarnerBro('minerva'):", introduceWarnerBro('minerva'));
// "Goodnight everybody!"

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'Psycho';
    case 'drama':
      return 'Edward Scissorhands';
    case 'musical':
      return 'Highschool Musical';
    case 'sci-fi':
      return 'The Martian';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

// the log method of the console object called with two arguments a string and 'recommendMovie()' function with 'action' object as a single arguement
console.log("recommendMovie('action'):", recommendMovie('action'));
// "Die Hard"

// the log method of the console object called with two arguments a string and 'recommendMovie()' function with 'comedy' object as a single arguement
console.log("recommendMovie('comedy'):", recommendMovie('comedy'));
// "The Big Lebowski"

// the log method of the console object called with two arguments a string and 'recommendMovie()' function with 'random' object as a single arguement
console.log("recommendMovie('random'):", recommendMovie('random'));
// "Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi"
