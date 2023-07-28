// This line of code selects the first HTML element with the class "tab-container" and assigns it to the variable "$tabContainer" using JavaScript.
const $tabContainer = document.querySelector('.tab-container');

// selects the first HTML element with the class "tab-container" and assigns it to the variable "$tabContainer" using JavaScript.
const $tabChildNodes = document.querySelectorAll('.tab');

// selects the All the HTML element with the class ".view" and assigns it to the variable "$ViewChildNodes" using JavaScript.
const $ViewChildNodes = document.querySelectorAll('.view');

// defining a function called handleClick()
function handleClick(event) {
  // to ensure that the user has to actually click on a '.tab' to change the page
  if (event.target.matches('.tab')) {
    // iterating though tabChildNodes ("array")
    for (let i = 0; i < $tabChildNodes.length; i++) {
      // tab will hold current tab
      const tab = $tabChildNodes[i];

      // if current tab is the same as event fired then...
      if (tab === event.target) {
        // ... execute the following
        // adding 'active' class to the current tab
        tab.classList.add('active');
      } else {
        // if current tab is NOT the same as event fired then...
        // remove 'active' class to the current tab
        tab.classList.remove('active');
      }
    }
  }

  /* retrieves the VALUE of the 'data-view' attribute
  from the element that triggered the event
  (event.target) and assigns it to the variable $dataViewAttrValue. */
  const $dataViewAttrValue = event.target.getAttribute('data-view');

  // iterating though ViewChildNodes ("array")
  for (let i = 0; i < $ViewChildNodes.length; i++) {
    // view will hold text content for the tab clicked
    const view = $ViewChildNodes[i];

    // if current attribute of 'data-view' value in the view object is the same as dataViewAttrValue ...
    if (view.getAttribute('data-view') === $dataViewAttrValue) {
      // ... execute the following
      // adding 'view' class to the current view
      console.log('IF $dataViewAttrValue: ', $dataViewAttrValue);
      view.classList.add('view');
      view.classList.remove('hidden');
    } else {
      // if current view is NOT the same as dataViewAttrValue ...
      // remove 'hidden' class to the current view
      console.log('ELSE $dataViewAttrValue: ', $dataViewAttrValue);
      view.classList.add('hidden');
      view.classList.remove('view');
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
