import React from "react";
import useProfessionals from "../../hooks/useProfessionals";
import useContact from '../../hooks/useContact';
import { graphql } from "gatsby";
import {
  Layout,
  Seo,
} from "../../components";
import ProfessionalCard from "../../components/Professionals/ProfessionalCard";

const ProPage = ({ location, data }) => {

  const professionalData = data?.allSanityProfessional?.nodes[0];
  const titlePage = professionalData.name
  const description = professionalData?._rawDescription ? professionalData._rawDescription[0].children[0].text : ""
  let query = useProfessionals();
  let defaultData = query?.sanityProfessionalConfig;
  const bccEmails = useContact().allSanityContact.ContactEN[0].ccEmails

  return (
    <Layout location={location}>
      <Seo title={titlePage} description={description} keywords="" />
        <ProfessionalCard
          defaultPhoto={defaultData.photoDefault.image}
          photo={professionalData?.image?.image}
          ranking={professionalData.ranking?.ranking}
          official={professionalData?.official}
          verified={professionalData?.verified}
          name={professionalData.name}
          professions={professionalData.profession}
          services={professionalData?.services}
          address={professionalData?.address}
          slug={professionalData?.slug?.current}
          logoAcademy={defaultData?.academyLogo?.image}
          descriptionDefault={defaultData?._rawDescriptionDefault}
          certificateNumber={professionalData?.certificateNumber}
          certificateDate={professionalData?.certificateDate}
          lastCertificateUpdate={professionalData?.lastCertificateUpdate}
          validTo={professionalData?.validTo}
          description={professionalData?._rawDescription}
          phone={professionalData.phone}
          email={professionalData.email}
          website={professionalData?.website}
          bccEmails={bccEmails}
          emailSubject={defaultData?.contactForm.title}
          emailBody={defaultData?.contactForm.templateContent}
        />
    </Layout>
  );
};

export default ProPage;

export const query = graphql`
  query ($slug: String!) {
    allSanityProfessional(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        slug {
          current
        }
        website
        verified
        validTo
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
    }
  }
`;
