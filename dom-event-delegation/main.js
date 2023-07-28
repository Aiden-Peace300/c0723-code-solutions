// the querySelector method of the document object calls one argument a string assigns it to the constant variable '$clickButton'
const $taskList = document.querySelector('.task-list');
const $doneButtom = document.querySelector('.done');

function handleClick(event) {
  // will output the tagName with text content
  //   OUTPUT EXAMPLE:
  //   event.target : <span>Learn to Code</span['>' HERE BUT WILL CAUSE WHITESPACE ERROR]

  console.log('event.target :', event.target);

  // outputting to console the tagName (element name) of which
  // the event.target fired.
  // OUTPUT EXAMPLE:
  // event.target.tagName : SPAN
  console.log('event.target.tagName :', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    const $closest = event.target.closest('.task-list-item');
    console.log('closest event.target :', $closest);

    if ($closest) {
      $closest.remove();
    }
  }
}
// the addEventListener method of the '$taskList' object calls two arguments a type string and 'handleClick' function
$taskList.addEventListener('click', handleClick);

// the addEventListener method of the '$taskList' object calls two arguments a type string and 'handleClick' function
$doneButtom.addEventListener('click', handleClick);
