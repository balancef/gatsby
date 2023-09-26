import React, { useContext } from "react";
import "./Articles.scss";
import { LanguageContext } from "../../context/languajeContext";
import SanityImage from "gatsby-plugin-sanity-image";
import { format } from "date-fns";
import { es, en, de } from "date-fns/locale";
import CustomLink from "../CustomLink/CustomLink";

const ArticleCard = ({
  image,
  title,
  description,
  date,
  author,
  link
}) => { 
  const { language } = useContext(LanguageContext);

  function formatDate(fecha) {
    return format(new Date(fecha), "dd MMMM, yyyy", (language === "es" ? { locale: es } : language === "de" ? { locale: de } : { locale: en }));
  }

  let text = description[0].children[0].text
  const shortDescription = (texto) => {
    const textWords = texto.split(" ");
    const textDescription = textWords.slice(0, 28)
    return textDescription.join(" ") + "...";

  }

  return (
    <div className="articleCard py-4">
      <div className="articleCard__image">
        {image && <SanityImage alt={image.alt} {...image.image} />}
      </div>
      <div className="articleCard__content">
        {date && <small className="articleCard__date">{formatDate(date)}</small>}
        <div className="articleCard__link">
          <CustomLink
            text={title}
            href={link}
            type="link"
          />
        </div>
        {description && <p className="articleCard__description">{text.length < 200 ? text : shortDescription(text)}</p>}
        {author &&
          <div className="articleCard__author">
            <p>{language === "es" ? "Autor " : language === "de" ? "Von " : "Author "}</p>
            <p>{author}</p>
          </div>}
      </div>
    </div>

  );

};

export default ArticleCard;