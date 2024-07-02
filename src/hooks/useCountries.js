import { useStaticQuery, graphql } from "gatsby";

const useCountries = () => {
    return useStaticQuery(graphql`
    {
        allSanityCountry {
        CountriesEN: nodes {
          country: nameEnglish
          countryCode
        }
        CountriesDE: nodes {
          country: nameGerman
          countryCode
        }
        CountriesES: nodes {
            country: nameSpanish
            countryCode
        }
      }
    }
  `);
};

export default useCountries;