/* exported filterOutStrings */
function filterOutStrings(values) {
  const result = [];
  let i = 0;
  while (i < values.length) {
    if (typeof values[i] === 'string') {
      values.splice(i, 1);
    } else {
      result.push(values[i]);
      i++;
    }
  }
  return result;
}
