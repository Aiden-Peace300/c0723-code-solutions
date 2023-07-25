const button = document.querySelector('.hot-button');
const clickCountDisplay = document.querySelector('.click-count');

// Declare a variable to store the number of button clicks
let clickCount = 0;

// Add an event listener to the button to track clicks
button.addEventListener('click', () => {
  // Increment the click count when the button is clicked
  clickCount++;

  // Update the click count display
  clickCountDisplay.textContent = `Clicks: ${clickCount}`;

  if (clickCount < 4) {
    button.className = 'hot-button cold';
  } else if (clickCount < 7) {
    button.className = 'hot-button cool';
  } else if (clickCount < 10) {
    button.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    button.className = 'hot-button warm';
  } else if (clickCount < 16) {
    button.className = 'hot-button hot';
  } else {
    button.className = 'hot-button nuclear';
  }
});
