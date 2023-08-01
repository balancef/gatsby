import React from "react";
import PropTypes from "prop-types";

import * as Meterial from "react-icons/md";

const MaterialIcon = ({ code }) => {
  const icon = React.createElement(Meterial[code]);
  return <div className="icon">{icon}</div>;
};
MaterialIcon.propTypes = {
  code: PropTypes.string.isRequired,
};
export default MaterialIcon;
