import React, { useContext } from "react";

import "./Professionals.scss";
import useProfessionals from "../../hooks/useProfessionals";
import useServices from "../../hooks/useServices";
import { LanguageContext } from "../../context/languajeContext";
import { dataLanguageTexts } from "./data";
import { Seo } from "../";
import useRankings from "../../hooks/useRankings";
import useProfessions from "../../hooks/useProfessions";
import useSearchPage from "../../hooks/useSearchPage";
import ProfessionalsFilter from "./ProfessionalFilter";

import useCountries from "../../hooks/useCountries";

const Professionals = () => {

  const query = useProfessionals();
  const page = useSearchPage();
  const services = useServices().allSanityServices;
  const rankings = useRankings().allSanityRanking;
  const professions = useProfessions().allSanityProfession;
  const countries = useCountries().allSanityCountry;
  const { language } = useContext(LanguageContext);

  let data = null;
  let defaultData = null;
  let servicesData = null;
  let professionsData = null;
  let rankingsData = null;
  let pageData = null;
  let countriesData = null;
  const texts = language !== null && dataLanguageTexts[language];

  if (language === "es") {
    data = query.allSanityProfessional.ProfessionalsES;
    defaultData = query.sanityProfessionalConfigES;
    servicesData = services.ServicesES;
    rankingsData = rankings.RankingES;
    professionsData = professions.ProfessionES;
    pageData = page.SearchPageES;
    countriesData = countries.CountriesES;
  } else {
    if (language === "de") {
      data = query.allSanityProfessional.ProfessionalsDE;
      defaultData = query.sanityProfessionalConfigDE;
      servicesData = services.ServicesDE;
      rankingsData = rankings.RankingDE;
      professionsData = professions.ProfessionDE;
      pageData = page.SearchPageDE;
      countriesData = countries.CountriesDE;
    } else {
      data = query.allSanityProfessional.ProfessionalsEN;
      defaultData = query.sanityProfessionalConfig;
      servicesData = services.ServicesEN;
      rankingsData = rankings.RankingEN;
      professionsData = professions.ProfessionEN;
      pageData = page.SearchPageEN;
      countriesData = countries.CountriesEN;
    }
  }

  

  return (
    <>
      <Seo
        title={pageData.titlePage}
        description={pageData.description}
        keywords=""
      />
      {language !== null && <ProfessionalsFilter
        data={data}
        defaultData={defaultData}
        servicesData={servicesData}
        rankingsData={rankingsData}
        professionsData={professionsData}
        pageData={pageData}
        texts={texts}
        countriesData={countriesData}
      />}
    </>
  );
};

export default Professionals;
