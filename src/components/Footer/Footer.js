import React, { useContext } from "react";
import { LanguageContext } from "../../context/languajeContext";
import SanityImage from "gatsby-plugin-sanity-image";
import "./Footer.scss";
import useFooter from "../../hooks/useFooter";
import FooterLinkBlock from "./FooterLinkBlock";
import SocialMediaBlock from "./SocialMediaBlock";
import FooterCustomLinkBlock from "./FooterCustomLinkBlock";
import FooterBottomLinkBlock from "./FooterBottomLinkBlock";

const Footer = () => {
  const query = useFooter();
  const { language } = useContext(LanguageContext);

  let data = null;
  if (language === "es") {
    data = query.sanityFooterES;
  } else {
    if (language === "de") {
      data = query.sanityFooterDE;
    } else {
      data = query.sanityFooter;
    }
  }

  return (
    data !== null && (
      <footer>
        <div className="container section-padding">
          <div className="footer">
            <div className="logoContainer">
              {data.logo.image !== null && (
                <a href={language === "en" ? "/" : `/${language}`}>
                  <SanityImage
                    {...data.logo.image}
                    alt={`${data.logo.alt}`}
                    className="header__logo"
                  />
                </a>
              )}

              {data.copyright && <small>{data.copyright}</small>}
            </div>
            <div className="linkBlockContainer">
              <div className="footer__linkBlock">
                {data.externalLinks && (
                  <FooterLinkBlock
                    links={data.externalLinks.links}
                    title={data.externalLinks?.title}
                    external={true}
                    language={language}
                  />
                )}
              </div>
              <div className="footer__linkBlock">
                {data.internalLinks && (
                  <FooterLinkBlock
                    links={data.internalLinks.links}
                    title={data.internalLinks?.title}
                    language={language}
                  />
                )}
              </div>
              <div className="footer__linkBlock">
                {" "}
                {data.customLinkBlock && (
                  <FooterCustomLinkBlock
                    links={data.customLinkBlock.links}
                    title={data.customLinkBlock?.title}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="footerBottom">
            <div className="footerBottom__socialMedia">
              {data.socialMediaBlock && (
                <SocialMediaBlock
                  links={data.socialMediaBlock.links}
                  title={data.socialMediaBlock?.title}
                />
              )}
            </div>
            <div className="footerBottom__internalPages">
              {data.bottomMenu && (
                <FooterBottomLinkBlock
                  links={data.bottomMenu.links}
                  title={data.bottomMenu?.title}
                  language={language}
                />
              )}
            
            </div>
          </div>
        </div>
      </footer>
    )
  );



};

export default Footer;
