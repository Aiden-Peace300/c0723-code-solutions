export default function FooBar({ props }) {
  const name = props?.name;
  const rank = props?.rank;
  const serialNo = props?.serialNo;
  return (
    <>
      <div>{name}</div>
      <div>{rank}</div>
      <div>{serialNo}</div>
    </>
  );
}
