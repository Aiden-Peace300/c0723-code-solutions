const $countdownDisplay = document.querySelector('.countdown-display');

let i = 4;
let j = 1000;

// lines 7-18 time complexity worst case senario is O(1)
const limitedInterval = setInterval(() => {
  $countdownDisplay.innerHTML = `${--i}`;

  if (i === 0) {
    // O(1)
    $countdownDisplay.innerHTML = `~Earth Beeeelooowww Us~`;
    clearInterval(limitedInterval);
  }

  if (j <= 4000) {
    // O(1)
    j += 1000;
  }
}, j);
