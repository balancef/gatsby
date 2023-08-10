import React from "react";
import "./CustomLink.scss"


function CustomLink({href, icon, style, text}) {

  if (style === "icon") {
    return null;
  }

  let renderedElement;

  if (style === "link-secondary") {
    renderedElement = <small className="mb-0">{text}</small>;
  } else {
    renderedElement = <p className="mb-0">{text}</p>;
  }

  return (
    <a href={href} title={text} className={`custom-link ${style}`}>
      {renderedElement}
      {icon && icon}
    </a>
  );
}

export default CustomLink;
