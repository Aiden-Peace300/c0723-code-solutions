const $message = document.querySelector('.message');

// lines 4-6 time complexity worst case senario is O(1)
setTimeout(() => {
  $message.innerHTML = `Hello There`;
}, 5000);
