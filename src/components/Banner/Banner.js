import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SanityImage from "gatsby-plugin-sanity-image";

import "./Banner.scss";

const Banner = ({ banner }) => {
  const slides = banner?.slides.map((slide) => (
    <Carousel.Item>
      <a href={`${slide.url !== null ? slide.url : ''}`} className={`img ${slide.overlay ? 'overlay' : ''}`}>
        <SanityImage {...slide.image.image} alt={`${slide.image.alt}`} />
      </a>
      <Carousel.Caption>
        {slide.title !== null ? <h3>{slide.title}</h3> : <></>}
        {slide.text !== null ? <p>{slide.text}</p> : <></>}
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return (
    <Carousel className="container" interval={banner?.autoplay ? 4000 : null}>
      {slides}
    </Carousel>
  );
};

export default Banner;
