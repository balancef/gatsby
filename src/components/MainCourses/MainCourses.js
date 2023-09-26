import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { useBlogArticles } from "../../hooks"
import { Article, Button } from "../index"
import "./_blogSection.scss"

const MainCourses = ({ blog, latest, title}) => {
  const data = useBlogArticles()
  const blogArticle = data?.allStrapiBlogArticles?.nodes


  const destacado =
    <Course
      key={blogArticle[0]?.id}
      article={blogArticle[0]}
      variant={"destacado"}
    />
 

  const articles =
    blog.length > 1 ? (
      <div className={`col-12 col-md-6 MainCourses__articles `}>
        {customArticle
          .map(article => (
            <Article key={article.id} article={article} variant={"info"} />
          ))
          .slice(1, 4)}
      </div>
    ) : null

  const image = <SanityImage {...blogArticle[0].blogImage?.nameImage} alt={`${name}`} />


  const colVariant =
    (!latest && blog.length === 1) || (latest && blogArticle.length === 1)
      ? "col-md-9"
      : "col-md-6"


  return (
    <div>
      <div className={`container MainCourses `}>
        <div className="row">
          <h2 className="col-12 text-center">{title}</h2>
        </div>
        <div className={`row justify-content-center `}>
          <div className={`col-12 ${colVariant}  `}>
            <BgImage
              image={image}
              className="MainCourses__bgImage"
              alt={`image-${blogArticle[0].id}`}
            >
              {destacado}
            </BgImage>
          </div>
          {articles}
        </div>
        <div className="row justify-content-center py-5">
          <Button
            content={"Ver más"}
            path={`/identidad21`}
            variant={buttonVariant}
          />
        </div>
      </div>
    </div>
  )
}

export default MainCourses