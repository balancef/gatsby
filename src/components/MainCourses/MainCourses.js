import React from "react";
import Course from "./Course";
import "./MainCourses.scss";
import CustomLink from "../CustomLink/CustomLink";

const MainCourses = ({ highlightedLink, externalLinks, button, title }) => {
  const destacado = (
    <Course course={highlightedLink?.link} variant={"destacado"} />
  );

  const courses = (
    <div className={`col-12 col-md-6 MainCourses__articles `}>
      {externalLinks.map((course) => (
        course.title && <Course key={course?.title} course={course} variant={"info"} />
      ))}
    </div>
  );

  return (
    <div>
      
      <div className={`container MainCourses `}>
      {title ? <h4 className="MainCourses__title">{title}</h4> : <></>}
        <div className={`row justify-content-center `}>
          <div className={`col-12 col-md-6`}>
            <div
              className={`destacado-container`}
              style={{
                backgroundImage: `url(${highlightedLink?.image?.image?.asset?.url})`,
              }}
            >
              {" "}
              {destacado}
            </div>
          </div>
          {courses}
        </div>
        {button && (
          <div className="row justify-content-center pt-5">
            <CustomLink
              text={button?.title}
              href={button?.url}
              type={`button`}
              target={`_blank`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCourses;
