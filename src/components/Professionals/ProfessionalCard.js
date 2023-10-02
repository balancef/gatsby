import React, { useContext, useState } from "react";
import "./Professionals.scss";
import {
  FaStar,
  FaGraduationCap,
  FaRegClock,
  FaPhoneAlt,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import {
  MdInfo,
  MdLocationOn,
  MdEmail,
  MdOutlinePersonalVideo,
  MdMoreTime,
} from "react-icons/md";
import { LanguageContext } from "../../context/languajeContext";
import SanityImage from "gatsby-plugin-sanity-image";
import verifiedImg from "../../images/verified_badge.png";
import masterImg from "../../images/master.png";
import { PortableText } from "@portabletext/react";
import { BsGlobe } from "react-icons/bs";
import { CustomLink } from "..";
import { format } from "date-fns";
import { Link } from "gatsby";

const ProfessionalCard = ({
  logoAcademy,
  photo,
  ranking,
  defaultPhoto,
  official,
  verified,
  name,
  professions,
  services,
  address,
  slug,
  certificateNumber,
  certificateDate,
  lastCertificateUpdate,
  validTo,
  description,
  phone,
  email,
  bccEmails,
  emailSubject,
  emailBody,
  website,
  descriptionDefault,
}) => {
  const { language } = useContext(LanguageContext);

  const [IsExpanded, setIsExpanded] = useState(false);
  const ProfessionalDescription = () => {
    setIsExpanded(!IsExpanded);
  };

  const professionList = professions.map((item) => item.profession).join(", ");
  const serviceList = services.map((item) => item.services).join(", ");
  const bccEmailArray = bccEmails.split(",");

  const bccEmail1 = bccEmailArray[0] || "";
  const bccEmail2 = bccEmailArray[1] || "";

  function formatoFechas(fecha) {
    return format(new Date(fecha), "dd-MM-yyyy");
  }

  function RankingComponent({ ranking }) {
    if (ranking.includes("1")) {
      return (
        <div>
          <FaStar />
        </div>
      );
    } else if (ranking.includes("2")) {
      return (
        <div>
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (ranking.includes("3")) {
      return (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (ranking.includes("4")) {
      return (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (ranking.includes("5")) {
      return (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (ranking.toLowerCase() === "master") {
      return (
        <h6>
          <img
            src={masterImg}
            alt="verified"
            className="professional__ranking_logo"
          />
          {ranking}
        </h6>
      );
    } else {
      return <h6>{ranking}</h6>;
    }
  }

  return (
    <div className="container proContainer">
      <div className="professionalWrapper">
        <div className="leftContainer">
          <div className="professional__image">
            <SanityImage
              {...(photo ? photo : defaultPhoto)}
              alt={`${name}`}
              className="professional__image"
            />
          </div>
          {ranking && (
            <div className="professional__ranking">
              <RankingComponent ranking={ranking} />
            </div>
          )}

          {official && (
            <div className="professional__logos">
              <div className="professional__logos_academyLogo">
                <SanityImage {...logoAcademy} alt={`${name}`} />
              </div>
            </div>
          )}
        </div>
        <div className="rightContainer">
          <h5 className="professional__name">
            {name}{" "}
            {verified && (
              <img
                src={verifiedImg}
                alt="verified"
                className="professional__verified"
              />
            )}
          </h5>
          {professions.length > 0 && (
            <div className="professional__professions">
              <p>{professionList}</p>
            </div>
          )}
          {services.length > 0 && (
            <div className="professional__services">
              <MdInfo size={18} />
              <p>{serviceList}</p>
            </div>
          )}
          {address && (
            <div className="professional__address">
              <a
                href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <MdLocationOn size={18} />
                <br />
                <p>{address}</p>
              </a>
            </div>
          )}
          {IsExpanded && (
            <div className="professional__information">
              {certificateNumber && (
                <div className="professional__information-dates">
                  <ul>
                    <li
                      title={
                        language === "es"
                          ? "Número de certificación"
                          : language === "en"
                          ? "Certification number"
                          : "Zertifizierungsnummer"
                      }
                    >
                      <FaGraduationCap size={18} />
                      {certificateNumber}
                    </li>
                    {certificateDate && (
                      <li
                        title={
                          language === "es"
                            ? "Fecha de certificación"
                            : language === "en"
                            ? "Certification date"
                            : "Zertifizierungsdatum"
                        }
                      >
                        <MdOutlinePersonalVideo size={18} />
                        {formatoFechas(certificateDate)}
                      </li>
                    )}
                    {lastCertificateUpdate && (
                      <li
                        title={
                          language === "es"
                            ? "Ultima actualización"
                            : language === "en"
                            ? "Last update"
                            : "<Letztes Update>"
                        }
                      >
                        <FaRegClock size={20} />
                        {formatoFechas(lastCertificateUpdate)}
                      </li>
                    )}
                    {(validTo && ((ranking.toLowerCase() === "master") || (ranking.toLowerCase() === "supervisor"))) ? <></> : (
                      <li
                        title={
                          language === "es"
                            ? "Válido hasta"
                            : language === "en"
                            ? "Valid To"
                            : "Gültig bis"
                        }
                      >
                        <MdMoreTime size={20} />
                        {formatoFechas(validTo)}
                      </li>
                    )}
                  </ul>
                </div>
              )}
              <div className="professional__information-description">
                <PortableText
                  value={description ? description : descriptionDefault}
                />
              </div>
              {
                <div className="professional__information-contact">
                  <ul>
                    {phone && (
                      <li>
                        <FaPhoneAlt size={18} />
                        <CustomLink href={`phone:${phone}`} text={phone} />
                      </li>
                    )}
                    {email && (
                      <li>
                        <MdEmail size={18} />
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`mailto:${encodeURIComponent(
                            email
                          )}?bcc=${encodeURIComponent(
                            bccEmail1
                          )}&bcc=${encodeURIComponent(
                            bccEmail2
                          )}&subject=${`${emailSubject}`}&body=${emailBody}

                          `}
                        >
                          {email}
                        </a>
                      </li>
                    )}
                    {website && (
                      <li>
                        <BsGlobe size={18} />
                        <CustomLink href={website} text={website} />
                      </li>
                    )}
                  </ul>
                </div>
              }
            </div>
          )}
          <Link
            onClick={ProfessionalDescription}
            to="#professional"
            className="professional__button"
          >
            {IsExpanded
              ? language === "es"
                ? "Ocultar información"
                : language === "en"
                ? "Hide information"
                : "Informationen verheimlichen"
              : language === "es"
              ? "Más información"
              : language === "en"
              ? "More information"
              : "Mehr Informationen"}
            {IsExpanded ? <FaAngleUp size={18} /> : <FaAngleDown size={18} />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
