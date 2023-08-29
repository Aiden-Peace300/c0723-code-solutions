export default function RenderList({ arr }) {
  const listItems = arr.map((obj) => <li key={obj.name}>{obj.name}</li>);

  return (
    <ul>
      <li>{listItems}</li>
    </ul>
  );
}
