import "./ProfessionalPage.scss"
import CustomLink from "../CustomLink/CustomLink";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import React, { useContext } from "react";
import { LanguageContext } from "../../context/languajeContext";
import useProfessionals from "../../hooks/useProfessionals";
import verifiedImg from "../../images/verified_badge.png";
import { FaStar } from "react-icons/fa";


const ProfessionalPage = ({ professionalData }) => {
  console.log(professionalData);

  const professions = professionalData.profession?.map((profession) => (
    <div className="Professional__content-profession">
      <h5 className="Professional__content-profession__title">{profession.profession}</h5>
      <p className="Professional__content-profession__description">{profession.professionDescription}</p>
    </div>
  ));

  let texto = ""
  const services = professionalData?.services.map((services) => (
    texto = services.services 
  ));


  const professionalServices = services.join(", "); 



  let query = useProfessionals();
  const { language } = useContext(LanguageContext);

  let defaultData = null;


  if (language === "es") {
    defaultData = query.sanityProfessionalConfigES;
  } else {
    if (language === "de") {
      defaultData = query.sanityProfessionalConfigDE;
    } else {
      defaultData = query.sanityProfessionalConfig;
    }
  }

  function RankingComponent({ professional }) {
    if (professional.includes("1")) {
      return (
        <div>
          <FaStar />
        </div>
      );
    } else if (professional.includes("2")) {
      return (
        <div>
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (professional.includes("3")) {
      return (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (professional.includes("4")) {
      return (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (professional.includes("5")) {
      return (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else {
      return <p>{professional}</p>;
    }
  }

  return (


  <div className="container section-padding">
    <div className="regresar">
      <CustomLink text="Regresar" href="../" />
    </div>
    <div className="Professional">
      <div className="Professional-image-ranking">
        <SanityImage {...professionalData.image.image} alt={`${professionalData.name}`} />
        <RankingComponent professional={professionalData.ranking.ranking} />
      </div>
      <div className="Professional-academy-verified">
        { defaultData?.academyLogo && <SanityImage {...defaultData.academyLogo.image} alt={`${professionalData.academy}`} className="Professional-academy-verified-logoAcademy" />}
        {professionalData.verified && <img src={verifiedImg} alt="verified" className="Professional-academy-verified-icon"/>}
      </div>
    </div>
    <div className="Professional__content">
      <h4 className="Professional__content-title">{professionalData.name}</h4>
      <p className="Professional__content-location">{professionalData.address}</p>
      <ul className="Professional__content-date"> {/* agregar los iconos */}
        {professionalData.certificateNumber && <li>{professionalData.certificateNumber}</li>}
        {professionalData.certificateDate && <li>{professionalData.certificateDate}</li>}
        {professionalData.lastCertificateUpdate && <li>{professionalData.lastCertificateUpdate}</li>}
        {professionalData.validTo && <li>{professionalData.validTo}</li>}
      </ul>
      <div className="Professional__content-description">
        {professionalData._rawDescription && <PortableText value={professionalData._rawDescription} />}
      </div>
      {professions}
      <div className="Professional__content-services">
        {professionalServices}
      </div>
      <div className="Professional__contact">
        <ul> {/* Agregar los iconos */}
          {professionalData.phone && <CustomLink text={professionalData.phone} href={`phone:${professionalData.phone}`} className="Professional__contact-phone" />}
          {professionalData.email && <CustomLink text={professionalData.email} href={`mailto:${professionalData.email}`} className="Professional__contact-email" />}
          {professionalData.website && <CustomLink text={professionalData.website} href={professionalData.website} className="Professional__contact-website" />}
        </ul>

      </div>

    </div>

  </div>

  );


};

export default ProfessionalPage;
