const $countdownDisplay = document.querySelector('.countdown-display');

let i = 4;
let j = 1000;

const limitedInterval = setInterval(() => {
  $countdownDisplay.innerHTML = `${--i}`;

  if (i === 0) {
    $countdownDisplay.innerHTML = `~Earth Beeeelooowww Us~`;
    clearInterval(limitedInterval);
  }

  if (j <= 4000) {
    j += 1000;
  }
}, j);
