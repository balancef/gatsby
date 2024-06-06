import { useStaticQuery, graphql } from "gatsby";

const useSearchPage = () => {
  return useStaticQuery(graphql`
  {

    SearchPageEN: sanitySearchPage{
        titlePage
        descriptionPage
        pageKeywords
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
        pageKeywords: pageKeywordsSpanish
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
        pageKeywords: pageKeywordsGerman
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
