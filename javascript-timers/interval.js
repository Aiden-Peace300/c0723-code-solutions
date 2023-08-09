const $countdownDisplay = document.querySelector('.countdown-display');

let i = 4;

// lines 7-18 time complexity worst case senario is O(1)
const limitedInterval = setInterval(() => {
  $countdownDisplay.textContent = `${--i}`;

  // O(1)
  if (i === 0) {
    $countdownDisplay.textContent = `~Earth Beeeelooowww Us~`;
    clearInterval(limitedInterval);
  }
}, 1000);
