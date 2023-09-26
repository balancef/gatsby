import React from "react"
import { Link } from "gatsby"
import "./_MainCourses.scss"

const Course = ({ course, variant }) => {
  const { title, slug } = course

  return (
    <>
      <div className={`course course__${variant}`}>
        <h3 className={`course__${variant}__titulo`}>
          <Link to={`/identidad21/${slug}`}>{title}</Link>
        </h3>
        <p className={`course__${variant}__fecha`}>{publishedAt}</p>
      </div>
    </>
  )
}

export default Course
