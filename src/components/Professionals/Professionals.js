import React, { useRef, useContext, useState } from "react";
import { Link } from "gatsby";
import "./Professionals.scss";
import useProfessionals from "../../hooks/useProfessionals";
import { LanguageContext } from "../../context/languajeContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProfessionalCard from "./ProfessionalCard";

const Professionals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const pageNumbers = [];
  const wrapperRef = useRef(null);

  let query = useProfessionals();
  const { language } = useContext(LanguageContext);
  let data = null;

  let defaultData = null;

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

  console.log(data, "data");

  const professionals = data
    .sort((a, b) => a.ranking.priority - b.ranking.priority)
    .map((professional) => {
      return (
        <ProfessionalCard
          defaultPhoto={defaultData.photoDefault.image}
          photo={professional.image?.image}
          ranking={professional.ranking?.ranking}
          official={professional.official}
          verified={professional.verified}
          name={professional.name}
          professions={professional.profession}
          services={professional.services}
          address={professional.address}
          slug={professional.slug?.current}
          logoAcademy={defaultData.academyLogo.image}
          descriptionDefault={defaultData._rawDescriptionDefault}
          certificateNumber={professional.certificateNumber}
          certificateDate={professional.certificateDate}
          lastCertificateUpdate={professional.lastCertificateUpdate}
          validTo={professional.validTo}
          description={professional._rawDescription}
          phone={professional.phone}
          email={professional.email}
          website={professional.website}
        />
      );
    });

  for (let i = 1; i <= Math.ceil(professionals?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProfessionals = professionals?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );


  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    wrapperRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={wrapperRef}>
      <div> {currentProfessionals}</div>
      {pageNumbers.length >= 2 ? (
        <nav className="container">
          <ul className="Pagination">
            {currentPage !== 1 && (
              <li className="Pagination__item">
                {currentPage !== 1 ? (
                  <Link
                    onClick={() => paginate(currentPage - 1)}
                    to="#professionals"
                  >
                    <FaChevronLeft />
                  </Link>
                ) : (
                  <FaChevronLeft />
                )}
              </li>
            )}
            {pageNumbers.map((number) => (
              <>
                {number === currentPage ? (
                  <li key={number} className="Pagination__item active-page">
                    <Link
                      onClick={() => paginate(number)}
                      to="#Professionals"
                      className={`Pagination__link`}
                    >
                      {number}
                    </Link>
                  </li>
                ) : (
                  <li key={number} className="Pagination__item">
                    <Link
                      onClick={() => paginate(number)}
                      to="#Professionals"
                      className={`Pagination__link `}
                    >
                      {number}
                    </Link>
                  </li>
                )}
              </>
            ))}
            <li className="Pagination__item">
              {currentPage !== pageNumbers[pageNumbers.length - 1] ? (
                <Link onClick={() => paginate(currentPage + 1)} to="#Articles">
                  <FaChevronRight />
                </Link>
              ) : (
                <FaChevronRight />
              )}
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Professionals;
