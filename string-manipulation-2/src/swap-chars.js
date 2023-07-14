/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const newString = string;
  let result = '';
  for (let i = 0; i < newString.length; i++) {
    if (i === firstIndex) {
      result += newString[secondIndex];
    } else if (i === secondIndex) {
      result += newString[firstIndex];
    } else {
      result += newString[i];
    }
  }
  return result;
}
