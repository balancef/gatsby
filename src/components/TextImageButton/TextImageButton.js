import React, { useContext } from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import { LanguageContext } from "../../context/languajeContext";
import "./TextImageButton.scss";
import { CustomLink, Icon } from "..";

const TextImageButton = ({ title, text, image, button, callToActionLink }) => {

  const { language } = useContext(LanguageContext);


  return (
    <>
      {text && (
        <div className="textImageButton container section-padding">
          <div className="textImageButton__content">
            <div className="textImageButton__text">
              <PortableText value={text} />
              <div className="textImageButton__text_button">
                <CustomLink
                  href={`/${language}/${button.url.replace("/", "")}`}
                  text={button.title}
                  type={"button"}
                  icon={<Icon code={"FaSearch"}></Icon>}
                />
              </div>
              <div className="textImageButton__text_callToAction">
                <label>{callToActionLink.title}</label>
                <CustomLink
                  href={`/${language}/${callToActionLink.link.url.replace("/", "")}`}
                  text={callToActionLink.link.title}
                  type={"link-secondary"}
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
