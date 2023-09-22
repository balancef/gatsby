import { useStaticQuery, graphql } from "gatsby";

const useSearchPage = () => {
  return useStaticQuery(graphql`
  {

    SearchPageEN: sanitySearchPage{
        titlePage
        descriptionPage
        linkToHelpPage {
          slug {
            current
          }
          title
        }
      }

    SearchPageES: sanitySearchPage {
        titlePage: titlePageSpanish
        descriptionPage: descriptionPageSpanish
        linkToHelpPage {
          slug {
            current
          }
          title: titleSpanish
        }
      }

      SearchPageDE: sanitySearchPage{
        titlePage: titlePageGerman
        descriptionPage: descriptionPageGerman
        linkToHelpPage {
          slug {
            current
          }
          title: titleGerman
        }
      }
  
} 
    `);
};

export default useSearchPage;
