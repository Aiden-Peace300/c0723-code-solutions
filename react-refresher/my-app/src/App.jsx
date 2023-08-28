import { useState } from 'react';
import Button from './CustomButton';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <>
      <Button prop={decrementCount} prop2={incrementCount} number={count} />
    </>
  );
}
