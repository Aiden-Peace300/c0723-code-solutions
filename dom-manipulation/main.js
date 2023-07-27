// Declare a variable to store the number of button clicks
// assigning 0 to clickCount
let numberOfClicks = 0;

// assigning the value of querySelector method of the document object called with one argument a string to 'button' constant
const $hotbutton = document.querySelector('.hot-button');
// assigning the value of querySelector method of the document object called with one argument a string to 'clickCountDisplay' constant
const $clickCount = document.querySelector('.click-count');

// Add an event listener to the button to track clicks
// the addEventListener method of the '$button' object calls two arguments a type string and 'handleMouseover' function
$hotbutton.addEventListener('click', handleHotButtonClick);

function handleHotButtonClick(event) {
  // Increment $clickCount variable
  numberOfClicks++;
  let temp;

  if (numberOfClicks < 4) {
    temp = 'cold';
  } else if (numberOfClicks < 7) {
    temp = 'cool';
  } else if (numberOfClicks < 10) {
    temp = 'tepid';
  } else if (numberOfClicks < 13) {
    temp = 'warm';
  } else if (numberOfClicks < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }

  // Update the click count display
  $hotbutton.className = 'hot-button ' + temp;
  $clickCount.textContent = 'Clicks: ' + numberOfClicks;
}
