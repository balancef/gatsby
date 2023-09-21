import { useStaticQuery, graphql } from "gatsby";

const useProfessionals = () => {
  return useStaticQuery(graphql`
    {
      sanityProfessionalConfig {
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
          country {
            country
            countryCode
          }
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
          academy {
            academy
          }
          _rawDescription
          _id
        }
        ProfessionalsES: nodes {
          country {
            country:countrySpanish
            countryCode
          }
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
          academy {
            academy
          }
          _rawDescription: _rawDescriptionSpanish
          _id
        }
        ProfessionalsDE: nodes {
          country {
            country: countryGerman
            countryCode
          }
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
