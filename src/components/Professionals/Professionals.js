import React, { useContext } from "react";
import "./Professionals.scss";
import useProfessionals from "../../hooks/useProfessionals";
import { LanguageContext } from "../../context/languajeContext";
import ProfessionalCard from "./ProfessionalCard";

const Professionals = () => {
  let query = useProfessionals();
  const { language } = useContext(LanguageContext);
  let data = null;

  let defaultData = null;

  console.log(query, "query");

  if (language === "es") {
    data = query.allSanityProfessional.ProfessionalsES;
  } else {
    if (language === "de") {
      data = query.allSanityProfessional.ProfessionalsDE;
    } else {
      data = query.allSanityProfessional.ProfessionalsEN;
    }
  }

  if (language === "es") {
    defaultData = query.sanityProfessionalConfigES;
  } else {
    if (language === "de") {
      defaultData = query.sanityProfessionalConfigDE;
    } else {
      defaultData = query.sanityProfessionalConfig;
    }
  }

  const professionals = data.map((professional) => {
    return (
      <ProfessionalCard
        defaultPhoto={defaultData.photoDefault.image}
        photo={professional.image.image}
        ranking={professional.ranking?.ranking}
        official={professional.official}
        verified={professional.verified}
        name={professional.name}
        professions={professional.profession}
        services={professional.services}
        address={professional.address}
        slug={professional.slug.current}
        logoAcademy={defaultData.academyLogo.image}
      />
    );
  });

  return <div className="container">{professionals}</div>;
};

export default Professionals;
