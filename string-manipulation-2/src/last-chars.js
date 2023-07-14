/* exported lastChars */
function lastChars(length, string) {
  let result = '';

  if (string.length < length || string.length >= length) {
    result = string.slice(-length);
  }

  return result;
}

/* 
Alternative solution:
function lastChars(length, string) {
  const startIndex = Math.max(0, string.length - length);
  return string.slice(startIndex);
}
*/
