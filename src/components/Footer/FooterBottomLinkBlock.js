import React, { useContext } from "react";
import { LanguageContext } from "../../context/languajeContext";

const FooterBottomLinkBlock = ({ links }) => {
  const { language } = useContext(LanguageContext);

  const linksList = links.map((link) => {
    const url =
      language === "en"
        ? link.url
        : `/${language}/${link.url.replace("/", "")}`;
    const linkTitle = link?.title;
    const key = link?._key;

    return (
      language && (
        <li key={key}>
          <small>
            <a href={url}>{linkTitle}</a>
          </small>
        </li>
      )
    );
  });

  return (
    <div>
      <ul>{linksList}</ul>
    </div>
  );
};

export default FooterBottomLinkBlock;
