/* exported chunk */
function chunk(array, value) {
  const result = [];

  if (array.length === 0) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (i % value === 0) {
      result.push([]);
    }
    result[result.length - 1].push(array[i]);
  }

  return result;
}
