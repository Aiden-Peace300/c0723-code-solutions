/* exported filterOutNulls */
function filterOutNulls(values) {
  let i = 0;
  while (i < values.length) {
    if (values[i] === null) {
      values.splice(i, 1);
    } else {
      i++;
    }
  }
  return values;
}
