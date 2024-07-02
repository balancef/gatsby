import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  FaAngleDown,
  FaStar,
} from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import GoogleMap from "../Map/map"
import axios from "axios"

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
  mapFitBounds,
  landingCountry
}) => {
  const wrapperRef = useRef(null);
  const dimensions = useWindowSize();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRankings, setSelectedRankings] = useState([]);
  const [selectedProfessions, setSelectedProfessions] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [results, setResults] = useState(data);
  const filterByValidTo = true;
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [mapFitBoundsPoints, setMapFitBoundsPoints] = useState(mapFitBounds?.length > 0 ? mapFitBounds : null)

  const handleClose = () => setShowFiltersModal(false);
  
  const handleShow = () => setShowFiltersModal(true);
  
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

  useEffect(() => {
    const fetchUserCountry = async () => {
      if(landingCountry) {
        setSelectedCountry(landingCountry)
        return
      };
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.GATSBY_GEOAPIFY_API_KEY}`
        );
        if(response.status === 200) {
          const countryName = response.data.country?.names?.en ? response.data.country.names.en : response.data.country.name
          setSelectedCountry(countryName);
        }
      } catch (error) {
        console.error("Error fetching user country:", error);
      }
    };
    fetchUserCountry();
  }, []);

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
    setMapFitBoundsPoints(null);
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
          {dimensions.windowWidth <= 992 && (
          <div className='container-fluid mt-4 mb-4' style={{display:"flex", justifyContent: "space-between"}}>
            <h6 style={{margin: 0}}>
              {selectedCountry && countriesData.find(country => country.countryCode === selectedCountry) ? (
                `${texts.allIn} ${countriesData.find(country => country.countryCode === selectedCountry)?.country}`
              ) : (
                texts.allResults
              )}
            </h6>
            
              <Button 
                style={{backgroundColor: "#FFA301", borderColor: "#FFA301"}} 
                size="sm" onClick={()=>handleShow()}>{texts.filters}
              </Button>
            
          </div>
          )}
          <div className="filter-wrapper">
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
                    <p>{texts.moveTo}</p>
                </div>

                <select
                  className="filter-select"
                  value={selectedCountry}
                  onChange={handleCountrySelectChange}
                >
                  <option value="">{texts.allCountries}</option>
                  {countriesData.map((country) => (
                    <option key={country.country} value={country.country}>
                      {country.country}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className={`filter-container ${
                  showFilter && dimensions.windowWidth <= 992
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
                mapFitBounds={mapFitBoundsPoints}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal 
        className="professional-filter-modal"
        show={showFiltersModal} 
        backdrop="static"
        onHide={handleClose} 
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header style={{backgroundColor: "#FFA301", color: "white"}}>
          <Modal.Title>{texts.filters}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{paddingRight: "0"}}>
        <div>
            <div className={`dialog-filter`}>
              <div>
                <div className="filter-description">
                    <p>{texts.moveTo}</p>
                </div>

                <select
                  className="filter-select"
                  value={selectedCountry}
                  onChange={handleCountrySelectChange}
                >
                  <option value="">{texts.allCountries}</option>
                  {countriesData.map((country) => (
                    <option key={country.country} value={country.country}>
                      {country.country}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className={`show-filter`}
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
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" style={{backgroundColor: "#FFA301", borderColor: "#FFA301"}} onClick={handleClose}>
            {texts.apply}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfessionalsFilter;
