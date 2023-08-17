import React, { useContext } from "react";
import { PortableText } from "@portabletext/react";
import "./TextLogoButton.scss";
import { CustomLink } from "..";
import { LanguageContext } from "../../context/languajeContext";
import SanityImage from "gatsby-plugin-sanity-image";


const TextLogoButton = ({ title, text, button, image }) => {

  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="py-5 container">
        <div className="textLogoButton">
          {image ?
            <div className="textLogoButton__image">
              <SanityImage
                {...image}
                alt={`${title}`}
              />
            </div>
            : <></>}
          {title ? <h4 className="textLogoButton__title">{title}</h4> : <></>}
          {text ? (
            <div className="textLogoButton__content mb-4">
              <PortableText value={text} />
            </div>
          ) : <></>}
          {button ? (<div className="textLogoButton__button">
            <CustomLink
              href={language === "en" ? button.url : `/${language}/${button.url.replace("/", "")}`}
              text={button.title}
              type={"button"}
            />
          </div>) : <></>}
        </div>
      </div>
    </>
  );
};

export default TextLogoButton;