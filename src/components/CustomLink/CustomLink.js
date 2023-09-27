import React from "react";
import "./CustomLink.scss";

function CustomLink({ href, icon, type, text, target }) {
  let renderedElement;

  const targetAttribute = type === "icon" ? "_blank" : "_self";

  if (type === "link-secondary") {
    renderedElement = <small className="mb-0">{text}</small>;
  } else if (type === "icon") {
    renderedElement = "";
  } else {
    renderedElement = <p className="mb-0">{text}</p>;
  }

  return (
    <a
      href={href}
      title={text}
      className={`custom-link ${type}`}
      target={target || targetAttribute}
    >
      {renderedElement}
      {icon && icon}
    </a>
  );
}

export default CustomLink;
