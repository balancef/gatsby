import React from "react";
import "./CustomLink.scss"


function CustomLink({href, icon, type, text}) {

  if (type === "icon") {
    return null;
  }

  let renderedElement;

  if (type === "link-secondary") {
    renderedElement = <small className="mb-0">{text}</small>;
  } else {
    renderedElement = <p className="mb-0">{text}</p>;
  }

  return (
    <a href={href} title={text} className={`custom-link ${type}`}>
      {renderedElement}
      {icon && icon}
    </a>
  );
}

export default CustomLink;
