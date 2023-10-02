import React from "react";
import { Link, graphql } from "gatsby";
import { Layout, Seo } from "../components";
import "./Help.scss";
import { PortableText } from "@portabletext/react";

const Help = ({ location, data }) => {

    const { title, _rawDescription } = data.allSanityHelp.nodes[0];
    const descriptionPage = _rawDescription ? _rawDescription[0].children[0].text : ""

    return (
        <Layout location={location}>
            <Seo title={title} description={descriptionPage} keywords="" />
            <div className="container">
                <div className="help">
                    <div className="help__breadcrumb">
                        <Link to="/es/help">Ayuda</Link>
                        {` > ${title}`}
                    </div>
                    <div className="help__card">
                        <h1 className="help__card__h1">{title}</h1>
                        <PortableText value={_rawDescription} />
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Help;


export const query = graphql`
  query ($slug: String!) {
    allSanityHelp(filter: { slug: { current: { eq: $slug } } }) {
        nodes {
            title: titleSpanish
            _rawDescription: _rawDescriptionSpanish
          }
  }
}`;

