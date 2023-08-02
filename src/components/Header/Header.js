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

const Header = () => {
  const data = useHeader().sanityHeader;
  const { language, setLanguage } = useContext(LanguageContext);


  const handleSelect = (e) => {
    const url = window.location.pathname.replace(/^\/(es|de)/, "");

    if (e === "es") {
        navigate(`/es${url}`);
      } else if (e === "de") {
        navigate(`/de${url}`);
      } else {
        navigate(`${url}`);
      }

      setLanguage(e);
  }

  const title = {
    en: "🇺🇸 English",
    es: "🇪🇸 Spanish",
    de: "🇩🇪 Deutsch",
  }

  return data !== null ? (

    <header className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            { data.logo.image.image !== null ? (
              <SanityImage
                {...data.logo.image.image}
                alt={`${data.logo.image.alt}`}
                className="header__logo"
              />
            ) : (
              <></>
            )}
          </Navbar.Brand>
          {data.menu !== null ? <Menu links={data.menu.links} /> : <></>}
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
        style={{padding: "12px", background: "black", borderColor: "black"}}
      >
        <Dropdown.Item eventKey="de">🇩🇪 Deutsch</Dropdown.Item>
        <Dropdown.Item eventKey="">🇺🇸 English</Dropdown.Item>
        <Dropdown.Item eventKey="es">🇪🇸 Spanish</Dropdown.Item>
      </DropdownButton>
    </header>
  );
};

export default Header;
