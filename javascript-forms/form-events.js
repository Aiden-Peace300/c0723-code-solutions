// defining a function called 'handleFocus' with one parameter called 'event' ... opening curly bracket
function handleFocus(event) {
  // the log method of the console object calls one argument a string
  console.log('focus event fired');
  // the log method of the console obqject calls two arguments a string and name property of taget object of event object
  console.log('event target: ', event.target.name);
}

// defining a function called 'handleFocus' with one parameter called 'event' ... opening curly bracket
function handleBlur(event) {
  // the log method of the console object calls one argument a string
  console.log('blur event fired');
  // the log method of the console object calls two arguments a string and name property of taget object of event object
  console.log('event target: ', event.target.name);
}

function handleInput(event) {
  console.log(`Value of name: ${event.target.value}`);
}

// the querySelector method of the document object calls one argument a string assigns it to the constant variable '$nameInput'
const $nameInput = document.querySelector('#user-name');
const $emailInput = document.querySelector('#user-email');
const $messageInput = document.querySelector('#user-message');

$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('input', handleInput);
$messageInput.addEventListener('input', handleInput);

$nameInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('focus', handleFocus);
$messageInput.addEventListener('focus', handleFocus);

$nameInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('blur', handleBlur);
$messageInput.addEventListener('blur', handleBlur);
