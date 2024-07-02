import React from "react";
import { Link, graphql } from "gatsby";
import { Layout, Seo} from "../components";
import "./Help.scss";
import { PortableText } from "@portabletext/react";

const Help = ({location, data}) => {
  
    const { title, _rawDescription, pageKeywords } = data.allSanityHelp.nodes[0];
    const descriptionPage = _rawDescription ? _rawDescription[0].children[0].text : ""

    return (
        <Layout location={location}>
            <Seo title={title} description={descriptionPage} keywords={pageKeywords} />
            <div className="container">
                <div className="help">
                    <div className="help__breadcrumb">
                        <Link to="/en/help">Help</Link>
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
            title
            pageKeywords
            _rawDescription
          }
  }
}`;

