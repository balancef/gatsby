import React from "react";

const FooterBottomLinkBlock = ({ links, language }) => {
  const linksList = links.map((link) => {
    const url =
      language === "en"
        ? link.url
        : `/${language}/${link.url.replace("/", "")}`;
    const linkTitle = link?.title;
    const key = link?._key;

    return (
      <li key={key}>
        <small>
          <a href={url}>{linkTitle}</a>
        </small>
      </li>
    );
  });

  return (
    <div>
      <ul>{linksList}</ul>
    </div>
  );
};

export default FooterBottomLinkBlock;
