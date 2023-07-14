/* exported drop */
function drop(array, count) {
  const items = array.slice(count, array.length);
  return items;
}
