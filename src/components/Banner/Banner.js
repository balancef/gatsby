import SanityImage from "gatsby-plugin-sanity-image";
import React from "react";
import "./Banner.scss";


const Banner = ({ banner, variant }) => {

    return (
        <div className={`banner ${variant}`}>
            <SanityImage {...banner.image.image} alt={`${banner.image.alt}`} />
            <div className={`banner__description ${variant}`}>
                {banner.title !== null ? <h3 className={`banner__title ${variant}`}>{banner.title}</h3> : <></>}
                {banner.subtitle !== null ? <p>{banner.subtitle}</p> : <></>}
            </div>

        </div>
    )

};

export default Banner;