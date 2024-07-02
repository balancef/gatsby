import React from "react";
import { graphql } from "gatsby";
import { LayoutWithoutFooter, Professionals  } from "../../components";
const ProfessionalsByLocality = ({ location, data, pageContext }) => {
  const allPrrofessionals = data.professionalsByNearbyLocalities?.edges ? data.professionalsByLocality.edges.concat(data.professionalsByNearbyLocalities.edges) : data.professionalsByLocality.edges
  const professionals = allPrrofessionals.map(item => ({
    id: item.node.id,
    location: item.node.location,
    name: item.node.name,
    services: item.node.services,
    professions: item.node.profession,
    address: item.node.address
  }));


  return (
    <LayoutWithoutFooter location={location}>
      <div style={{display: "none"}}>
        <ul>
          {professionals && professionals.length>0 && professionals.map((professional, index) => 
            <li key={index}>
              <div>
                <h2>{professional.name}</h2>
              </div>
              <div>
                <h4>Address, Direccion, Adresse</h4>
                <p>{professional.address}</p>
              </div>
              <div>
                <h4>Servicios</h4>
                {professional?.services && professional.services.map((service,index) => 
                <ul key={index}>
                  <li>
                    {service.servicesSpanish}
                  </li>
                </ul>
                )}
              </div>
              <div>
                <h4>Profesiones</h4>
                {professional?.professions && professional.professions.map((profession, index) => 
                <ul key={index}>
                  <li>
                    {profession.professionSpanish}
                  </li>
                </ul>
                )}
              </div>
            </li>
          )}
        </ul>
      </div>
      <Professionals mapFitBounds={professionals} landingCountry={pageContext.country}/>
    </LayoutWithoutFooter>
  );
};

export default ProfessionalsByLocality;
export const query = graphql`
  query ($localityId: String!, $nearbyLocalityIds: [String!]!) {
    professionalsByLocality: allSanityProfessional(
      filter: {locality: {_id: {eq: $localityId}}}
    ) {
        edges {
          node {
              id
            name
            address
            location {
              lat
              lng
            }
            services {
              id
              services
              servicesGerman
              servicesSpanish
            }
            profession {
              profession
              professionGerman
              professionSpanish
            }
            locality {
              _id
              name
            }
          }
        }
      },
    professionalsByNearbyLocalities: allSanityProfessional(
      filter: {nearbyLocations: {elemMatch: {_id: {in: $nearbyLocalityIds}}}}
    ) {
        edges {
          node {
            id
            name
            address
            location {
              lat
              lng
            }
            services {
              id
              services
              servicesGerman
              servicesSpanish
            }
            profession {
              profession
              professionGerman
              professionSpanish
            }
            locality {
              _id
              name
            }
          }
        }
      }
  }
`;