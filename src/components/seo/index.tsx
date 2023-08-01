import * as React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  lang?: string;
  meta?: string;


}

export function Seo(props: SeoProps) {
  const siteMetadata = { ...props };

  return (
    <Helmet
      htmlAttributes={{ lang: siteMetadata.lang }}
      title={siteMetadata.title}
      titleTemplate={`%s | Starter`}
      meta={[
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          name: `description`,
          content: siteMetadata.description,
        },
        {
          name: `keywords`,
          content: siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: siteMetadata.title,
        },
        {
          property: `og:description`,
          content: siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: siteMetadata.description,
        },
      ]}
    // link={[]}
    />
  )
}