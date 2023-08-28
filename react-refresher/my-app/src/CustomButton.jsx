// import './CustomButton.css';

export default function CustomButton({ prop, prop2, number }) {
  return (
    <>
      <button onClick={prop}>Down</button>
      <span>{number}</span>
      <button onClick={prop2}>Up</button>
    </>
  );
}
