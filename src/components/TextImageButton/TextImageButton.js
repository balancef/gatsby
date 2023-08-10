import React from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./TextImageButton.scss";
import { CustomLink, Icon } from "..";

const TextImageButton = ({ title, text, image, button, callToActionLink }) => {
  return (
    <>
      {text && (
        <div className="textImageButton container">
          <div className="textImageButton__content">
            <div className="textImageButton__text">
              <PortableText value={text} />
              <div className="textImageButton__text_button">
                <CustomLink
                  href={button.url}
                  text={button.title}
                  style={"button"}
                  icon={<Icon code={"FaSearch"}></Icon>}
                />
              </div>
              <div className="textImageButton__text_callToAction">
                <label>{callToActionLink.title}</label>
                <CustomLink
                  href={callToActionLink.link.url}
                  text={callToActionLink.link.title}
                  style={"link-secondary"}
                />
              </div>
            </div>
            {image && (
              <div className="textImageButton__image">
                <SanityImage
                  {...image}
                  alt={`${title}`}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TextImageButton;
