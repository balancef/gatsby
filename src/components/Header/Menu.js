import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MaterialIcon, Icon } from "..";

const Menu = ({ links }) => {
  const itemsMenu = links.map((link) =>
    link._type === "dropdown" ? (
      <NavDropdown
        title={
          <div className="nav-link">
            {link.icon !== null && <Icon code={link.icon.icon}></Icon>}
            {link.text}
          </div>
        }
        id="basic-nav-dropdown"
      >
        {link.links.map((dropdownLink) =>
          dropdownLink.separated ? (
            <>
              <NavDropdown.Divider />
              <NavDropdown.Item href={dropdownLink.link.url}>
                {dropdownLink.link.text}
              </NavDropdown.Item>
            </>
          ) : (
            <NavDropdown.Item href={dropdownLink.link.url}>
              {dropdownLink.link.text}
            </NavDropdown.Item>
          )
        )}
      </NavDropdown>
    ) : (
      <Nav.Link href={link.link.url}>
        {link.icon !== null && <Icon code={link.icon.icon}></Icon>}
        {link.link.text}
      </Nav.Link>
    )
  );
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <MaterialIcon code="MdMenu" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">{itemsMenu}</Nav>
      </Navbar.Collapse>
    </>
  );
};

export default Menu;
