/* exported todos */

let todos = [];

// getItem() => retrieve data from the browser's
const previousTodosJSON = localStorage.getItem('Javascript-local-storage');

// Checking if previousTodosJSON is not null and parse it if it has a value
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

// adding an event listener to the beforeunload event of the window object.
// When the user is about to leave or reload the webpage,
// the handleStorage function will be executed.
window.addEventListener('beforeunload', handleStorage);

function handleStorage(event) {
  // stringify() => static method converts a JavaScript value to a JSON string
  const todosJSON = JSON.stringify(todos);

  // setItem() => store data in the browser's
  localStorage.setItem('Javascript-local-storage', todosJSON);
}
