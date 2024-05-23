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
      "dataset": process.env.SANITY_DATASET,
      //use only on develop for watch sanity graphql changes after "sanity graphql deploy"
      // "watchMode" : true
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
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-G7RVXT94YL",
      ],
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        head: true,
      },
    },
  },
]
};