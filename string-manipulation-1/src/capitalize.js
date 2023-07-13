/* exported capitalize */
function capitalize(word) {
  const firstLetter = word[0]; // Assigning the first character of the 'word' to the 'firstLetter' variable

  const firstLetterCap = firstLetter.toUpperCase(); // Converting the first letter to uppercase and assigning it to the 'firstLetterCap' variable

  const remainingLetters = word.slice(1).toLowerCase(); // Extracting the remaining letters of the 'word' starting from index 1 and assigning it to the 'remainingLetters' variable

  const capitalizedWord = firstLetterCap + remainingLetters; // Concatenating the capitalized first letter with the remaining letters to form the 'capitalizedWord' variable

  return capitalizedWord; // Returning the resulting capitalized word
}
