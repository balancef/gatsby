import React, { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import unorm from 'unorm';
import { FaAngleDown, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import ProfessionalCard from './ProfessionalCard';
import Icon from '../Icons/Icon';
import { Link } from 'gatsby';
import emptyState from "../../images/emptyState.png";
import axios from 'axios';

const ProfessionalsFilter = ({
  data, defaultData, servicesData,
  rankingsData, professionsData, pageData, texts, language, countriesData, bccEmails }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const pageNumbers = [];
  const wrapperRef = useRef(null);
  const dimensions = useWindowSize();
  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRankings, setSelectedRankings] = useState([]);
  const [selectedProfessions, setSelectedProfessions] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [results, setResults] = useState(data);
  const [filterByValidTo, setFilterByValidTo] = useState(true);
  const isValidToValid = (professional) => {
    if (professional?.ranking?.ranking && (professional?.ranking?.ranking.toLowerCase() === "master" || professional?.ranking?.ranking.toLowerCase() === "supervisor")) {
      return true;
    }
    const currentDate = new Date();
    const validToDate = new Date(professional.validTo);
    return validToDate > currentDate;
  };

  useEffect(() => {
    const apiKey = 'e6889c81cf7b4529a7dd8f062ef5848a';

    const fetchUserCountry = async () => {
      try {
        const response = await axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${apiKey}`);
        setSelectedCountry(response.data.country.iso_code);
      } catch (error) {
        console.error('Error fetching user country:', error);
      }
    };
    fetchUserCountry();

  }, []);

  useEffect(() => {
    setResults(
      data.filter(
        (professional) => {
          const hasMasterOrSupervisorRanking =
            professional.ranking?.ranking.toLowerCase() === "master" || professional.ranking?.ranking.toLowerCase() === "supervisor";
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
          const userCountryHasProfessionals = countriesData.some(country => country.countryCode === selectedCountry);
          const matchesCountry =
            !selectedCountry || !userCountryHasProfessionals || professional.country.countryCode === selectedCountry;
          const isValidTo = (hasMasterOrSupervisorRanking || filterByValidTo && isValidToValid(professional));
          return (
            matchesRanking && matchesProfession && matchesServices && matchesCountry && isValidTo
          );
        }
      )
    )


    setCurrentPage(1)
  }, [selectedRankings, selectedProfessions, selectedServices, selectedCountry, filterByValidTo, countriesData, data]);

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

  const handleSearch = () => {
    const query = removeDiacritics(searchQuery.toLowerCase());

    if (query === "") {
      setResults(results);
      return;
    }

    const filtered = results.filter((professional) => {
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

    setCurrentPage(1)

    setResults(filtered);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
    if (inputValue === "") {
      setResults(data);
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
        <small>
          {item.profession}
          <p className="profession-description">{item.professionDescription}</p>
        </small>
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

  const professionals = results
    .sort((a, b) => a.ranking.priority - b.ranking.priority)
    .map((professional, idx) => {
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
          key={`pro-${idx}`}
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
                  onKeyDown={handleKeyPress}
                />
                <button className="search-icon" onClick={handleSearch}>
                  <Icon code={"FaSearch"}></Icon>
                </button>
              </div>
            </div>
          </div>
          <h6 className="container mt-4">
            {countriesData.some(country => country.countryCode === selectedCountry)
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
                className={`filter-container ${showFilter && dimensions.windowWidth < 768
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
                  {countriesData.map((country) => (
                    <option key={country.country} value={country.countryCode}>
                      {country.country}
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
                      href={(language === "es" || language === "de") ?
                       `${language}/help/${pageData?.linkToHelpPage?.slug.current}` :
                        `/help/${pageData?.linkToHelpPage?.slug.current}`}
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
                    {pageNumbers.map((number, idx) => (
                      <div key={idx}>
                        {number === currentPage ? (
                          <li
                            key={idx}
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
                          <li key={idx} className="Pagination__item">
                            <Link
                              onClick={() => paginate(number)}
                              to="#professionals"
                              className={`Pagination__link `}
                            >
                              {number}
                            </Link>
                          </li>
                        )}
                      </div>
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

}

export default ProfessionalsFilter;