import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import "./Products.css";
import Elipse6 from "../assets/Ellipse6.svg";
import Elipse5 from "../assets/Ellipse5.svg";
// import Ruby1 from "../assets/rubyS.png";
import Cobalt from "../assets/Cobalt.png";
import Copper from "../assets/Copper.png";
import Ruby from "../assets/Ruby.png";
import copperP from "../assets/copperP.png";
import navyP from "../assets/navyP.png";
import redP from "../assets/redP.png";
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
  const slides = [Cobalt, Ruby, Copper];

  const slides1 = [navyP, redP, copperP];
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
            <h1 className="large-text">Classic</h1>
            <h4 className="left-text">
              The standard issue batik billiard glove made for comfort,
              durability, and elegance
            </h4>
          </div>
          <h4 className="right-text">
            Billiard Glove but with Added <b>Durability</b>, <b>Comfort</b>, and{" "}
            <b>Elegance</b>!
            <br />
            <br />
            <b>MATERIAL</b>:
            <br />- <b>100% </b>Stretchy and Durable <b>Spandex</b> <br />-
            Lycra Batik Fabric
          </h4>
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
        <Carousel slides={slides1} />
        <div className="small-text">
          <div className="left-wrapper">
            <h1 className="large-text">Classic+</h1>
            <h4 className="left-text">
              The billiard gloves for those who want more. Comfort, durability,
              and elegance shines brighter with its additional features
            </h4>
          </div>
          <h4 className="right-text">
            <b>MATERIAL</b>:
            <br />- <b>100% </b>Stretchy and Durable <b>Spandex</b> <br />-
            Lycra Batik Fabric
            <br />
            <br />
            <b>ADDITIONAL FEATURES</b>:
            <br />
            - <b>Anti-Slip</b> Material
            <br />
            - Auto-fitting <b>Velcro Strap</b>
          </h4>
        </div>
      </div>
    </div>
  );
}
