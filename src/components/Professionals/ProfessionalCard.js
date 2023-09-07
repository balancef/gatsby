import React, { useContext } from "react";
import "./Professionals.scss";
import { FaStar } from "react-icons/fa";
import { MdInfo, MdLocationOn } from "react-icons/md";
import { CustomLink } from "..";
import { LanguageContext } from "../../context/languajeContext";
import SanityImage from "gatsby-plugin-sanity-image";
import verifiedImg from "../../images/verified_badge.png";
import masterImg from "../../images/master.png";

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
}) => {
  const { language } = useContext(LanguageContext);


  const professionList = professions.map((item) => item.profession).join(", ");
  const serviceList = services.map((item) => item.services).join(", ");

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
    <div className="container">
      <div className="professionalWrapper">
        <div className="leftContainer">
          <div className="professional__image">
            <SanityImage {...(photo ? photo : defaultPhoto)} alt={`${name}`} />
          </div>
          {ranking && (
            <div className="professional__ranking">
              <RankingComponent ranking={ranking} />
            </div>
          )}

          <div className="professional__logos">
            {official && (
              <div className="professional__logos_academyLogo">
                <SanityImage {...logoAcademy} alt={`${name}`} />
              </div>
            )}
            {verified && (
              <img
                src={verifiedImg}
                alt="verified"
                className="professional__logos_verified"
              />
            )}
          </div>
        </div>
        <div className="rightContainer">
          <h5 className="professional__name">{name}</h5>
          {professions.length > 0 && (
            <div className="professional__professions">
              <p>{professionList}</p>
            </div>
          )}
          {services.length > 0 && (
            <div className="professional__services">
              <MdInfo size={20} />
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
                <MdLocationOn size={20} />
                <br />
                <p>{address}</p>
              </a>
            </div>
          )}
          <div className="pt-3">
            <CustomLink
              href={language === "en" ? slug : `/${language}/search/${slug}`}
              text={"Ver mas"}
              type={"button button-thin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
