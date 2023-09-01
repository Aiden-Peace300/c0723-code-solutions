import { useState } from 'react';
import './RotatingBanner.css';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  function handlePrev() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleNext() {
    setCurrentIndex((currentIndex + 1 + items.length) % items.length);
  }

  function handleIndicatorClick(i) {
    setCurrentIndex(i);
  }

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrevClick={handlePrev} />
      <Indicators
        count={items.length}
        current={currentIndex}
        onIndicatorClick={handleIndicatorClick}
      />
      <NextButton onNextClick={handleNext} />
    </div>
  );
}

function Banner({ item }) {
  return <div style={{ fontSize: '2rem' }}>{item}</div>;
}

function PrevButton({ onPrevClick }) {
  return <button onClick={onPrevClick}>Prev</button>;
}

function NextButton({ onNextClick }) {
  return <button onClick={onNextClick}>Next</button>;
}

function Indicators({ count, current, onIndicatorClick }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        onClick={() => onIndicatorClick(i)}
        style={{ backgroundColor: current === i ? 'lightblue' : undefined }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
