import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import  {Icon}  from "..";

const FooterLinkBlock = ({ links }) => {

  const socialMediaList = links.map((link) => (
    <CustomLink
      key={link._key}
      icon={<Icon code={link.icon.icon}></Icon>}
      href={link.link.url}
      text={link.link.title}
      type={link.style}
    />
  ));
  return (
    <div className="socialMediaLinks">
     {socialMediaList}
    </div>
  );
};

export default FooterLinkBlock;
