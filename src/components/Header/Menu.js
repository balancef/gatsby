import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MaterialIcon, Icon } from "..";
import { Button } from "react-bootstrap";

const Menu = ({ links, button, language }) => {

  const itemsMenu = links.map((link, idx) =>
    link._type === "dropdown" ? (
      <NavDropdown
        title={
          <div className="nav-link" key={`title-${idx}`}>
            {link.icon !== null && <Icon code={link.icon.icon}></Icon>}
            {link.text}
          </div>
        }
        id="basic-nav-dropdown"
        key={`drop-${idx}`}
      >
        {link.links.map((dropdownLink) =>
          dropdownLink.separated ? (
            <div key={`divider-${dropdownLink._key}`}>
              <NavDropdown.Divider />
              <NavDropdown.Item
                key={dropdownLink._key}
                href={dropdownLink._type === "dropdownExternalLink" ? dropdownLink.externalLink.url
                  : `/${language}/${dropdownLink.link.url.replace("/", "")}`
                }
                target={dropdownLink._type === "dropdownExternalLink" ? "_blank" : ""}
              >
                {dropdownLink._type === "dropdownExternalLink" ? dropdownLink.externalLink.title : dropdownLink.link.title}
              </NavDropdown.Item>
            </div>
          ) : (
            <NavDropdown.Item
              key={dropdownLink._key}
              href={dropdownLink._type === "dropdownExternalLink" ? dropdownLink.externalLink.url
                : `/${language}/${dropdownLink.link.url.replace("/", "")}`
              }
              target={dropdownLink._type === "dropdownExternalLink" ? "_blank" : ""}
            >
              {dropdownLink._type === "dropdownExternalLink" ? dropdownLink.externalLink.title : dropdownLink.link.title}
            </NavDropdown.Item>
          )
        )}
      </NavDropdown>
    ) :
      link._type === "menuLink" ?
        (
          <Nav.Link
            href={`/${language}/${link.link.url.replace("/", "")}`}
            key={link._key}
          >
            {link.icon !== null && <Icon code={link.icon.icon}></Icon>}
            {link.link.title}
          </Nav.Link>
        ) : (
          <Nav.Link
            href={link.externalLink.url}
            key={link._key}
            target="_blank"
          >
            {link.icon !== null && <Icon code={link.icon.icon}></Icon>}
            {link.externalLink.title}
          </Nav.Link>
        )
  );

  const buttonMenu = button !== null ? (
    <Button target="_blank" href={button.url}> {button.title}</Button>
  ) : <></>


  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <MaterialIcon code="MdMenu" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">{itemsMenu}</Nav>
        {buttonMenu}
      </Navbar.Collapse>
    </>
  );
};

export default Menu;
