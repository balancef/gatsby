import React from "react";
import { PortableText } from "@portabletext/react";
import "./AuthorReference.scss";
import SanityImage from "gatsby-plugin-sanity-image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const AuthorReference = ({ author, detail, text, image }) => {
  return (
    <div className="AuthorReference">
      <div className="py-5 container">
        <BiSolidQuoteAltLeft className="AuthorReference__icon" />
        <div className="AuthorReference__text mb-5">
          {text && <PortableText value={text} />}
        </div>
        <div className="AuthorReference__referent">
          <div className="AuthorReference__referent-content">
            {author && <p>{author}</p>}
            {detail && <label>{detail}</label>}
          </div>
          <div>
            {image && <SanityImage alt={author} {...image} className="AuthorReference__referent-image" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorReference;