import React from "react";
import { graphql } from "gatsby";
import { LayoutWithoutFooter, Professionals  } from "../../components";
const ProfessionalsByCountry = ({ location, data, pageContext }) => {
  const professionals = data.allSanityProfessional.edges.map(item => ({
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
                <h4>Address</h4>
                <p>{professional.address}</p>
              </div>
              <div>
                <h4>Services</h4>
                {professional?.services && professional.services.map((service,index) => 
                <ul key={index}>
                  <li>
                    {service.services}
                  </li>
                </ul>
                )}
              </div>
              <div>
                <h4>Professions</h4>
                {professional?.professions && professional.professions.map((profession, index) => 
                <ul key={index}>
                  <li>
                    {profession.profession}
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

export default ProfessionalsByCountry;
export const query = graphql`
  query ($countryId: String!) {
    allSanityProfessional(
    filter: { locality: { localityState: { stateCountry: { _id: { eq: $countryId } } } } }) {
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
        }
      }
    }
  }
`;