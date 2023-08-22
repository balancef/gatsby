import React, { useContext } from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./Header.scss";
import LinkBlock from "./LinkBlock";
import Menu from "./Menu";
import useHeader from "../../hooks/useHeader";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { LanguageContext } from "../../context/languajeContext";
import { navigate } from "gatsby";
import MenuHeader from "./MenuHeader";
import useWindowSize from "../../hooks/useWindowSize";
import us from "../../images/us.svg";
import es from "../../images/es.svg";
import de from "../../images/de.svg";

const Header = () => {
  const query = useHeader();
  const { language } = useContext(LanguageContext);
  const dimensions = useWindowSize()

  let data = null;
  if (language === "es") {
    data = query.sanityHeaderES;
  } else {
    if (language === "de") {
      data = query.sanityHeaderDE;
    } else {
      data = query.sanityHeader;
    }
  }

  const handleSelect = (e) => {
    const url = window.location.pathname.replace(/^\/(es|de)/, "");

    if (e === "es") {
      navigate(`/es${url}`);
    } else if (e === "de") {
      navigate(`/de${url}`);
    } else {
      navigate(`${url}`);
    }
  }

  const title = {
    en: `${dimensions.windowWidth > 575 ? 'English' : 'US'}`,
    es: `${dimensions.windowWidth > 575 ? 'Español' : 'ES'}`,
    de: `${dimensions.windowWidth > 575 ? 'Deutsch' : 'DE'}`,
  }

  const flag = {
    en: us,
    es: es,
    de: de,
  }

  return data !== null ? (
    <header className="header">
      <Navbar>
        <Container>
          <Navbar.Brand>
            <div className="brand-container">
              <img src={flag[language]} className="brand-container__img"/>
              <DropdownButton
                title={language ? title[language] : "..."}
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
                className="header__language"

              >
                <Dropdown.Item eventKey="de" style={{ display: "flex" }}><img src={de} alt="de" /> Deutsch</Dropdown.Item>
                <Dropdown.Item eventKey="en" style={{ display: "flex" }}><img src={us} />English</Dropdown.Item>
                <Dropdown.Item eventKey="es" style={{ display: "flex" }}><img src={es} /> Español</Dropdown.Item>
              </DropdownButton>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {data.menu !== null ? <MenuHeader headerMenu={data.headerMenu} language={language} /> : <></>}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="header__menu">
        <Container>
          <Navbar.Brand href={language === "en" ? "/" : `/${language}`}>
            {data.logo.image !== null ? (
              <SanityImage
                {...data.logo.image}
                alt={`${data.logo.alt}`}
                className="header__logo"
              />
            ) : (
              <></>
            )}
          </Navbar.Brand>
          {data.menu !== null ? <Menu links={data.menu.links} button={data.buttonMenu} language={language} /> : <></>}
          {data.customLinkBlock !== null ? (
            <LinkBlock links={data.customLinkBlock?.links} />
          ) : (
            <></>
          )}

        </Container>
      </Navbar>
    </header>
  ) : (

    <header className="header">
      <DropdownButton
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
        style={{ padding: "12px", background: "black", borderColor: "black" }}
      >
        <Dropdown.Item eventKey="de">🇩🇪 Deutsch</Dropdown.Item>
        <Dropdown.Item eventKey="">🇺🇸 English</Dropdown.Item>
        <Dropdown.Item eventKey="es">🇪🇸 Español</Dropdown.Item>
      </DropdownButton>
    </header>
  );
};

export default Header;
