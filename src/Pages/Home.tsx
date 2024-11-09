import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const words = [
    "COMFORT",
    "DURABILITY",
    "ELEGANCE",
    "BILLIARD",
    "PRECISION",
    "SOFTNESS",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let typingSpeed = 250;

    if (isDeleting) {
      typingSpeed /= 2;
    }

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, words, currentWordIndex]);

  return (
    <div
      className="home-container"
      id="home"
      style={{
        transform: `translateY(${scrollY * 0}px)`,
      }}
    >
      <div className="home-gradient" style={{ height: "100vh" }}></div>
      <div
        className="home-wrapper"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <h2>
          Experience <span className="typewriter-effect">{displayedText}</span>
        </h2>
        <h1>BBC</h1>
      </div>
      <div
        className="btn-container"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <a href="#product" className="product-button">
          <img src="src\assets\down-arrow.png" alt="Down Arrow" />
        </a>
      </div>
    </div>
  );
}

export default Home;
