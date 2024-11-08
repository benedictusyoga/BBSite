import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const words = ["COMFORT", "DURABILITY", "ELEGANCE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 200;

    // Speed up typing for deletion
    if (isDeleting) {
      typingSpeed /= 2;
    }

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        // Remove characters
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        // Add characters
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      }

      // Adjust typing speed or switch to the next word
      if (!isDeleting && displayedText === currentWord) {
        // Pause after typing the word
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        // Move to the next word
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, words, currentWordIndex]);

  return (
    <div className="home-container">
      <div className="home-gradient" style={{ height: "100vh" }}></div>
      <div className="home-wrapper" id="#home">
        <h2>
          Experience <span className="typewriter-effect">{displayedText}</span>
        </h2>
        <h1>BBC</h1>
      </div>
    </div>
  );
}

export default App;
