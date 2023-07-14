/* exported firstChars */
function firstChars(length, string) {
  let result = '';
  if (string === '') {
    return result;
  }

  if (string.length < length) {
    for (let i = 0; i < string.length; i++) {
      result += string[i];
    }
  } else if (string.length >= length) {
    for (let i = 0; i < length; i++) {
      result += string[i];
    }
  }
  return result;
}
