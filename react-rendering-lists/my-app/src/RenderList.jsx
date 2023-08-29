const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

export default function RenderList() {
  const listItems = pokedex.map((obj) => <li key={obj.name}>{obj.name}</li>);

  return (
    <>
      <ul>
        <li>{listItems}</li>
      </ul>
    </>
  );
}
