
import React from "react";
import PropTypes from 'prop-types'
import { Header, Footer} from "..";

import "./Layout.scss";

const Layout = ({ children }) => {

  return (
    <>
    <Header/>
      <main>{children}</main>
    <Footer/>
    </>

  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
export default Layout;
