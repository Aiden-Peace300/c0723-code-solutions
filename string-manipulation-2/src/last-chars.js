/* exported lastChars */
function lastChars(length, string) {
  let result = '';

  if (string.length < length || string.length >= length) {
    result = string.slice(-length);
  }

  return result;
}
