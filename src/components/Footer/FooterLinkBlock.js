import React from "react";

const FooterLinkBlock = ({ links, title }) => {
  const linksList = links.map((link) => {
    const url = link?.url;
    const linkTitle = link?.text;
    const key = link?._key;

    return (
      <li className="body-medium mb-2" key={key} >
        <a href={url}>{linkTitle}</a>
      </li>
    );
  });

  return (
    <div className="col-12 col-md-4 py-1">
      <h5 className="title-small">{title}</h5>
      <ul>{linksList}</ul>
    </div>
  );
};

export default FooterLinkBlock;
