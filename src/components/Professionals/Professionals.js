import React, { useRef, useContext, useState, useEffect } from "react";
import unorm from "unorm";
import { Link } from "gatsby";
import "./Professionals.scss";
import useProfessionals from "../../hooks/useProfessionals";
import useServices from "../../hooks/useServices";
import useWindowSize from "../../hooks/useWindowSize";
import useGeolocation from "../../hooks/useGeolocation";
import { LanguageContext } from "../../context/languajeContext";
import { dataLanguageTexts } from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDown,
  FaAngleUp,
  FaStar,
} from "react-icons/fa";
import emptyState from "../../images/emptyState.png";
import ProfessionalCard from "./ProfessionalCard";
import { Seo } from "../";
import useRankings from "../../hooks/useRankings";
import useProfessions from "../../hooks/useProfessions";
import useSearchPage from "../../hooks/useSearchPage";
import useContact from '../../hooks/useContact'
import { Icon } from "..";

const Professionals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const pageNumbers = [];
  const wrapperRef = useRef(null);
  const dimensions = useWindowSize();
  // const countryCode = useGeolocation();
  const countryCode = "";

  const [showFilter, setShowFilter] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedRankings, setSelectedRankings] = useState([]);
  const [selectedProfessions, setSelectedProfessions] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  let query = useProfessionals();
  let page = useSearchPage();
  let services = useServices().allSanityServices;
  let rankings = useRankings().allSanityRanking;
  let professions = useProfessions().allSanityProfession;
  let bccEmails = useContact().allSanityContact.ContactEN[0].ccEmails

  const { language } = useContext(LanguageContext);

  let data = null;
  let defaultData = null;
  let servicesData = null;
  let professionsData = null;
  let rankingsData = null;
  let pageData = null;
  const texts = language !== null && dataLanguageTexts[language];

  if (language === "es") {
    data = query.allSanityProfessional.ProfessionalsES;
    defaultData = query.sanityProfessionalConfigES;
    servicesData = services.ServicesES;
    rankingsData = rankings.RankingES;
    professionsData = professions.ProfessionES;
    pageData = page.SearchPageES;
  } else {
    if (language === "de") {
      data = query.allSanityProfessional.ProfessionalsDE;
      defaultData = query.sanityProfessionalConfigDE;
      servicesData = services.ServicesDE;
      rankingsData = rankings.RankingDE;
      professionsData = professions.ProfessionDE;
      pageData = page.SearchPageDE;
    } else {
      data = query.allSanityProfessional.ProfessionalsEN;
      defaultData = query.sanityProfessionalConfig;
      servicesData = services.ServicesEN;
      rankingsData = rankings.RankingEN;
      professionsData = professions.ProfessionEN;
      pageData = page.SearchPageEN;
    }
  }

  const countryList = [...new Set(data.map((item) => item.country))];

  const matchingCountry = countryList.find(
    (item) => item.countryCode === countryCode
  );
  let temp = "";
  if (matchingCountry) {
    temp = matchingCountry.country;
  }

  const [selectedCountry, setSelectedCountry] = useState(temp);

  function removeDiacritics(str) {
    return unorm.nfkd(str).replace(/[\u0300-\u036f]/g, "");
  }

  function extractNumberWithIcon(inputString) {
    const match = inputString.match(/\d+/);

    if (match) {
      const number = match[0];
      const result = (
        <p>
          <FaStar size={14} />
          {number}
        </p>
      );
      return result;
    } else {
      return inputString;
    }
  }

  const [filteredProfessionalsList, setFilteredProfessionalsList] =
    useState(data);

  useEffect(() => {
    let newData;
    if (language === "es") {
      newData = query.allSanityProfessional.ProfessionalsES;
    } else if (language === "de") {
      newData = query.allSanityProfessional.ProfessionalsDE;
    } else {
      newData = query.allSanityProfessional.ProfessionalsEN;
    }
    setFilteredProfessionalsList(newData);
  }, [language]);

  const uniqueCountries = [
    ...new Set(data.map((item) => item.country.country)),
  ];

  const handleSearch = () => {
    const query = removeDiacritics(searchQuery.toLowerCase());

    if (query === "") {
      setFilteredProfessionalsList(data);
      return;
    }

    const filtered = data.filter((professional) => {
      const { address, name, profession, services, country } = professional;

      const matches =
        removeDiacritics(address.toLowerCase()).includes(query) ||
        removeDiacritics(name.toLowerCase()).includes(query) ||
        removeDiacritics(country.country.toLowerCase()).includes(query) ||
        profession.some((p) =>
          removeDiacritics(p.professionDescription.toLowerCase()).includes(
            query
          )
        ) ||
        profession.some((p) =>
          removeDiacritics(p.profession.toLowerCase()).includes(query)
        ) ||
        services.some((s) =>
          removeDiacritics(s.services.toLowerCase()).includes(query)
        );

      return matches;
    });

    setFilteredProfessionalsList(filtered);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
    if (inputValue === "") {
      setFilteredProfessionalsList(data);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const renderRankingCheckboxes = () => {
    const sortedRankings = rankingsData.sort((a, b) => a.priority - b.priority);

    return sortedRankings.map((item) => (
      <label key={item.priority}>
        <input
          type="checkbox"
          value={item.ranking}
          checked={selectedRankings.includes(item.ranking)}
          onChange={handleRankingCheckboxChange}
        />
        {extractNumberWithIcon(item.ranking)}
      </label>
    ));
  };

  const renderProfessionsCheckboxes = () => {
    return professionsData.map((item) => (
      <label key={item.profession}>
        <input
          type="checkbox"
          value={item.profession}
          checked={selectedProfessions.includes(item.profession)}
          onChange={handleProfessionCheckboxChange}
        />
        <p>
          {item.profession}
          <p className="profession-description">{item.professionDescription}</p>
        </p>
      </label>
    ));
  };

  const renderServicesCheckboxes = () => {
    return servicesData
      .sort((a, b) => a.services.localeCompare(b.services))
      .map((item) => (
        <label key={item.id}>
          <input
            type="checkbox"
            value={item.services}
            checked={selectedServices.includes(item.services)}
            onChange={handleServicesCheckboxChange}
          />
          {item.services}
        </label>
      ));
  };

  const handleRankingCheckboxChange = (e) => {
    const ranking = e.target.value;
    if (selectedRankings.includes(ranking)) {
      setSelectedRankings(selectedRankings.filter((item) => item !== ranking));
    } else {
      setSelectedRankings([...selectedRankings, ranking]);
    }
  };

  const handleProfessionCheckboxChange = (e) => {
    const profession = e.target.value;
    if (selectedProfessions.includes(profession)) {
      setSelectedProfessions(
        selectedProfessions.filter((item) => item !== profession)
      );
    } else {
      setSelectedProfessions([...selectedProfessions, profession]);
    }
  };

  const handleServicesCheckboxChange = (e) => {
    const service = e.target.value;
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleCountrySelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const resetFilters = () => {
    setSelectedCountry("");
    setSelectedRankings([]);
    setSelectedProfessions([]);
    setSelectedServices([]);
  };

  const filteredProfessionals = filteredProfessionalsList.filter(
    (professional) => {
      const matchesRanking =
        selectedRankings.length === 0 ||
        selectedRankings.includes(professional.ranking.ranking);
      const matchesProfession =
        selectedProfessions.length === 0 ||
        selectedProfessions.every((selectedProf) => {
          return professional.profession.some(
            (prof) => prof.profession === selectedProf
          );
        });
      const matchesServices =
        selectedServices.length === 0 ||
        selectedServices.every((selectedService) => {
          return professional.services.some(
            (service) => service.services === selectedService
          );
        });
      const matchesCountry =
        !selectedCountry || professional.country.country === selectedCountry;

      return (
        matchesRanking && matchesProfession && matchesServices && matchesCountry
      );
    }
  );

  const professionals = filteredProfessionals
    .sort((a, b) => a.ranking.priority - b.ranking.priority)
    .map((professional) => {
      return (
        <ProfessionalCard
          defaultPhoto={defaultData.photoDefault.image}
          photo={professional.image?.image}
          ranking={professional.ranking?.ranking}
          official={professional?.official}
          verified={professional?.verified}
          name={professional.name}
          professions={professional.profession}
          services={professional?.services}
          address={professional.address}
          slug={professional.slug?.current}
          logoAcademy={defaultData?.academyLogo.image}
          descriptionDefault={defaultData._rawDescriptionDefault}
          certificateNumber={professional?.certificateNumber}
          certificateDate={professional?.certificateDate}
          lastCertificateUpdate={professional?.lastCertificateUpdate}
          validTo={professional?.validTo}
          description={professional._rawDescription}
          phone={professional.phone}
          email={professional.email}
          bccEmails={bccEmails}
          website={professional?.website}
          emailSubject={defaultData?.contactForm.title}
          emailBody={defaultData?.contactForm.templateContent}
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
    <>
      <Seo
        title={pageData.titlePage}
        description={pageData.description}
        keywords=""
      />
      <div ref={wrapperRef}>
        <div>
          <div className="search-container">
            <div className="container">
              <h6 className="input-title">{texts.inputTitle}</h6>
              <div className="input-container">
                <input
                  type="text"
                  placeholder={texts.inputPlaceholder}
                  value={searchQuery}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <div className="search-icon" onClick={handleSearch}>
                  <Icon code={"FaSearch"}></Icon>
                </div>
              </div>
            </div>
          </div>
          <h6 className="container mt-4">
            {selectedCountry
              ? `${texts.allIn} ${selectedCountry}`
              : texts.allResults}
          </h6>
          <div className="container filter-wrapper">
            <div className={`filter ${showFilter ? "filter-expanded" : ""}`}>
              <button
                className="filter-button"
                onClick={() => setShowFilter(!showFilter)}
              >
                {texts.filterBy}{" "}
                <span className={showFilter ? "rotate180" : ""}>
                  <FaAngleDown size={16} />
                </span>
              </button>
              <div
                className={`filter-container ${
                  showFilter && dimensions.windowWidth < 768
                    ? "show-filter"
                    : ""
                }`}
              >
                <div className="filter-description">
                  <p>{texts.filterBy}:</p>
                  <button onClick={resetFilters}>{texts.resetFilters}</button>
                </div>

                <select
                  className="filter-select"
                  value={selectedCountry}
                  onChange={handleCountrySelectChange}
                >
                  <option value="">{texts.allCountries}</option>
                  {uniqueCountries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="filter-checkbox ranking">
                  <p className="checkbox-title">{texts.ranking}</p>
                  {renderRankingCheckboxes()}
                </div>
                <div className="filter-checkbox professions">
                  <p className="checkbox-title">{texts.profession}</p>
                  {renderProfessionsCheckboxes()}
                </div>
                <div className="filter-checkbox services">
                  <p className="checkbox-title">{texts.services}</p>
                  {renderServicesCheckboxes()}
                </div>
                <div className="no-service-results">
                  <p>
                    {texts.noServices}{" "}
                    <a
                      href={`${
                        language === "en" ? "" : `/${language}`
                      }/help/${pageData?.linkToHelpPage?.slug.current}`}
                    >
                      {texts.moreInfo}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="results-container">
              {currentProfessionals.length !== 0 ? (
                <div> {currentProfessionals}</div>
              ) : (
                <div className="results-empty-state">
                  <img
                    src={emptyState}
                    alt="no results"
                    className="image-empty-state"
                  />
                  <h5>{texts.noResults}</h5>
                  <p>{texts.noResultsExplain}</p>
                </div>
              )}

              {pageNumbers.length >= 2 ? (
                <nav>
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
                          <li
                            key={number}
                            className="Pagination__item active-page"
                          >
                            <Link
                              onClick={() => paginate(number)}
                              to="#professionals"
                              className={`Pagination__link`}
                            >
                              {number}
                            </Link>
                          </li>
                        ) : (
                          <li key={number} className="Pagination__item">
                            <Link
                              onClick={() => paginate(number)}
                              to="#professionals"
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
                        <Link
                          onClick={() => paginate(currentPage + 1)}
                          to="#professionals"
                        >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Professionals;
