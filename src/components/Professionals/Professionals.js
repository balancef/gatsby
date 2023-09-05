import React, { useContext } from "react";
import "./Professionals.scss";
import useProfessionals from "../../hooks/useProfessionals";
import { LanguageContext } from "../../context/languajeContext";
import ProfessionalCard from "./ProfessionalCard";

const Professionals = () => {
  let query = useProfessionals();
  const { language } = useContext(LanguageContext);
  let data = null;

  if (language === "es") {
    data = query.allSanityProfessional.ProfessionalsES;
  } else {
    if (language === "de") {
      data = query.allSanityProfessional.ProfessionalsDE;
    } else {
      data = query.allSanityProfessional.ProfessionalsEN;
    }
  }

  const professionals = data.map((professional) => {
    return (
      <ProfessionalCard
        photo={professional.image}
        ranking={professional.ranking}
        official={professional.official}
        verified={professional.verified}
        name={professional.name}
        professions={professional.profession}
        services={professional.services}
        address={professional.address}
      />
    );
  });

  return <div className="container">{professionals}</div>;
};

export default Professionals;
