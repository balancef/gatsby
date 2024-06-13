import React from "react";
import PropTypes from 'prop-types'
import { Header } from "..";
import { LanguageProvider } from "../../context/languajeContext";

import "./Layout.scss";

const Layout = ({ children }) => {

  return (
    <LanguageProvider>
      <Header/>
      <main>{children}</main>
    </LanguageProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
export default Layout;