import React from "react";
import { CustomLink, Icon } from "..";
import "./Footer.scss";

const FooterCustomLinkBlock = ({ links, title, language }) => {
  const linksList = links.map((link) => {
    const url = link?.link?.url;
    const iconCode = link?.icon?.icon;
    const style = link?.style;
    const title = link?.link?.title;
    const key = link?._key;

    return (
      <CustomLink
        language={language}
        href={url}
        icon={iconCode && <Icon code={iconCode}></Icon>}
        type={`${style} mobile`}
        text={title}
        key={key}
      />
    );
  });

  return (
    <div className="footer__linkBlock_container">
      <p className="footer__linkBlock_title">{title}</p>
      {linksList}
    </div>
  );
};

export default FooterCustomLinkBlock;
