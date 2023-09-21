import { useStaticQuery, graphql } from "gatsby";

const useServices = () => {
  return useStaticQuery(graphql`
    {
      allSanityServices {
        ServicesEN: nodes {
          id
          services
        }
        ServicesDE: nodes {
          id
          services: servicesGerman
        }
        ServicesES: nodes {
          id
          services: servicesSpanish
        }
      }
    }
  `);
};

export default useServices;
