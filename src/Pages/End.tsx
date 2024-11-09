import React from "react";
import "./End.css";

const End = () => {
  return (
    <div className="end-page">
      <div className="counter-container">
        <div className="left-counter"></div>
        <div className="middle-counter">
            <p>Products Left</p>
            <h1>30</h1>
        </div>
        <div className="right-counter"></div>
      </div>
      <div className="scanme-container"></div>
    </div>
  );
};

export default End;
