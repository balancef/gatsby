import React from "react";

const ProfessionalPage = ({ professionalData }) => {
  console.log(professionalData);
  return <div className="container">{professionalData.name}</div>;
};

export default ProfessionalPage;
