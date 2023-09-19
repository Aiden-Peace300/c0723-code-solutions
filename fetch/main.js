async function getData(url = '') {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`fetch Error ${response.status}`);
    const content = await response.json();
    console.log(content);
  } catch (error) {
    console.error('fetch failed', error);
  }
}

getData('https://jsonplaceholder.typicode.com/users');
getData('https://pokeapi.co/api/v2/pokemon/1');
