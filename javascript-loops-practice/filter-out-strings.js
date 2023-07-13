/* exported filterOutStrings */
function filterOutStrings(values) {
  let i = 0;
  while (i < values.length) {
    if (typeof values[i] === 'string') {
      values.splice(i, 1);
    } else {
      i++;
    }
  }
  return values;
}
