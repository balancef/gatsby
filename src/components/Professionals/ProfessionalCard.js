import React from "react";
import "./Professionals.scss";



const ProfessionalCard = ({
  photo,
  ranking,
  official,
  verified,
  name,
  professions,
  services,
  address,
}) => {
  return (
    <div className="container">
      <div className="left-container">
        {name}
      </div>
      <div className="right-container">
        {/* Content for the right container */}
      </div>
    </div>
  );
};

export default ProfessionalCard;
