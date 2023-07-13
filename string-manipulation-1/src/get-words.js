/* exported getWords */
function getWords(string) {
  /* The split method splits a string into an array of
     substrings based on a specified separator.
     In this case, the separator can be a space character. */
  const wordsArr = string.split(' ');

  if (string === '') {
    return [];
  }

  return wordsArr;
}
