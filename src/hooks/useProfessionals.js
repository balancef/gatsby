import { useStaticQuery, graphql } from "gatsby";

const useProfessionals = () => {
  return useStaticQuery(graphql`
    {
      sanityProfessionalConfig {
        contactForm {
          title
          templateContent
        }
        photoDefault {
          alt
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
        }
        academyLogo {
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
        _rawDescriptionDefault

      }
      sanityProfessionalConfigES: sanityProfessionalConfig  {
        contactForm {
          title:titleSpanish
          templateContent :templateContentSpanish
        }
        photoDefault {
          alt
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
        }
        academyLogo {
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
        _rawDescriptionDefault: _rawDescriptionDefaultSpanish
      }
      sanityProfessionalConfigDE: sanityProfessionalConfig   {
        contactForm {
          title:titleGerman
          templateContent: templateContentGerman
        }
        photoDefault {
          alt
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
        }
        academyLogo {
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
        _rawDescriptionDefault: _rawDescriptionDefaultGerman
      }
      allSanityProfessional {
        ProfessionalsEN: nodes {
          country: locality { localityState { stateCountry { nameEnglish } } }
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
            priority
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
          location {
            lat
            lng
          }
          academy {
            academy
          }
          _rawDescription
          _id
        }
        ProfessionalsES: nodes {
          country: locality { localityState { stateCountry { nameSpanish } } }
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
            priority
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
          location {
            lat
            lng
          }
          academy {
            academy
          }
          _rawDescription: _rawDescriptionSpanish
          _id
        }
        ProfessionalsDE: nodes {
          country: locality { localityState { stateCountry { nameGerman } } }
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
            priority
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
          location {
            lat
            lng
          }
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
