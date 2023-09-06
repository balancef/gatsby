import React from "react";
import { graphql } from "gatsby";
import { Layout, CustomSection, Banner, Seo, ProfessionalPage} from "../../components";

const ProPage = ({location,  data }) => {
  const professionalData = data?.allSanityProfessional?.nodes[0];

  return (
    <Layout location={location}>
      {/* <Seo title={titlePage} description={descriptionPage} keywords="" /> */}
      <ProfessionalPage professionalData={professionalData} />
    </Layout>
  );
};

export default ProPage;

export const query = graphql`
  query ($slug: String!) {
    allSanityProfessional (filter: { slug: { current: { eq: $slug } } }) {
        nodes {
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
    }
  }
`;
