import React, { useRef, useContext, useState, useEffect } from "react";
import unorm from "unorm";
import { Link } from "gatsby";
import "./Professionals.scss";
import useProfessionals from "../../hooks/useProfessionals";
import useServices from "../../hooks/useServices";
import { LanguageContext } from "../../context/languajeContext";
import { FaChevronLeft, FaChevronRight, FaAngleDown } from "react-icons/fa";
import ProfessionalCard from "./ProfessionalCard";
import useRankings from "../../hooks/useRankings";
import useProfessions from "../../hooks/useProfessions";
import { Icon } from "..";

const Professionals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const pageNumbers = [];
  const wrapperRef = useRef(null);

  const [showFilter, setShowFilter] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedRankings, setSelectedRankings] = useState([]);
  const [selectedProfessions, setSelectedProfessions] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  let query = useProfessionals();
  let services = useServices().allSanityServices;
  let rankings = useRankings().allSanityRanking;
  let professions = useProfessions().allSanityProfession;

  const { language } = useContext(LanguageContext);

  let data = null;
  let defaultData = null;
  let servicesData = null;
  let professionsData = null;
  let rankingsData = null;

  if (language === "es") {
    data = query.allSanityProfessional.ProfessionalsES;
    defaultData = query.sanityProfessionalConfigES;
    servicesData = services.ServicesES;
    rankingsData = rankings.RankingES;
    professionsData = professions.ProfessionES;
  } else {
    if (language === "de") {
      data = query.allSanityProfessional.ProfessionalsDE;
      defaultData = query.sanityProfessionalConfigDE;
      servicesData = services.ServicesDE;
      rankingsData = rankings.RankingDE;
      professionsData = professions.ProfessionDE;
    } else {
      data = query.allSanityProfessional.ProfessionalsEN;
      defaultData = query.sanityProfessionalConfig;
      servicesData = services.ServicesEN;
      rankingsData = rankings.RankingEN;
      professionsData = professions.ProfessionEN;
    }
  }

  function removeDiacritics(str) {
    return unorm.nfkd(str).replace(/[\u0300-\u036f]/g, "");
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

  console.log(filteredProfessionalsList, "list");
  console.log(data, "data");
  console.log(language, "language");

  const handleSearch = () => {
    const query = removeDiacritics(searchQuery.toLowerCase());

    if (query === "") {
      setFilteredProfessionalsList(data);
      return;
    }

    const filtered = data.filter((professional) => {
      const { address, name, profession, services } = professional;

      const matches =
        removeDiacritics(address.toLowerCase()).includes(query) ||
        removeDiacritics(name.toLowerCase()).includes(query) ||
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
    return rankingsData.map((item) => (
      <label key={item.priority}>
        <input
          type="checkbox"
          value={item.ranking}
          checked={selectedRankings.includes(item.ranking)}
          onChange={handleRankingCheckboxChange}
        />
        {item.ranking}
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
        {item.profession}
      </label>
    ));
  };

  const renderServicesCheckboxes = () => {
    return servicesData.map((item) => (
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
      // console.log(professional, "professional");
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
      <div>
        <div className="search-container">
          <div className="container">
            <h6 className="input-title">
              Buscador de Especialistas en Podología
            </h6>
            <div className="input-container">
              <input
                type="text"
                placeholder="Buscá por servicio, especialidad o país para localizar expertos en tu región"
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
        <div className="container filter-wrapper">

          <div className={`filter ${showFilter ? 'filter-expanded' : ''}`}>
            <button className="filter-button" onClick={() => setShowFilter(!showFilter)}>Filter by <Icon code={"FaAngleDown"}></Icon></button>
          <div
            className={`filter-container ${showFilter ? 'show-filter' : ''}`}
          >
            <select
            className="filter-select"
              value={selectedCountry}
              onChange={handleCountrySelectChange}
            >
              <option value="">All Countries</option>
              {uniqueCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="filter-checkbox ranking">
              <h6>Ranking</h6>
              {renderRankingCheckboxes()}
            </div>
            <div className="filter-checkbox professions">
              <h6>Professions</h6>
              {renderProfessionsCheckboxes()}
            </div>
            <div className="filter-checkbox services">
              <h6>Services</h6>
              {renderServicesCheckboxes()}
            </div>
          </div>
          </div>
          <div className="results-container">
            <div> {currentProfessionals}</div>
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
                      <Link
                        onClick={() => paginate(currentPage + 1)}
                        to="#Articles"
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
  );
};

export default Professionals;
