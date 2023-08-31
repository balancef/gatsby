import React from "react";
import "./CustomLink.scss";

function CustomLink({ href, icon, type, text, language }) {
  let renderedElement;

  const targetAttribute = type === "icon" ? "_blank" : "_self";

  if (type === "link-secondary") {
    renderedElement = <small className="mb-0">{text}</small>;
  } else if (type === "icon") {
    renderedElement = "";
  } else {
    renderedElement = <p className="mb-0">{text}</p>;
  }

  const url =
    language === "en" || language === undefined
      ? href
      : `/${language}/${href.replace("/", "")}`;
  return (
    <a
      href={url}
      title={text}
      className={`custom-link ${type}`}
      target={targetAttribute}
    >
      {renderedElement}
      {icon && icon}
    </a>
  );
}

export default CustomLink;
