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
    en: `🇺🇸 ${dimensions.windowWidth > 575 ? 'English' : 'US'}`,
    es: `🇪🇸 ${dimensions.windowWidth > 575 ? 'Español' : 'ES'}`,
    de: `🇩🇪 ${dimensions.windowWidth > 575 ? 'Deutsch' : 'DE'}`,
  }

  return data !== null ? (
    <header className="header">
      <Navbar >
        <Container>
          <Navbar.Brand>
            <DropdownButton
              title={language ? title[language] : "..."}
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
              className="header__language"
            >
              <Dropdown.Item eventKey="de">🇩🇪 Deutsch</Dropdown.Item>
              <Dropdown.Item eventKey="">🇺🇸 English</Dropdown.Item>
              <Dropdown.Item eventKey="es">🇪🇸 Spanish</Dropdown.Item>
            </DropdownButton>

          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {data.menu !== null ? <MenuHeader headerMenu={data.headerMenu} /> : <></>}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
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
          {console.log(data)}
          {data.menu !== null ? <Menu links={data.menu.links} button={data.buttonMenu} /> : <></>}
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
        title={language ? title[language] : "..."}
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
        style={{ padding: "12px", background: "black", borderColor: "black" }}
      >
        <Dropdown.Item eventKey="de">🇩🇪 Deutsch</Dropdown.Item>
        <Dropdown.Item eventKey="">🇺🇸 English</Dropdown.Item>
        <Dropdown.Item eventKey="es">🇪🇸 Spanish</Dropdown.Item>
      </DropdownButton>
    </header>
  );
};

export default Header;
