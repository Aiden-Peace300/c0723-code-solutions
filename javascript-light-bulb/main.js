// assigning the value of querySelector method of the document object called with one argument a string to 'clickCountDisplay' constant

// Get the DOM element with the class name 'circle' and assign it to the '$circle' constant.
const $circle = document.querySelector('.circle');

// Get the DOM element with the class name 'container' and assign it to the '$container' constant.
const $container = document.querySelector('.container');

// the addEventListener method of the '$circle' object calls two arguments a string and 'handleOffOrOn' function
// Add an event listener to the '$circle' element.
// When the 'click' event occurs on the circle, the 'handleOffOrOn' function will be executed.
$circle.addEventListener('click', handleOffOrOn);

// Function to handle the 'click' event on the circle element.
function handleOffOrOn(event) {
  // Toggle the 'dark-circle' class on the '$circle' element.
  // If the 'dark-circle' class is already present, dark-circle will be removed; otherwise, it will be added.
  // This allows switching between the light and dark circle styles.
  $circle.classList.toggle('dark-circle');

  // Toggle the 'dark-body-class' class on the '$container' element.
  // If the 'dark-body-class' class is already present, dark-body-class will be removed; otherwise, it will be added.
  // This allows switching between the light and dark body styles.
  $container.classList.toggle('dark-body-class');
}
