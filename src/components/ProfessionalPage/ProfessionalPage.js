import "./ProfessionalPage.scss"
import CustomLink from "../CustomLink/CustomLink";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import React, { useContext } from "react";
import { LanguageContext } from "../../context/languajeContext";
import useProfessionals from "../../hooks/useProfessionals";
import verifiedImg from "../../images/verified_badge.png";
import { FaStar, FaGraduationCap, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import masterImg from "../../images/master.png";
import { MdOutlineArrowBackIos, MdLocationOn, MdEmail, MdInfo, MdOutlinePersonalVideo, MdMoreTime } from "react-icons/md"
import { BsGlobe, BsFillFilePersonFill } from "react-icons/bs"


const ProfessionalPage = ({ professionalData }) => {

  const professionsList = professionalData?.profession?.map((profession) => profession.profession).join(", ");

  const servicesList = professionalData?.services?.map((services) => services.services).join(", ");



  let query = useProfessionals();
  const { language } = useContext(LanguageContext);

  let defaultData = null;
  let titleServices = null;
  let titleProfessions = null


  if (language === "es") {
    defaultData = query.sanityProfessionalConfigES;
    titleServices = "Servicios"
    titleProfessions = "Profesiones"
  } else {
    if (language === "de") {
      defaultData = query.sanityProfessionalConfigDE;
      titleServices = "Dienstleistungen"
      titleProfessions = "Berufe"
    } else {
      defaultData = query.sanityProfessionalConfig;
      titleServices = "Services"
      titleProfessions = "Professions"
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
    }
    else if (professional.toLowerCase() === ("master")) {
      return (
        <h6 className="Professional__ranking-master">
          <img src={masterImg} alt="Verefied" className="Professional__ranking-logo" />
          {professional}
        </h6>
      );
    }
    else {
      return <h6>{professional}</h6>;
    }
  }

  return (

    <div className="container section-padding">
      <div className="regresar mb-5">
        <CustomLink href={language === "en" ? "/search" : `/${language}/search`} icon={<MdOutlineArrowBackIos />} text={language === "en" ? "Go Back" : language === "es" ? "Regresar" : "Geh Zurück"}/>
      </div>
      <div className="ProfessionalPage py-5">
        <div className="Professional py-3">
          <div className="Professional__image">
            <SanityImage {...(professionalData.image ? professionalData.image.image : defaultData.photoDefault.image)} alt={`${professionalData.name}`} className="Professional__image-image" />
            <div className="Professional__ranking">
            <RankingComponent professional={professionalData.ranking.ranking} />
          </div>
          </div>
          <div className="Professional__logos">
            {defaultData?.academyLogo &&
              <div className="Professional__logos-academy" ><SanityImage {...defaultData.academyLogo.image} alt={`${professionalData.academy}`} className="Professional__logos-academy" /> </div>}
            {professionalData.verified && <img src={verifiedImg} alt="verified" className="Professional__logos-verified"/>}
          </div>
        </div>
        <div className="Professional__content">
          {professionalData.name && <h5 className="Professional__content-name py-3">{professionalData.name}</h5>}
          {professionalData.address &&
            <div className="Professional__content-location py-3">
              <MdLocationOn />
              <p>{professionalData.address}</p>
            </div>}
          <ul className="Professional__content-dates py-3">
            {professionalData.certificateNumber &&
              <div className="Professional__content-dates-certificateNumber">
                <li title={language === "es" ? "Número de certificación" : language === "en" ? "Certification number" : "Zertifizierungsnummer"}><FaGraduationCap />{professionalData.certificateNumber}</li>
              </div>}
            {professionalData.certificateDate && 
            <div className="Professional__content-dates-certificateDate">
              <li title={language === "es" ? "Fecha de certificación" : language === "en" ? "Certification date" : "Zertifizierungsdatum"}><MdOutlinePersonalVideo/>{professionalData.certificateDate}</li>
            </div>}
            {professionalData.lastCertificateUpdate &&
            <div className="Professional__content-dates-lastCertificateUpdate">
              <li title={language === "es" ? "Ultima actualización" : language === "en" ? "Last update" : "<Letztes Update>"}><FaRegClock/>{professionalData.lastCertificateUpdate}</li>
            </div>}
            {professionalData.validTo && 
            <div className="Professional__content-dates-validTo">
              <li title={language === "es" ? "Válido hasta" : language === "en" ? "Valid To" : "Gültig bis"}><MdMoreTime/>{professionalData.validTo}</li>
            </div>}
          </ul>
          {professionalData._rawDescription &&
            <div className="Professional__content-description py-3">
              <PortableText value={professionalData._rawDescription} />
            </div>}
          {{ professionsList } ?
            <div className="Professional__content-professions py-3">
              <p><BsFillFilePersonFill/>{titleProfessions}</p>
              <p>{professionsList}</p>
            </div> : <></>}
          {{ servicesList } ?
            <div className="Professional__content-services py-3">
              <p><MdInfo/>{titleServices}</p>
              <p>{servicesList}</p>
            </div> : <></>}
          <div className="Professional__contact py-3">
            <p>{language === "es" ? "Contacto" : language === "en" ? "Contact" : "contacto"}</p>
            <ul>
              {professionalData.phone &&
                <div className="Professional__contact-phone">
                  <FaPhoneAlt />
                  <CustomLink text={professionalData.phone} href={`phone:${professionalData.phone}`} />
                </div>}
              {professionalData.email &&
                <div className="Professional__contact-email">
                  <MdEmail />
                  <CustomLink text={professionalData.email} href={`mailto:${professionalData.email}`} />
                </div>}
              {professionalData.website &&
                <div className="Professional__contact-website">
                  <BsGlobe />
                  <CustomLink text={professionalData.website} href={professionalData.website} />
                </div>}
            </ul>

          </div>

        </div>
      </div>

    </div>

  );


};

export default ProfessionalPage;
