const $rightArrow = document.querySelector('.right-arrow');
const $leftArrow = document.querySelector('.left-arrow');
const $image = document.querySelector('#image');
const $circleIcon = document.querySelectorAll('.circle-icon');

const imageArray = [
  'images/001.png', // Bulbasaur
  'images/004.png', // Charmandor
  'images/007.png', // Squirtle
  'images/025.png', // Pikachu
  'images/039.png', // Jigglypuff
];

let setIntervalIndex = 0;
let loopInterval = setInterval(updateImageLoop, 3000);

function updateImageLoop() {
  $image.src = imageArray[setIntervalIndex];
  setIntervalIndex = (setIntervalIndex + 1) % imageArray.length;
}

// Clear the interval and restart the loop after the last image
function resetLoop() {
  clearInterval(loopInterval);
  updateImageLoop();
  loopInterval = setInterval(updateImageLoop, 3000);
}

// Call resetLoop to start over the loop after the last image
resetLoop();

let currentIndex = 0;

function updateImage() {
  $image.src = imageArray[currentIndex];
  updateCircles(currentIndex);
}

function updateCircles(activeIndex) {
  $circleIcon.forEach((circle, index) => {
    circle.classList.toggle('fa-solid', index === activeIndex);
    circle.classList.toggle('fa-regular', index !== activeIndex);
  });
}

function handleRightArrow() {
  currentIndex = (currentIndex + 1) % imageArray.length;
  updateImage();
}

function handleLeftArrow() {
  currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
  updateImage();
}

$rightArrow.addEventListener('click', handleRightArrow);
$leftArrow.addEventListener('click', handleLeftArrow);

// Initial image display
updateImage();
