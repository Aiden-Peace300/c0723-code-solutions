// assigning the value of querySelector method of the document object called with one argument a string to 'clickCountDisplay' constant
const $circle = document.querySelector('.cirle');

// the addEventListener method of the '$circle' object calls two arguments a string and 'handleOffOrOn' function
$circle.addEventListener('click', handleOffOrOn);

function handleOffOrOn() {
  document.querySelector('.circle').classList.toggle('dark-circle');
  document.querySelector('.body-class').classList.toggle('dark-body-class');
}
