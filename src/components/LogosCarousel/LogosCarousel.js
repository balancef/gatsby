import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import SanityImage from "gatsby-plugin-sanity-image"

import "./LogosCarousel.scss"

const LogosCarousel = ({ data }) => {
    
  const logoList = data.carousel.map(logo => {
   
    return (
      <div className="logos__image">
        <SanityImage {...logo.image} alt="logo" />
      </div>
    )
  })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1441 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1440, min: 992 },
      items: 3,
    },
    mobileTablet: {
      breakpoint: { max: 991, min: 577 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="container logos py-5">
      <Carousel
        responsive={responsive}
        autoPlay={logoList.length > 3}
        autoPlaySpeed={3000}
        infinite={logoList.length > 3}
        containerClass={"containerCarrusel"}
        removeArrowOnDeviceType={logoList.length <= 3 && ["tablet", "desktop"]}
      >
        {logoList}
      </Carousel>
    </div>
  )
}

export default LogosCarousel
