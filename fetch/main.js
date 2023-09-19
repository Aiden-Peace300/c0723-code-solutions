async function getData(url = '', data = []) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

getData('https://jsonplaceholder.typicode.com/users', []).then((data) => {
  console.log(data);
});

getData('https://pokeapi.co/api/v2/pokemon/1', []).then((data) => {
  console.log(data);
});
