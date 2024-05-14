import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  FaAngleDown,
  FaStar,
} from "react-icons/fa";
import GoogleMap from "../Map/map"

const ProfessionalsFilter = ({
  data,
  defaultData,
  servicesData,
  rankingsData,
  professionsData,
  pageData,
  texts,
  language,
  countriesData,
  bccEmails,
}) => {
  const wrapperRef = useRef(null);
  const dimensions = useWindowSize();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRankings, setSelectedRankings] = useState([]);
  const [selectedProfessions, setSelectedProfessions] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("AR");
  const [results, setResults] = useState(data);
  const filterByValidTo = true;
  

  const isValidToValid = (professional) => {
    if (
      professional?.ranking?.ranking &&
      (professional?.ranking?.ranking.toLowerCase() === "master" ||
        professional?.ranking?.ranking.toLowerCase() === "supervisor")
    ) {
      return true;
    }
    const currentDate = new Date();
    const validToDate = new Date(professional.validTo);
    return validToDate > currentDate;
  };

  useEffect(() => {
    setResults(
      data.filter((professional) => {
        const hasMasterOrSupervisorRanking =
          professional.ranking?.ranking.toLowerCase() === "master" ||
          professional.ranking?.ranking.toLowerCase() === "supervisor";
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
        const isValidTo =
          (hasMasterOrSupervisorRanking || filterByValidTo) &&
          isValidToValid(professional);
        return (
          matchesRanking &&
          matchesProfession &&
          matchesServices &&
          isValidTo
        );
      })
    );

  }, [
    selectedRankings,
    selectedProfessions,
    selectedServices,
    filterByValidTo,
    countriesData,
    data,
  ]);

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
    setSelectedRankings([]);
    setSelectedProfessions([]);
    setSelectedServices([]);
  };

  return (
    <>
      <div ref={wrapperRef}>
        <div>
          <div className="search-container">
            <div className="container">
              <h6 className="input-title">{texts.inputTitle}</h6>
            </div>
          </div>
          <h6 className='container mt-4'>
            
            {selectedCountry && countriesData.find(country => country.countryCode === selectedCountry) ? (
              `${texts.allIn} ${countriesData.find(country => country.countryCode === selectedCountry)?.country}`
            ) : (
              texts.allResults
            )}
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
              <div>
                <div className="filter-description">
                    <p>Move to</p>
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
              </div>
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
              <GoogleMap 
                professionals={results} 
                logoAcademy={defaultData?.academyLogo.image}
                defaultPhoto={defaultData.photoDefault.image}
                country={selectedCountry}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalsFilter;
