import React, { useContext } from "react";
import "./Professionals.scss";
import CertificateIcon from "../../images/certificate-outline.png"
import {
  FaStar,
  FaGraduationCap,
  FaRegClock,
  FaPhoneAlt,
  FaRegStar
} from "react-icons/fa";
import {
  MdInfo,
  MdLocationOn,
  MdEmail,
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
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301' />
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    } else if (ranking.includes("2")) {
      return (
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301'/>
          <FaStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    } else if (ranking.includes("3")) {
      return (
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    } else if (ranking.includes("4")) {
      return (
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    } else if (ranking.includes("5")) {
      return (
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
        </div>
      );
    } else if (ranking.toLowerCase() === "master") {
      return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "3px"}}>
          <img
            src={masterImg}
            alt="verified"
            height={28}
            width={22}
            style={{marginRight: "5px"}}
            className="professional__ranking_logo"
          />
          <h6 style={{fontWeight: "600"}}>{ranking}</h6>
        </div>
      );
    } else if (ranking.toLowerCase() === "supervisor") {
      return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "3px"}}>
          <h6 style={{fontWeight: "600"}}>{ranking}</h6>
        </div>
      );
    } else {
      return (
        <div style={{marginTop: "3px"}}>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    }
  }

  return (
    <div className="container proContainer">
      <div className="professionalWrapper">
        <div className="leftContainer">
          <div className="professional__image">
            {photo ? (
              <SanityImage
                {... photo}
                alt={`${name}`}
                className="professional__image"
              />
            ) : (
              <SanityImage
                {... defaultPhoto}
                alt={`${name}`}
                className="professional__image"
              />
            )}
          </div>
          {ranking && (
            <div className="professional__ranking">
              <RankingComponent ranking={ranking} />
            </div>
          )}

          {official && (
            <div className="professional__logos">
                <SanityImage {...logoAcademy} alt={`Logo academy`} />
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
                        <img style={{paddingRight: '5px'}} src={CertificateIcon}/>
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
                    {validTo ? (
                      ranking.toLowerCase() === "master" ||
                      ranking.toLowerCase() === "supervisor" ? (
                        <></>
                      ) : (
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
                      )
                    ) : (
                      <></>
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
                          rel="noreferrer"
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
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
