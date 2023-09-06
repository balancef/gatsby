import React, { useContext } from "react";
import "./Professionals.scss";
import { FaStar } from "react-icons/fa";
import { CustomLink } from "..";
import { LanguageContext } from "../../context/languajeContext";
import SanityImage from "gatsby-plugin-sanity-image";
import verifiedImg from "../../images/verified_badge.png";

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
    } else {
      return <p>{ranking}</p>;
    }
  }

  return (
    <div className="container">
      <div className="professionalWrapper">
        <div className="leftContainer">
          {photo && (
            <div className="professional__image">
              <SanityImage {...photo} alt={`${name}`} />
            </div>
          )}
          {ranking && <RankingComponent ranking={ranking} />}
          <p> {name}</p>
         {official && (
            <div className="professional__academyLogo">
              <SanityImage {...logoAcademy} alt={`${name}`} />
            </div>
          )}
          {verified && <img src={verifiedImg} alt="verified" className="professional__verified"/>}
        </div>
        <div className="rightContainer">
          {/* Content for the right container */}
        </div>
        <CustomLink
          href={language === "en" ? slug : `/${language}/search/${slug}`}
          text={"Ver mas"}
          type={"button"}
        />
      </div>
    </div>
  );
};

export default ProfessionalCard;
