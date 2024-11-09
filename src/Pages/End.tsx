import { useState } from "react";
import "./End.css";

const End = () => {
  const [count, setCount] = useState(30);

  const incrementCount = () => {
    if (count < 30) {
      setCount(count + 1);
    }
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const setDefault = () => {
    setCount(30);
  };

  return (
    <div className="end-page">
      <div className="counter-container" id="counter">
        <div className="left-counter" onClick={decrementCount}></div>
        <div className="middle-counter">
          <p onClick={setDefault}>Products Left</p>
          <h1>{count}</h1>
        </div>
        <div className="right-counter" onClick={incrementCount}></div>
      </div>

      <div className="scanme-container" id="order">
        <div className="scan-top">
          <h1>GET YOURS NOW</h1>
          <div className="scan-img">
            <div className="qr-code"></div>
          </div>
        </div>
        <div className="scan-bot">
          <h1>
            EXPERIENCE <span>BBC</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default End;
