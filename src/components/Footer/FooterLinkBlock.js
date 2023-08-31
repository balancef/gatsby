import React, { useContext } from "react";
import { LanguageContext } from "../../context/languajeContext";

const FooterLinkBlock = ({ links, title, external }) => {
  const { language } = useContext(LanguageContext);

  const linksList = links.map((link) => {
    const url =
      language === "en" || external
        ? link.url
        : `/${language}/${link.url.replace("/", "")}`;
    const linkTitle = link?.title;
    const key = link?._key;

    const linkProps = external
      ? { href: url, target: "_blank", rel: "noreferrer" }
      : { href: url, target: "_self" };

    return (
      language !== null && (
        <li key={key}>
          <small>
            <a {...linkProps}>{linkTitle}</a>
          </small>
        </li>
      )
    );
  });

  return (
    <div className="footer__linkBlock_container">
      <p className="footer__linkBlock_title">{title}</p>
      <ul>{linksList}</ul>
    </div>
  );
};

export default FooterLinkBlock;
