import React from "react";
import { Link } from "gatsby";
import { Icon } from "..";
import { Dropdown, DropdownButton, Navbar } from "react-bootstrap";
import "./Header.scss";

const MenuHeader = ({ headerMenu, language }) => {
  const itemsMenuLinks = headerMenu.links.map((link) => (
    <Navbar.Text key={link._key}>
      {link.link.url.includes("http") || link.link.url.includes("https") ? (
        <a
          href={
            language === "en"
              ? link.link.url
              : `/${language}/${link.link.url.replace("/", "")}`
          }
          className="header_link"
          target="_blank"
          rel="noreferrer"
        >
          {link.icon !== null && <Icon code={link.icon.icon}></Icon>}
          {link.link.title}
        </a>
      ) : (
        <Link
          to={
            language === "en"
              ? link.link.url
              : `/${language}/${link.link.url.replace("/", "")}`
          }
          className="header_link"
        >
          {link.icon !== null && <Icon code={link.icon.icon}></Icon>}
          {link.link.title}
        </Link>
      )}
    </Navbar.Text>
  ));

  const itemsMenuDropdown = (
    <DropdownButton
      title={headerMenu.dropdownTitle}
      id="basic-nav-dropdown"
      className="drop-options"
      drop="start"
    >
      {headerMenu.links.map((dropdownLink) => (
        <Dropdown.Item
          key={dropdownLink._key}
          href={
            language === "en"
              ? dropdownLink.link.url
              : `/${language}/${dropdownLink.link.url.replace("/", "")}`
          }
        >
          {dropdownLink.link.title}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );

  return (
    <>
      {itemsMenuLinks}
      {itemsMenuDropdown}
    </>
  );
};

export default MenuHeader;
