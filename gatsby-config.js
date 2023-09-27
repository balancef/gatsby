/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `F-Balance`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": process.env.SANITY_ID_PROJECT,
      "dataset": process.env.SANITY_DATASET
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sass", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.ico"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: "gatsby-plugin-sanity-image",
    options: {
      projectId: process.env.SANITY_ID_PROJECT,
      dataset: process.env.SANITY_DATASET,
    },
  }
]
};