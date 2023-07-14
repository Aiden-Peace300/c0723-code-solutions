/* exported dropRight */
function dropRight(array, count) {
  const items = array.slice(0, -count);
  return items;
}
