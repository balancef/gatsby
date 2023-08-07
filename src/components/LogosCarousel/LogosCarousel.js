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
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1440, min: 992 },
      items: 4,
    },
    mobileTablet: {
      breakpoint: { max: 991, min: 577 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
    },
  }

  return (
    <div className="container logos py-5">
      <h2 className="body-large logos__title">{data.title}</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        containerClass={"containerCarrusel"}
        removeArrowOnDeviceType={["tablet", "desktop", "mobileTablet", "mobile"]}
      >
        {logoList}
      </Carousel>
    </div>
  )
}


export default LogosCarousel
