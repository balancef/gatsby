import React, { useContext } from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import { LanguageContext } from "../../context/languajeContext";
import "./TextImageButton.scss";
import { CustomLink, Icon } from "..";
import SearchInMapButton from "../../images/search-in-map-btn.png"

const TextImageButton = ({ title, text, image, button, callToActionLink }) => {

  const { language } = useContext(LanguageContext);

  const buttonLabelI18n = {
    en: "Click on the map to find your nearest F-Balance podiatrist",
    es: "Haz clic en el mapa para buscar a tu podólogo Balance F más cercano",
    de: "Klicken Sie auf die Karte, um den nächstgelegenen F-Balance Podologen zu finden"
  }

  return (
    <>
      {text && (
        <div className="textImageButton container section-padding">
          <div className="textImageButton__content">
            <div className="textImageButton__text">
              <PortableText style={{textAlign: "center"}} value={text} />
              <div className="textImageButton__text_button">
                <a href={language === "en" ? button.url : `/${language}/${button.url.replace("/", "")}`}>
                <img 
                width={180} 
                height={120} 
                src={SearchInMapButton} 
                alt="search-in-map" 
                style={{cursor: "pointer"}} />
                </a>
              </div>
              <div className="textImageButton__text_callToAction">
                <label>{language ?  buttonLabelI18n[language] : buttonLabelI18n.en}</label>
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
