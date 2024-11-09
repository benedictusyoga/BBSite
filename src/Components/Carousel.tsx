import { useState } from "react";
import "./Carousel.css";
export default function Carousel({ slides }: { slides: number[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((i) => (i == slides.length - 1 ? 0 : i + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((i) => (i == 0 ? slides.length - 1 : i - 1));
  };
  return (
    <div className="carousel-wrapper">
      <img className="border" src="src\assets\UnionBorder.png" />
      <div className="button" onClick={prevSlide}>
        <img className="leftButton" src="src\assets\LeftButton.png" />
      </div>
      <div className="carousel">
        <div
          className="carousel-items"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((i) => (
            <div className="test">{i}</div>
          ))}
        </div>
      </div>
      <div className="button" onClick={nextSlide}>
        <img className="rightButton" src="src\assets\LeftButton.png" />
      </div>
    </div>
  );
}
