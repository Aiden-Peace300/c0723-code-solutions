import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';

import { useState, useEffect } from 'react';
import './carousel.css';

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time] = useState(0);

  function handlePrev() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  function handleNext() {
    setCurrentIndex((currentIndex + 1 + images.length) % images.length);
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1 + images.length) % images.length);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [time, currentIndex, images]);

  return (
    <>
      <LeftArrow prev={handlePrev} />
      <div>
        <img src={images[currentIndex]} />
      </div>
      {currentIndex === 0 ? (
        <FaCircle />
      ) : (
        <FaRegCircle onClick={() => setCurrentIndex(0)} />
      )}
      {currentIndex === 1 ? (
        <FaCircle />
      ) : (
        <FaRegCircle onClick={() => setCurrentIndex(1)} />
      )}
      {currentIndex === 2 ? (
        <FaCircle />
      ) : (
        <FaRegCircle onClick={() => setCurrentIndex(2)} />
      )}
      {currentIndex === 3 ? (
        <FaCircle />
      ) : (
        <FaRegCircle onClick={() => setCurrentIndex(3)} />
      )}
      {currentIndex === 4 ? (
        <FaCircle />
      ) : (
        <FaRegCircle onClick={() => setCurrentIndex(4)} />
      )}
      <RightArrow next={handleNext} />
    </>
  );
}

type RightArrowProps = {
  next: () => void;
};

function RightArrow({ next }: RightArrowProps) {
  return <FaChevronRight className="next-image" onClick={next} />;
}

type LeftArrowProps = {
  prev: () => void;
};

function LeftArrow({ prev }: LeftArrowProps) {
  return <FaChevronLeft className="previous-image" onClick={prev} />;
}
