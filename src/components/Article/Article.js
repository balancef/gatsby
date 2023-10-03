import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import CustomLink from "../CustomLink/CustomLink";
import { format } from "date-fns";
import { es, enGB, de } from "date-fns/locale";
import { LanguageContext } from "../../context/languajeContext";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./Article.scss";

const Article = (data) => {

  const { language } = useContext(LanguageContext);

  function formatDate(fecha) {
    return format(
      new Date(fecha),
      "dd MMMM, yyyy",
      language === "es"
        ? { locale: es }
        : language === "de"
        ? { locale: de }
        : { locale: enGB }
    );
  }

  const components = {
    types: {
      image: ({ value }) => {
        return (
          <div className="image_portable">
            <SanityImage {...value} alt={data.banner.title}/>
          </div>
        );
      },
    },
  };

  return (
    <>
      {data.banner !== null ? (
        <Banner banner={data.banner} />
      ) : (
        <></>
      )}
      <div className="container">
        <div className="articleContainer">
          {data.data?._createdAt && (
            <p className="article__date">{formatDate(data.data._createdAt)}</p>
          )}
          {data.data?._rawContent && (
            <div className="markdown-format">
              <PortableText
                value={data.data._rawContent}
                components={components}
              />
            </div>
          )}
          <div className="authorContainer">
            <div className="authorPhoto">
              <SanityImage {...data.data.author.photo.image} alt={data.banner.title}/>
            </div>
            <div className="authorText">
              <div className="authorTitle">
                <div className="authorTitle_text">
                  <small>
                    {" "}
                    <b>{data.data.author.name}</b>
                  </small>
                  <small> {data.data.author.title}</small>
                </div>
                <div className="authorTitle_button">
                  <CustomLink
                    href={
                      language === "en" ? "/contact" : `/${language}/contact`
                    }
                    text={
                      language === "es"
                        ? "Contacto"
                        : language === "en"
                        ? "Contact"
                        : "Kontakt"
                    }
                    type={"button"}
                  />
                </div>
              </div>
              <div className="authorDescription">
                <PortableText value={data.data.author._rawDescription} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.data.relatedArticles.length > 0 && (
        <div className="relatedArticlesContainer">
          <div className="container">
            {data.data.relatedArticles.slice(0, 3).map((article) => {
              return (
                <div className="relatedArticle">
                  <div className="relatedArticle__image">
                    <SanityImage {...article.image.image} />
                  </div>
                  <div className="relatedArticle__description">
                    <div className="relatedArticle__description_date">
                      {formatDate(article._createdAt)}
                    </div>
                    <a href={language === "en" ? `/blog/${article.slug.current}` : `/${language}/blog/${article.slug.current}`} className="relatedArticle__description_title">
                      {article.title}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
