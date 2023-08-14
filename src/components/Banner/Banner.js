import SanityImage from "gatsby-plugin-sanity-image";
import React from "react";
import "./Banner.scss";


const Banner = ({ banner }) => {

    return (
        <div className="banner">
            <SanityImage {...banner.image.image} alt={`${banner.image.alt}`} />
            <div className="banner__description">
                {banner.title !== null ? <h3>{banner.title}</h3> : <></>}
                {banner.subtitle !== null ? <p>{banner.subtitle}</p> : <></>}
            </div>

        </div>
    )

};

export default Banner;