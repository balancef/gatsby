import { useStaticQuery, graphql } from "gatsby"

const useLegal = () => {
  return useStaticQuery(graphql`
  {
    allSanityLegalPages {
        LegalPagesEN:nodes {
            _key
            _rawDetails
            _rawContent
            slug {
              current
            }
            titlePage
          }
          
          LegalPagesES:nodes {
            _key
            _rawDetails: _rawDetailsSpanish
            _rawContent: _rawContentSpanish
            slug {
              current
            }
            titlePage: titlePageSpanish
          }
          
          LegalPagesDE:nodes {
            _key
            _rawDetails: _rawDetailsGerman
            _rawContent: _rawContentGerman
            slug {
              current
            }
            titlePage: titlePageGerman
          }
      }
    }
    `)
}

export default useLegal