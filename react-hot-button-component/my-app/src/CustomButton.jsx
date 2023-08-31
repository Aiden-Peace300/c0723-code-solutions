import { useState } from 'react';
import './CustomButton.css';

export default function CustomButton() {
  const [count, setCount] = useState(0);

  let color = '';

  if (count < 3) {
    color = 'purple';
  } else if (count < 6) {
    color = 'light-purple';
  } else if (count < 9) {
    color = 'peach';
  } else if (count < 12) {
    color = 'orange';
  } else if (count < 15) {
    color = 'yellow';
  } else {
    color = 'white';
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)} className={color}>
        Hot Button
      </button>
      <span>{count}</span>
    </>
  );
}
