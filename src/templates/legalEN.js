import React from "react";
import { Link, graphql } from "gatsby";
import { Layout, Seo } from "../components";
import "./Legal.scss";
import { PortableText } from "@portabletext/react";
import Legal from "./legal";

const LegalPage = ({ location, data }) => {
  const { titlePage, _rawContent, _rawDetails } = data.allSanityLegalPages.nodes[0];

  return (
    <Layout location={location}>
      <Legal
        titlePage={titlePage}
        _rawContent={_rawContent}
        _rawDetails={_rawDetails}
      />
    </Layout>
  );
};

export default LegalPage;

export const query = graphql`
  query ($slug: String!) {
    allSanityLegalPages(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        _key
        _rawDetails
        _rawContent
        titlePage
      }
    }
  }
`;
