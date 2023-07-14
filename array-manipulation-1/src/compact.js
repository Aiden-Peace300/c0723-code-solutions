/* exported compact */
function compact(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    /* "In JavaScript, a truthy value is a value that is
  considered true when encountered in a Boolean context.
  All values are truthy unless they are defined as falsy.
  That is, all values are truthy except false, 0, -0, 0n,
  "", null, undefined, and NaN."

  https://developer.mozilla.org/en-US/docs/Glossary/Truthy

  */
    if (array[i]) {
      // for true values only
      newArray.push(array[i]);
    }
  }

  return newArray;
}
