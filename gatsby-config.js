/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `F-Balance`,
    siteUrl: `https://f-balance.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_ID_PROJECT,
        dataset: process.env.SANITY_DATASET,
        //use only on develop for watch sanity graphql changes after "sanity graphql deploy"
        // "watchMode" : true
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
        query: `
        {
          allSitePage(filter: {path: {regex: "/^(?!\/(en|es|de)).*$/"}}) {
            nodes {
              path
              pageContext
            }            
          }
          sanityBlogPage {
            _updatedAt
          }
          sanityContact {
            _updatedAt
          }
          sanityHelp {
            _updatedAt
          }
          sanityHome {
            _updatedAt
          }
          sanitySearchPage {
            _updatedAt
          }
          
        }
      `,
        resolveSiteUrl: () => "https://f-balance.com/en",
        resolvePages: ({
          allSitePage: { nodes: allPages },
          sanityBlogPage: blogPage,
          sanityContact: contactPage,
          sanityHelp: helpPage,
          sanityHome: homePage,
          sanitySearchPage: searchPage,
        }) => {
          return allPages.map((page) => {
            if (page.path === "/en/blog/")
              return { path: "/blog", lastmod: blogPage._updatedAt };
            if (page.path === "/en/contact/")
              return { path: "/en/contact", lastmod: contactPage._updatedAt };
            if (page.path === "/help/")
              return { path: "/en/help", lastmod: helpPage._updatedAt };
            if (page.path === "/en/search/")
              return { path: "/en/search/", lastmod: searchPage._updatedAt };
            if (page.path === "/")
              return { path: "/", lastmod: homePage._updatedAt };

            return {
              path: page.path,
              lastmod: page?.pageContext?.lastmod,
            };
          });
        },
        serialize: ({ path, lastmod }) => {
          return {
            url: path,
            lastmod: lastmod,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/es/",
        query: `
        {
          allSitePage(filter: {path: {glob: "/es/**"}}) {
            nodes {
              path
              pageContext
            }            
          }
          sanityBlogPage {
            _updatedAt
          }
          sanityContact {
            _updatedAt
          }
          sanityHelp {
            _updatedAt
          }
          sanityHome {
            _updatedAt
          }
          sanitySearchPage {
            _updatedAt
          }
          
        }
      `,
        resolveSiteUrl: () => "https://f-balance.com/es",
        resolvePages: ({
          allSitePage: { nodes: allPages },
          sanityBlogPage: blogPage,
          sanityContact: contactPage,
          sanityHelp: helpPage,
          sanityHome: homePage,
          sanitySearchPage: searchPage,
        }) => {
          return allPages.map((page) => {
            if (page.path === "/es/blog/")
              return { path: "/es/blog", lastmod: blogPage._updatedAt };
            if (page.path === "/es/contact/")
              return { path: "/es/contact", lastmod: contactPage._updatedAt };
            if (page.path === "/es/help/")
              return { path: "/es/help", lastmod: helpPage._updatedAt };
            if (page.path === "/es/search/")
              return { path: "/es/search/", lastmod: searchPage._updatedAt };
            if (page.path === "/")
              return { path: "/es/", lastmod: homePage._updatedAt };

            return {
              path: page.path,
              lastmod: page?.pageContext?.lastmod,
            };
          });
        },
        serialize: ({ path, lastmod }) => {
          return {
            url: path,
            lastmod: lastmod,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/de/",
        query: `
        {
          allSitePage(filter: {path: {glob: "/de/**"}}) {
            nodes {
              path
              pageContext
            }            
          }
          sanityBlogPage {
            _updatedAt
          }
          sanityContact {
            _updatedAt
          }
          sanityHelp {
            _updatedAt
          }
          sanityHome {
            _updatedAt
          }
          sanitySearchPage {
            _updatedAt
          }
          
        }
      `,
        resolveSiteUrl: () => "https://f-balance.com/de",
        resolvePages: ({
          allSitePage: { nodes: allPages },
          sanityBlogPage: blogPage,
          sanityContact: contactPage,
          sanityHelp: helpPage,
          sanityHome: homePage,
          sanitySearchPage: searchPage,
        }) => {
          return allPages.map((page) => {
            if (page.path === "/de/blog/")
              return { path: "/de/blog", lastmod: blogPage._updatedAt };
            if (page.path === "/de/contact/")
              return { path: "/de/contact", lastmod: contactPage._updatedAt };
            if (page.path === "/de/help/")
              return { path: "/de/help", lastmod: helpPage._updatedAt };
            if (page.path === "/de/search/")
              return { path: "/de/search/", lastmod: searchPage._updatedAt };
            if (page.path === "/de/")
              return { path: "/de/", lastmod: homePage._updatedAt };

            return {
              path: page.path,
              lastmod: page?.pageContext?.lastmod,
            };
          });
        },
        serialize: ({ path, lastmod }) => {
          return {
            url: path,
            lastmod: lastmod,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/en/",
        query: `
        {
          allSitePage(filter: {path: {glob: "/en/**"}}) {
            nodes {
              path
              pageContext
            }            
          }
          sanityBlogPage {
            _updatedAt
          }
          sanityContact {
            _updatedAt
          }
          sanityHelp {
            _updatedAt
          }
          sanityHome {
            _updatedAt
          }
          sanitySearchPage {
            _updatedAt
          }
          
        }
      `,
        resolveSiteUrl: () => "https://f-balance.com/en",
        resolvePages: ({
          allSitePage: { nodes: allPages },
          sanityBlogPage: blogPage,
          sanityContact: contactPage,
          sanityHelp: helpPage,
          sanityHome: homePage,
          sanitySearchPage: searchPage,
        }) => {
          return allPages.map((page) => {
            if (page.path === "/en/blog/")
              return { path: "/en/blog", lastmod: blogPage._updatedAt };
            if (page.path === "/en/contact/")
              return { path: "/en/contact", lastmod: contactPage._updatedAt };
            if (page.path === "/en/help/")
              return { path: "/en/help", lastmod: helpPage._updatedAt };
            if (page.path === "/en/search/")
              return { path: "/en/search/", lastmod: searchPage._updatedAt };
            if (page.path === "/en/")
              return { path: "/en/", lastmod: homePage._updatedAt };

            return {
              path: page.path,
              lastmod: page?.pageContext?.lastmod,
            };
          });
        },
        serialize: ({ path, lastmod }) => {
          return {
            url: path,
            lastmod: lastmod,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://f-balance.com",
        sitemap: [
          "https://f-balance.com/sitemap-index.xml",
          "https://f-balance.com/en/sitemap-index.xml",
          "https://f-balance.com/es/sitemap-index.xml",
          "https://f-balance.com/de/sitemap-index.xml",
        ],
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.ico",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
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
        trackingIds: ["G-G7RVXT94YL"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
