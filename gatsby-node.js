exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      pages: allSanityPages {
        edges {
          node {
            slug {
              current
            }
            _updatedAt
          }
        }
      }
      help: allSanityHelp {
        edges {
          node {
            slug {
              current
            }
            _updatedAt
          }
        }
      }
      legal: allSanityLegalPages {
        edges {
          node {
            slug {
              current
            }
            _updatedAt
          }
        }
      }
      professionals: allSanityProfessional {
        edges {
          node {
            slug {
              current
            }
            _updatedAt
          }
        }
      }
      articles: allSanityArticle {
        edges {
          node {
            slug {
              current
            }
            _updatedAt
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.pages.edges.forEach((node) => {
    const pageEN = require.resolve("./src/templates/pageEN.js");
    createPage({
      path: "/en/" + node.node.slug.current,
      component: pageEN,
      context: {
        slug: node.node.slug.current,
        language: "en",
        lastmod: node.node._updatedAt,
      },
    });

    const pageES = require.resolve("./src/templates/pageES.js");
    createPage({
      path: "/es/" + node.node.slug.current,
      component: pageES,
      context: {
        slug: node.node.slug.current,
        language: "es",
        lastmod: node.node._updatedAt,
      },
    });

    const pageGER = require.resolve("./src/templates/pageDE.js");
    createPage({
      path: "/de/" + node.node.slug.current,
      component: pageGER,
      context: {
        slug: node.node.slug.current,
        language: "de",
        lastmod: node.node._updatedAt,
      },
    });
  });

  result.data.help.edges.forEach((node) => {
    const pageEN = require.resolve("./src/templates/helpEN.js");
    createPage({
      path: "/en/help/" + node.node.slug.current,
      component: pageEN,
      context: {
        slug: node.node.slug.current,
        language: "en",
        lastmod: node.node._updatedAt,
      },
    });

    const pageES = require.resolve("./src/templates/helpES.js");
    createPage({
      path: "/es/help/" + node.node.slug.current,
      component: pageES,
      context: {
        slug: node.node.slug.current,
        language: "es",
        lastmod: node.node._updatedAt,
      },
    });

    const pageGER = require.resolve("./src/templates/helpDE.js");
    createPage({
      path: "/de/help/" + node.node.slug.current,
      component: pageGER,
      context: {
        slug: node.node.slug.current,
        language: "de",
        lastmod: node.node._updatedAt,
      },
    });
  });

  result.data.legal.edges.forEach((node) => {
    const LegalPagesEN = require.resolve("./src/templates/legalEN.js");
    createPage({
      path: "/en/legal/" + node.node.slug.current,
      component: LegalPagesEN,
      context: {
        slug: node.node.slug.current,
        language: "en",
        lastmod: node.node._updatedAt,
      },
    });

    const LegalPagesES = require.resolve("./src/templates/legalES.js");
    createPage({
      path: "/es/legal/" + node.node.slug.current,
      component: LegalPagesES,
      context: {
        slug: node.node.slug.current,
        language: "es",
        lastmod: node.node._updatedAt,
      },
    });

    const LegalPagesGER = require.resolve("./src/templates/legalDE.js");
    createPage({
      path: "/de/legal/" + node.node.slug.current,
      component: LegalPagesGER,
      context: {
        slug: node.node.slug.current,
        language: "de",
        lastmod: node.node._updatedAt,
      },
    });
  });

  //   // CREACION DE PAGINAS PROFESIONALES
  result.data.professionals.edges.forEach((node) => {
    const ProfessionalPagesEN = require.resolve(
      "./src/templates/professionals/proEN.js"
    );
    createPage({
      path: "/en/professional/" + node.node.slug.current,
      component: ProfessionalPagesEN,
      context: {
        slug: node.node.slug.current,
        language: "en",
        lastmod: node.node._updatedAt,
      },
    });

    const ProfessionalPagesES = require.resolve(
      "./src/templates/professionals/proES.js"
    );
    createPage({
      path: "/es/professional/" + node.node.slug.current,
      component: ProfessionalPagesES,
      context: {
        slug: node.node.slug.current,
        language: "es",
        lastmod: node.node._updatedAt,
      },
    });

    const ProfessionalPagesGER = require.resolve(
      "./src/templates/professionals/proDE.js"
    );
    createPage({
      path: "/de/professional/" + node.node.slug.current,
      component: ProfessionalPagesGER,
      context: {
        slug: node.node.slug.current,
        language: "de",
        lastmod: node.node._updatedAt,
      },
    });
  });

  result.data.articles.edges.forEach((node) => {
    const ArticlePageEN = require.resolve(
      "./src/templates/article/articleEN.js"
    );
    createPage({
      path: "/en/blog/" + node.node.slug.current,
      component: ArticlePageEN,
      context: {
        slug: node.node.slug.current,
        language: "en",
        lastmod: node.node._updatedAt,
      },
    });

    const ArticlePageES = require.resolve(
      "./src/templates/article/articleES.js"
    );
    createPage({
      path: "/es/blog/" + node.node.slug.current,
      component: ArticlePageES,
      context: {
        slug: node.node.slug.current,
        language: "es",
        lastmod: node.node._updatedAt,
      },
    });

    const ArticlePageGER = require.resolve(
      "./src/templates/article/articleDE.js"
    );
    createPage({
      path: "/de/blog/" + node.node.slug.current,
      component: ArticlePageGER,
      context: {
        slug: node.node.slug.current,
        language: "de",
        lastmod: node.node._updatedAt,
      },
    });
  });
};
