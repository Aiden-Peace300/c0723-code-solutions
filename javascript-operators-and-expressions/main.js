const width = 4; // the integer '4' is being assigned to 'width'
const height = 7; // the integer '7' is being assigned to 'height'
const area = width * height; // the expression 'width * height' value is being assigned to 'area'

console.log('value of area:', area); // the log method of the console object is being called with 2 arguments a string and 'area'
console.log('typeof area:', typeof area); // the log method of the console object is being called with 2 arguments a string and typeof 'area'

const bill = 4.5; // the integer '10' is being assigned to 'height'
const payment = 10; // the float '4.5' is being assigned to 'payment'

const change = payment - bill; // the expression 'bill - payment' value is being assigned to 'area'

console.log('value of change:', change); // the log method of the console object is being called with 2 arguments a string and 'change'
console.log('typeof change:', typeof change); // the log method of the console object is being called with 2 arguments a string and typeof 'change'

const quizzes = 85; // the integer '85' is being assigned to 'quizzes'
const midterm = 92; // the integer '92' is being assigned to 'midterm'
const final = 95; // the integer '95' is being assigned to 'final'

const grade =
  (quizzes + midterm + final) /
  3; /* the expression adding the values of 'tests', 'assignments', and 'final', and
                                                  then dividing the sum by 3. The result is assigned to the variable 'grade' */
console.log(
  'value of grade:',
  Math.floor(grade)
); /* the log method of the console object is being called with 2 arguments a
                                                       string and floor method of Math object with the argument 'grade' */
console.log('typeof grade:', typeof grade); // the log method of the console object is being called with 2 arguments a string and typeof 'grade'

const firstName = 'Aiden'; // the string 'Aiden' is being assigned to 'firstName'
const lastName = 'Peace'; // the string 'Peace' is being assigned to 'lastName'
const fullName = firstName + ' ' + lastName; // the concatnated string is being assigned to 'fullName'

console.log('value of fullName:', fullName); // the log method of the console object is being called with 2 arguments a string and 'fullName'
console.log('typeof fullName:', typeof fullName); // the log method of the console object is being called with 2 arguments a string and typeof 'fullName'

const pH = 6; // the integer '6' is being assigned to 'pH'
const isAcidic = pH < 7; /* the expression is pH less than 7 and assigns
                                   the boolean result to 'isAcidic'. */

console.log('value of isAcidic:', isAcidic); // the log method of the console object is being called with 2 arguments a string and 'isAcidic'
console.log('typeof isAcidic:', typeof isAcidic); // the log method of the console object is being called with 2 arguments a string and typeof 'isAcidic'

const headCount = 200; // the integer '200' is being assigned to 'headCount'
const isSparta =
  headCount === 300; /* the expression is headCount strictly equal to 300
                                       and assigns the boolean result to 'isSparta'. */

console.log('value of isSparta:', isSparta); // the log method of the console object is being called with 2 arguments a string and 'isSparta'
console.log('typeof isSparta:', typeof isSparta); // the log method of the console object is being called with 2 arguments a string and typeof 'isSparta'

let motto = fullName; // a concatnated string is assigned to 'motto'
motto += ' is the GOAT!';

console.log('value of motto:', motto); // the log method of the console object is being called with 2 arguments a string and 'motto'
console.log('typeof motto:', typeof motto); // the log method of the console object is being called with 2 arguments a string and typeof 'motto'
