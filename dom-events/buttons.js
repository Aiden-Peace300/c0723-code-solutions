// defining a function called 'handleClick' with one parameter called 'event' ... opening curly bracket
function handleClick(event) {
  // the log method of the console object calls one argument a string
  console.log('button clicked');
  // the log method of the console object calls two arguments a string and 'event' variable
  console.log('event: ', event);
  // the log method of the console object calls two arguments a string and 'target' property of the event object
  console.log('target property of the event object: ', event.target);
} // closing curly bracket

// defining a function called 'handleMouseover' with one parameter called 'event' ... opening curly bracket
function handleMouseover(event) {
  // the log method of the console object calls one argument a string
  console.log('button hovered');
  // the log method of the console object calls two arguments a string and 'event' variable
  console.log('event: ', event);
  // the log method of the console object calls two arguments a string and 'target' property of the event object
  console.log('target property of the event object: ', event.target);
} // closing curly bracket

// defining a function called 'handleDoubleClick' with one parameter called 'event' ... opening curly bracket
function handleDoubleClick(event) {
  // the log method of the console object calls one argument a string
  console.log('button double-clicked');
  // the log method of the console object calls two arguments a string and 'event' variable
  console.log('event: ', event);
  // the log method of the console object calls two arguments a string and 'target' property of the event object
  console.log('target property of the event object: ', event.target);
} // closing curly bracket

// the querySelector method of the document object calls one argument a string assigns it to the constant variable '$clickButton'
const $clickButton = document.querySelector('.click-button');
// the addEventListener method of the '$clickButton' object calls two arguments a type string and 'handleClick' function
$clickButton.addEventListener('click', handleClick);

// the querySelector method of the document object calls one argument a string assigns it to the constant variable '$hoverbutton'
const $hoverButton = document.querySelector('.hover-button');
// the addEventListener method of the '$hoverbutton' object calls two arguments a type string and 'handleMouseover' function
$hoverButton.addEventListener('mouseover', handleMouseover);

// the querySelector method of the document object calls one argument a string assigns it to the constant variable '$doubleClickButton'
const $doubleClickButton = document.querySelector('.double-click-button');
// the addEventListener method of the '$doubleClickButton' object calls two arguments a type string and 'handleDoubleClick' function
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
