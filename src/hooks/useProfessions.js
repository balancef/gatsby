import { useStaticQuery, graphql } from "gatsby";

const useProfessions = () => {
  return useStaticQuery(graphql`
    {
      allSanityProfession {
        ProfessionEN: nodes {
          professionDescription
          profession
        }
        ProfessionES: nodes {
          professionDescription: professionDescriptionSpanish
          profession: professionSpanish
        }
        ProfessionDE: nodes {
          professionDescription: professionDescriptionGerman
          profession: professionGerman
        }
      }
    }
  `);
};

export default useProfessions;
