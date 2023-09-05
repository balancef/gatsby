import { useStaticQuery, graphql } from "gatsby";

const useProfessionals = () => {
  return useStaticQuery(graphql`
    {
      allSanityProfessional {
        ProfessionalsEN: nodes {
          website
          verified
          validTo
          slug {
            current
          }
          services {
            services
            id
          }
          ranking {
            ranking
            id
          }
          profession {
            professionDescription
            profession
            id
          }
          phone
          official
          name
          lastCertificateUpdate
          language {
            language
            id
          }
          image {
            image {
              hotspot {
                y
                x
                width
                height
              }
              crop {
                top
                right
                left
                bottom
              }
              asset {
                _id
              }
            }
            alt
          }
          id
          email
          certificateNumber
          certificateDate
          address
          academy {
            academy
          }
          _rawDescription
          _id
        }
        ProfessionalsES: nodes {
          website
          verified
          validTo
          slug {
            current
          }
          services {
            services: servicesSpanish
            id
          }
          ranking {
            ranking: rankingSpanish
            id
          }
          profession {
            professionDescription: professionDescriptionSpanish
            profession: professionSpanish
            id
          }
          phone
          official
          name
          lastCertificateUpdate
          language {
            language
            id
          }
          image {
            image {
              hotspot {
                y
                x
                width
                height
              }
              crop {
                top
                right
                left
                bottom
              }
              asset {
                _id
              }
            }
            alt
          }
          id
          email
          certificateNumber
          certificateDate
          address
          academy {
            academy
          }
          _rawDescription: _rawDescriptionSpanish
          _id
        }
        ProfessionalsDE: nodes {
          website
          verified
          validTo
          slug {
            current
          }
          services {
            services: servicesGerman
            id
          }
          ranking {
            ranking: rankingGerman
            id
          }
          profession {
            professionDescription: professionDescriptionGerman
            profession: professionGerman
            id
          }
          phone
          official
          name
          lastCertificateUpdate
          language {
            language
            id
          }
          image {
            image {
              hotspot {
                y
                x
                width
                height
              }
              crop {
                top
                right
                left
                bottom
              }
              asset {
                _id
              }
            }
            alt
          }
          id
          email
          certificateNumber
          certificateDate
          address
          academy {
            academy
          }
          _rawDescription: _rawDescriptionGerman
          _id
        }
      }
    }
  `);
};

export default useProfessionals;
