import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import "./Products.css";
import Elipse6 from "../assets/Ellipse6.svg";
import Elipse5 from "../assets/Ellipse5.svg";

export default function Products() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const slides = ["src/assets/rubyS.png","src/assets/rubyS.png" ];
  return (
    <div className="product-wrapper" id="product">
      <img
        className="elipse-gradient"
        src={Elipse6}
        style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}
      />
      <img
        className="elipse-border"
        src={Elipse5}
        style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}
      />

      <div className="carousel-centering">
        <Carousel slides={slides} />
        <div className="small-text">
          <div className="left-wrapper">
            <h1 className="large-text">BBC Premium</h1>
            <h4 className="left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, blanditiis aperiam nulla quas quibusdam dolores deleniti.</h4>
          </div>
          <h4 className="right-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquam delectus excepturi fugit cupiditate quod consequuntur.</h4>
        </div>
      </div>
      <img
        className="elipse-gradient-bottom"
        src={Elipse6}
        style={{
          transform: `rotate(180deg) translateY(-${scrollPosition * 0.3}px)`,
        }}
      />
      <img
        className="elipse-border-bottom"
        src={Elipse5}
        style={{
          transform: `rotate(180deg) translateY(-${scrollPosition * 0.3}px)`,
        }}
      />
      <div className="carousel-centering">

        <Carousel slides={slides} />
        <div className="small-text">
          <div className="left-wrapper">
            <h1 className="large-text">BBC</h1>
            <h4 className="left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, blanditiis aperiam nulla quas quibusdam dolores deleniti.</h4>
          </div>
          <h4 className="right-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquam delectus excepturi fugit cupiditate quod consequuntur.</h4>
        </div>
      </div>
    </div>
  );
}
