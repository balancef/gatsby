import React from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./TextImage.scss";

const TextImage = ({ title, text, image }) => {
  return (
    <>
      {text && (
        <div className='textImage'>
          {title && <h3 className='textImage__title'>{title}</h3>}
          <div className='textImage__content'>
            <div className='textImage__text'>
              <PortableText value={text} />
            </div>
            {image && (
              <SanityImage
                {...image}
                alt={`${title}`}
                className='textImage__image'
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TextImage;
