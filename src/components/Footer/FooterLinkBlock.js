import React from "react";

const FooterLinkBlock = ({ links, title }) => {
  const linksList = links.map((link) => {
    const url = link?.url;
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
    <div className="footer__linkBlock_container">
      <p className="footer__linkBlock_title">{title}</p>
      <ul>{linksList}</ul>
    </div>
  );
};

export default FooterLinkBlock;
