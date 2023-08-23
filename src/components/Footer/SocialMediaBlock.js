import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import  {Icon}  from "..";

const FooterLinkBlock = ({ links, title }) => {
  const socialMediaList = links.map((link) => (
    <CustomLink
      key={link._key}
      icon={<Icon code={link.icon.icon}></Icon>}
      href={link.link.url}
      text={link.link.text}
      type={link.style}
    />
  ));
  return (
    <div className="py-2 contactBlock__socialMedia">
      <h5 className="title-small">{title}</h5>
      <div className="row">{socialMediaList}</div>
    </div>
  );
};

export default FooterLinkBlock;
