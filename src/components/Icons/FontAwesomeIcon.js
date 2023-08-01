import React from "react";
import PropTypes from "prop-types";
import * as FontAwesome from "react-icons/fa";

import "./Icon.scss"

const FontAwesomeIcon = ({ code }) => {
  const icon = React.createElement(FontAwesome[code]);
  return <div className="icon">{ icon }</div>;
};
FontAwesomeIcon.propTypes = {
  code: PropTypes.string.isRequired,
};
export default FontAwesomeIcon;
