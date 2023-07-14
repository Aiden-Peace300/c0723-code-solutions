/* exported capitalizeWords */

function capitalizeWords(string) {
  const firstChar = string[0].toUpperCase();
  let result = firstChar;

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      if (string[i] === string[i].toUpperCase()) {
        result += string[i];
      } else {
        result += string[i].toUpperCase();
      }
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}
