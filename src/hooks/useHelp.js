import { useStaticQuery, graphql } from "gatsby"

const useHelp = () => {
  return useStaticQuery(graphql`
  {
    allSanityHelp {
        HelpEN:nodes {
          pageKeywords
          slug {
            current
          }
            title
            _id
            category {
              titleCategory
            }
          }
          
          HelpES:nodes {
            slug {
              current
            }
            _id
            title:titleSpanish
            pageKeywords: pageKeywordsSpanish
            category {
              titleCategory:titleCategorySpanish
            }
          }
          
          HelpDE:nodes {
            slug {
              current
            }
            _id
            title:titleGerman
            pageKeywords: pageKeywordsGerman
            category {
              titleCategory:titleCategoryGerman
            }
          }
      }
    }
    `)
}

export default useHelp