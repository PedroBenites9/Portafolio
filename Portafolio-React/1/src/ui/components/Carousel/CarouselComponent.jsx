import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/css-3.png";
import img2 from "./assets/html-5.png";
import img3 from "./assets/javascript-R.png";
import "../Carousel/carousel.css";

function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block  imag" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block  imag" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block  imag" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
