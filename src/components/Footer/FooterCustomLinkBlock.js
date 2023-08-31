import React, { useContext }  from "react";
import { CustomLink, Icon } from "..";
import { LanguageContext } from "../../context/languajeContext";
import "./Footer.scss";

const FooterCustomLinkBlock = ({ links, title }) => {
  const { language } = useContext(LanguageContext);

  const linksList = links.map((link) => {
    const url = link?.link?.url;
    const iconCode = link?.icon?.icon;
    const style = link?.style;
    const title = link?.link?.title;
    const key = link?._key;

    return (
      language !== null && (
        <CustomLink
          language={language}
          href={
            language === "en"
              ? url
              : `/${language}/${url.replace("/", "")}`
          }
          icon={iconCode && <Icon code={iconCode}></Icon>}
          type={`${style} mobile`}
          text={title}
          key={key}
        />
      )
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
