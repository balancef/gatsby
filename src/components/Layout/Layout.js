
import React from "react";
import PropTypes from 'prop-types'
import { Header, Footer} from "..";
import ThemeProvider from "../../context/themeContext";

import "./Layout.scss";

const Layout = ({ children }) => {

  return (
    <ThemeProvider>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
export default Layout;
