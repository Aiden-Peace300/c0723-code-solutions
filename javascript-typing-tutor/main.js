// selects the all HTML element with the class "text-content span" and assigns it to the variable "$textSpans" using JavaScript.
// IMPORTANT when using querySelectorAll method we are dealing with array type objects
const $textSpans = document.querySelectorAll('.text-content span');
console.log($textSpans);

// declared to keep index of where we are in '$textSpan'
let currentIndex = 0;

function keydownEventFunction(event) {
  // when currentIndex is less than $textSpans.length
  if (currentIndex < $textSpans.length) {
    /*
      currentSpan hold the HTML element at the
       current index 'currentIndex' in the '$textSpans' NodeList
       EXAMPLE FOR EXPECTED FIRST OUTPUT:
       <span class="greenChar">g</span>
    */
    const currentSpan = $textSpans[currentIndex];

    // typedChar captures the key value of the keyboard event
    // will hold what ever string character the user typed on the keyboard
    const typedChar = event.key;

    /*************************************************************/
    /* IMPORTANT: THIS IS TO "RESET" THE TAG STYLING EACH
       removing the CSS class "greenChar" to the currentSpan
       and red element. ---> MAINLY FOR CHARACTER THE USER TYPES
       WRONG BUT THEN CORRECTS CHARACTER */
    currentSpan.classList.remove('greenChar');

    // removing the CSS class "redChar" to the currentSpan element.
    currentSpan.classList.remove('redChar');

    /*************************************************************/
    // if the text content inside the currentSpan tag is
    // strictly equal to the character the user typed
    if (currentSpan.textContent === typedChar) {
      // adding the CSS class "greenChar" to the currentSpan element.
      currentSpan.classList.add('greenChar');
      const boarderPosition = currentIndex + 1;

      // iterating though textSpans NodeList and
      // if the index i is not equal to boarderPosition
      // then dont have a boarder there!
      for (let i = 0; i < $textSpans.length; i++) {
        if (i !== boarderPosition) {
          // removing the CSS class "bottomBorder" to the currentSpan element.
          $textSpans[i].classList.remove('bottomBorder');

          // removing the CSS class "redBottomBorder" to the currentSpan element.
          currentSpan.classList.remove('redBottomBorder');
        }
      }

      // if boarderPosition is less than the total
      // number of elements in the $textSpans NodeList
      // then WE NEED to apply the bottom border
      // styling to the character right after the one
      // the user is currently typing.
      if (boarderPosition < $textSpans.length) {
        // assigning nextSpan to $textSpans boarderPosition
        const nextSpan = $textSpans[boarderPosition];
        // adding the CSS class "bottomBorder" to the currentSpan element.
        nextSpan.classList.add('bottomBorder');
      }

      currentIndex++; // incrementing currentIndex
    } else {
      // adding the CSS class "redChar" to the currentSpan element.
      currentSpan.classList.add('redChar');

      // adding the CSS class "redBottomBorder" to the currentSpan element.
      currentSpan.classList.add('redBottomBorder');
    }
  }
}

// adding listener to the entire document object, listing for
// 'keydown' event when the event occurs then will execute the
// 'keydownEventFunction' function
document.addEventListener('keydown', keydownEventFunction);
