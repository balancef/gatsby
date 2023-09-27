import React from "react";
import "./MainCourses.scss";

const Course = ({ course, variant }) => {
  return (
    <>
      <div className={`course course__${variant}`}>
        <p className={`course__${variant}__titulo`}>
          <a target="_blank" rel="noreferrer"  href={course?.url}>
            {course.title}
          </a>
        </p>
        {course.description && (
          <small className={`course__${variant}__fecha`}>
            {course.description}
          </small>
        )}
      </div>
    </>
  );
};

export default Course;
