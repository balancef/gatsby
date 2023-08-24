import React, { useState } from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./TextImageCarousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RiArrowRightFill } from "react-icons/ri";
import { RiArrowLeftFill } from "react-icons/ri";

const TextImageCarousel = ({ slides, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <>
        <div className="section-padding container">
          {title && <h3 className="mb-4">{title}</h3>}
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carouselContainer">
                <div className="carouselContainer_image">
                  {slide.image !== null && (
                    <SanityImage
                      {...slide.image.image}
                      alt={`${slide.image.alt}`}
                    />
                  )}
                </div>
                <div className="carouselContainer_text">
                  <div className="body-large">
                    {slide.textBlock && (
                      <PortableText value={slide.textBlock?._rawContent} />
                    )}
                  </div>
                  <small>{slide.textBlock?.title} </small>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="arrowsContainer">
            <button onClick={prev}>
              <RiArrowLeftFill size={25} color="#4A80FF" />
            </button>

            <button onClick={next}>
              {" "}
              <RiArrowRightFill size={25} color="#4A80FF" />
            </button>
          </div>
        </div>
    </>
  );
};

export default TextImageCarousel;
