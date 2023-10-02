import React, { useRef, useContext, useState } from "react";
import "./Articles.scss";
import useArticle from "../../hooks/useArticles";
import { LanguageContext } from "../../context/languajeContext";
import ArticleCard from "./ArticleCard";
import { Link } from "gatsby";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Seo } from "../seo";

const Articles = () => {
  let query = useArticle();
  const { language } = useContext(LanguageContext);
  let data = null;
  let titlePage = null;
  let descriptionPage = null;

  if (language === "es") {
    data = query.allSanityArticle.ArticleES;
    titlePage = query.allSanityBlogPage?.nodes[0]?.titlePageSpanish;
    descriptionPage = query.allSanityBlogPage?.nodes[0]?.descriptionPageSpanish;
  } else {
    if (language === "de") {
      data = query.allSanityArticle.ArticleDE;
      titlePage = query.allSanityBlogPage?.nodes[0]?.titlePageGerman;
      descriptionPage =
        query.allSanityBlogPage?.nodes[0]?.descriptionPageGerman;
    } else {
      data = query.allSanityArticle.ArticleEN;
      titlePage = query.allSanityBlogPage?.nodes[0]?.titlePage;
      descriptionPage = query.allSanityBlogPage?.nodes[0]?.descriptionPage;
    }
  }

  data.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));

  const titleWords = titlePage.split(" ");
  const lastWord = titleWords[titleWords.length - 1];

  const ArticlesList = data?.map((article) => {
    return (
      <ArticleCard
        image={article?.image}
        title={article?.title}
        link={article?.slug?.current}
        description={article?._rawContent}
        date={article?._createdAt}
        author={article?.author?.name}
      />
    );
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const pageNumbers = [];
  const wrapperRef = useRef(null);

  for (let i = 1; i <= Math.ceil(ArticlesList?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticles = ArticlesList?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    wrapperRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Seo title={titlePage} description={descriptionPage} keywords="" />
      <div ref={wrapperRef}>
        {titlePage && (
          <div className="articleTitleContainer">
            <div className="container">
              <h6 className="articles__title">
                {titleWords.slice(0, -1).join(" ")}{" "}
                <span className="last-word">{lastWord}</span>
              </h6>
            </div>
          </div>
        )}
        <div className="articles container">
          <div className="articles__items">{currentArticles}</div>
          {pageNumbers.length >= 2 ? (
            <nav>
              <ul className="Pagination">
                {currentPage !== 1 && (
                  <li className="Pagination__item">
                    {currentPage !== 1 ? (
                      <Link
                        onClick={() => paginate(currentPage - 1)}
                        to="#articles"
                      >
                        <FaChevronLeft />
                      </Link>
                    ) : (
                      <FaChevronLeft />
                    )}
                  </li>
                )}
                {pageNumbers.map((number) => (
                  <>
                    {number === currentPage ? (
                      <li key={number} className="Pagination__item active-page">
                        <Link
                          onClick={() => paginate(number)}
                          to="#articles"
                          className={`Pagination__link`}
                        >
                          {number}
                        </Link>
                      </li>
                    ) : (
                      <li key={number} className="Pagination__item">
                        <Link
                          onClick={() => paginate(number)}
                          to="#articles"
                          className={`Pagination__link `}
                        >
                          {number}
                        </Link>
                      </li>
                    )}
                  </>
                ))}
                <li className="Pagination__item">
                  {currentPage !== pageNumbers[pageNumbers.length - 1] ? (
                    <Link
                      onClick={() => paginate(currentPage + 1)}
                      to="#articles"
                    >
                      <FaChevronRight />
                    </Link>
                  ) : (
                    <FaChevronRight />
                  )}
                </li>
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Articles;
