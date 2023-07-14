/* exported toObject */
function toObject(keyValuePair) {
  const [key, value] = keyValuePair;
  const obj = {};
  obj[key] = value;
  return obj;
}
