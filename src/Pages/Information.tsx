import { useEffect, useRef, useState } from "react";
import "./Information.css";

function Information() {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
  
    if (domRef.current) {
      observer.observe(domRef.current);
    }
  
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);
  return (
    <div ref={domRef} className={`features-container`} style={{ backgroundColor: "#000000" }} id="information">
      <div className={`feature-item  ${isVisible ? 'is-visible' : ''}`}>
        <div className="item-top">
          <h1>COMFORT</h1>
          <p>
            All Day, All Night, BBC Feels Right: Designed with breathable
            spandex, our gloves keep your hands cool, so your grip stays firm.
          </p>
        </div>
        <div className="item-bottom"></div>
      </div>

      <div  className={`feature-item-b  ${isVisible ? 'is-visible' : ''}`}>
        <div className="item-bottom2"></div>
        <div className="item-top2">
          <h1>DURABILITY</h1>
          <p>
            Built Tough, Like the BBC Should Be: When the pressure is on, our
            BBC gloves hold up under intense play.
          </p>
        </div>
      </div>

      <div  className={`feature-item  ${isVisible ? 'is-visible' : ''}`}>
        <div className="item-top">
          <h1>ELEGANCE</h1>
          <p>
            Looks better on black: Our sleek, black base elevates any look,
            complementing every hand with a touch of undeniable style.
          </p>
        </div>
        <div className="item-bottom"></div>
      </div>
    </div>
  );
}

export default Information;
