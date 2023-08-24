import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextBlock.scss";

const TextBlock = ({ title, text }) => {

  return (
    <div className="textBlock section-padding container">
      {title && <h3 className="textBlock__title mb-4">{title}</h3>}
      {text && (
        <div className="textBlock__text">
          <PortableText value={text} />
        </div>
      )}
    </div>
  );
};

export default TextBlock;
