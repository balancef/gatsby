import { useStaticQuery, graphql } from "gatsby";

const useCountries = () => {
    return useStaticQuery(graphql`
    {
        allSanityCountry {
        CountriesEN: nodes {
          country
          countryCode
        }
        CountriesDE: nodes {
          country: countryGerman
          countryCode
        }
        CountriesES: nodes {
            country: countrySpanish
            countryCode
        }
      }
    }
  `);
};

export default useCountries;