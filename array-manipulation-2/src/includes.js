/* exported includes */
function includes(array, value) {
  const result = array;

  for (let i = 0; i <= array.length; i++) {
    if (result[i] === value) {
      return true;
    }
  }
  return false;
}
