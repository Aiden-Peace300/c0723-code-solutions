/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  const firstChar = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  return firstChar + restOfWord;
}
