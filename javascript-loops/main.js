/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// defining a function called 'getNumbersToTen' with no parameters with a opening curly bracket
function getNumbersToTen() {
  const numbers = []; // assinging a empty array to 'numbers' variable
  let currentNumber = 1; // assinging '1' to 'currentNumber' variable

  while (currentNumber <= 10) {
    // while loop with the conditional expression that checks if 'currentNumber' is less than or equal to 10
    numbers.push(currentNumber); // the push method of the numbers object has one argument that arguement is 'currentNumber'
    currentNumber++; // incrementing 'currentNumber'
  } // closing curly bracket for while loop

  return numbers; // returning 'numbers' array
} // closing curly brackets for 'getNumbersToTen' function

// defining a function called 'getEvenNumbersToTwenty' with no parameters with a opening curly bracket
function getEvenNumbersToTwenty() {
  const evenNumbers = []; // assinging a empty array to 'evenNumbers' variable
  let currentNumbers = 2; // assinging '2' to 'currentNumbers' variable

  while (currentNumbers <= 20) {
    // while loop with the conditional expression that checks if 'currentNumbers' is less than or equal to 20
    evenNumbers.push(currentNumbers); // the push method of the 'evenNumbers' object has one argument that arguement is 'currentNumbers'
    currentNumbers += 2; // incrementing 'currentNumbers' by 2 and assigning that result to 'currentNumbers'
  } // closing curly bracket for while loop

  return evenNumbers; // returning 'evenNumbers' array
} // closing curly brackets for 'getEvenNumbersToTwenty' function

// defining a function called 'repeatWord' with two parameters 'word' and 'times'
function repeatWord(word, times) {
  let count = 1; // assinging '1' to 'count' variable
  let repeated = ''; // assignming a empty string to 'repeated' variable

  while (count <= times) {
    // while loop with the conditional expression that checks if 'count' is less than or equal to 'times'
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

// defining a function called 'doubleAll' with one parameter 'numbers'
function doubleAll(numbers) {
  const doubled = []; // assinging a empty array to 'doubled' variable
  for (let i = 0; i < numbers.length; i++) {
    // there is a 4 loop with the intital expression 0 is being assigned to i a conditional statement i < numbers and the final expression i incremented by 1
    doubled.push(numbers[i] * 2); // the push method of the 'doubled' object has one argument that arguement is 'numbers at i * 2 '
  } // closing curly bracket for the for loop
  return doubled; // returning doubled
} // closing curly bracket for doubleAll function

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  const values = [];

  for (const key in object) {
    values.push(object[key]);
  }

  return values;
}
