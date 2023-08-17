import React from "react";
import { CustomLink, Icon } from "..";


import "./Header.scss";

const LinkBlock = ({ links }) => {
  

  const linksList = links.map((link) => {
    const url = link?.link?.url;
    const iconCode = link?.icon?.icon;
    const style = link?.style;
    const title = link?.link?.text;
    const key = link?.link?._key;

    return (
      <CustomLink
        href={url}
        icon={iconCode && <Icon code={iconCode}></Icon>}
        type={`${style} mobile`}
        text={title}
        key={key}
      />
    );
  });

  return (
    <div className="header__actions">
      {linksList}
    </div>
  );
};

export default LinkBlock;
