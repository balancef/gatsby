import React from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import PropTypes from "prop-types";
import MaterialIcon from "./MetertialIcon";

const Icon = ({ code, url, altText }) => {
  const icon = (
    <>
      {code?.startsWith("Md") ? (
        <MaterialIcon code={code}></MaterialIcon>
      ) : (
        <FontAwesomeIcon code={code}></FontAwesomeIcon>
      )}
    </>
  );

  if (url) {
    return <a href={url} title={altText}>{icon}</a>;
  }

  return icon;
};
FontAwesomeIcon.propTypes = {
  code: PropTypes.string.isRequired,
};
export default Icon;
