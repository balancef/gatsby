import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import { format } from "date-fns";
import { es, en, de } from "date-fns/locale";
import { LanguageContext } from "../../context/languajeContext";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import { CustomLink } from "..";
import "./Article.scss";

const Article = (data) => {
  // console.log("data:", data);

  const { language } = useContext(LanguageContext);

  function formatDate(fecha) {
    return format(
      new Date(fecha),
      "dd MMMM, yyyy",
      language === "es"
        ? { locale: es }
        : language === "de"
        ? { locale: de }
        : { locale: en }
    );
  }

  const components = {
    types: {
      image: ({ value }) => {
        return (
          <div className="image_portable">
            <SanityImage {...value} />
          </div>
        );
      },
    },
  };

  return (
    <>
      {data.banner !== null ? (
        <Banner banner={data.banner} variant={"blog"} />
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
          {/* <div className="authorContainer">
            <div className="authorPhoto">
              <SanityImage {...data.data.author.photo.image} />
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
                      language === "en" ? "contact" : `/${language}/contact`
                    }
                    text={"button.title"}
                    type={"button"}
                  />
                </div>
              </div>
              <div className="authorDescription">
                <PortableText value={data.data.author._rawDescription} />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* {data.data.relatedArticles > 0 && (
        <div className="relatedArticlesContainer">
          {data.data.relatedArticles.map((article) => {
            return (
              <div className="relatedArticle">
                <div className="relatedArticle__image">
                  <SanityImage {...article.image.image} />
                </div>
                <div className="relatedArticle__description">
                  <div className="relatedArticle__description_date">
                    {article._createdAt}
                  </div>
                  <div className="relatedArticle__description_title">
                    {article.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )} */}
    </>
  );
};

export default Article;
