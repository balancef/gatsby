import { useStaticQuery, graphql } from "gatsby"

const useHelp = () => {
  return useStaticQuery(graphql`
  {
    allSanityHelp {
        HelpEN:nodes {
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
            category {
              titleCategory:titleCategoryGerman
            }
          }
      }
    }
    `)
}

export default useHelp