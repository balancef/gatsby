import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import SanityImage from "gatsby-plugin-sanity-image"

import "./LogosCarousel.scss"

const LogosCarousel = ({ data }) => {

  const logoList = data.carousel.map(logo => {
    return (
      <div className="logos__image" key={logo.image.asset._id}>
        <SanityImage {...logo.image} alt="logo" />
      </div>
    )
  })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1199, min: 770 },
      items: 4,
    },
    mobileTablet: {
      breakpoint: { max: 769, min: 481 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
    },
  }

  return (
    <div className="container logos py-5">
      <p className="logos__title">{data.title}</p>
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
