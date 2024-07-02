exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const toKebabCase = (str) => { return str.toLowerCase().replace(/\s+/g, '-') }

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
            _id
            slug {
              current
            }
            _updatedAt
            locality {
              _id
              name
              localityState {
                _id
                name
                stateCountry {
                  _id
                  name
                }
              }
            }
            nearbyLocations {
              _id
              name
            }
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
      countries: allSanityCountry {
        edges {
          node {
            _id
            name
            countryCode
            nameGerman
            nameSpanish
            nameEnglish
          }
        }
      }
      states: allSanityState {
        edges{
          node {
            _id
            name
            nameGerman
            nameSpanish
            nameEnglish
            stateCountry {
              nameGerman
              nameSpanish
              nameEnglish
              name
            }
          }
        }
      }
      localities: allSanityLocality {
        edges{
          node {
            _id
            name
            nameGerman
            nameSpanish
            nameEnglish
            localityState {
              nameGerman
              nameSpanish
              nameEnglish
              name
              stateCountry {
                nameGerman
                nameSpanish
                nameEnglish
                name
              }
            }
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

  // CREACION DE LANDINGS POR PAIS
  const professionalsCountries = result.data.professionals.edges
    .filter(professional => professional.node.locality !== null)
    .map(professional => ({name: professional.node.locality.localityState.stateCountry.name, _id: professional.node.locality.localityState.stateCountry._id}));
  result.data.countries.edges.forEach((edge) => {
    const haveProfessionals = professionalsCountries.filter(country => country._id === edge.node._id)
    if(haveProfessionals && haveProfessionals.length > 0) {
      const ProfessionalsByCountryPageEN = require.resolve(
        "./src/templates/search/professionalsByCountryEN.js"
      );
      createPage({
        path: `/en/${toKebabCase(edge.node.name)}`,
        component: ProfessionalsByCountryPageEN,
        context: {
          countryId: edge.node._id,
          country: edge.node.name,
          language: "en",
        },
      });
      const ProfessionalsByCountryPageDE = require.resolve(
        "./src/templates/search/professionalsByCountryDE.js"
      );
      createPage({
        path: `/de/${toKebabCase(edge.node.name)}`,
        component: ProfessionalsByCountryPageDE,
        context: {
          countryId: edge.node._id,
          country: edge.node.nameGerman,
          language: "de",
        },
      });
      const ProfessionalsByCountryPageES = require.resolve(
        "./src/templates/search/professionalsByCountryES.js"
      );
      createPage({
        path: `/es/${toKebabCase(edge.node.name)}`,
        component: ProfessionalsByCountryPageES,
        context: {
          countryId: edge.node._id,
          country: edge.node.name,
          language: "es",
        },
      });
    }
  });
  // CREACION DE LANDINGS POR PROVINCIA
  const professionalsStates = result.data.professionals.edges
    .filter(professional => professional.node.locality !== null)
    .map(professional => ({name: professional.node.locality.localityState.name, _id: professional.node.locality.localityState._id}));
  result.data.states.edges.forEach((edge) => {
      const haveProfessionals = professionalsStates.filter(state => state._id === edge.node._id)
      if(haveProfessionals && haveProfessionals.length > 0) {
        const ProfessionalsByStatePageEN = require.resolve(
          "./src/templates/search/professionalsByStateEN.js"
        );
        createPage({
          path: `/en/${toKebabCase(edge.node.stateCountry.name)}/${toKebabCase(edge.node.name)}`,
          component: ProfessionalsByStatePageEN,
          context: {
            stateId: edge.node._id,
            country: edge.node.stateCountry.nameEnglish,
            language: "en",
          },
        });
        const ProfessionalsByStatePageDE = require.resolve(
          "./src/templates/search/professionalsByStateDE.js"
        );
        createPage({
          path: `/de/${toKebabCase(edge.node.stateCountry.name)}/${toKebabCase(edge.node.name)}`,
          component: ProfessionalsByStatePageDE,
          context: {
            stateId: edge.node._id,
            country: edge.node.stateCountry.nameGerman,
            language: "de",
          },
        });
        const ProfessionalsByStatePageES = require.resolve(
          "./src/templates/search/professionalsByStateES.js"
        );
        createPage({
          path: `/es/${toKebabCase(edge.node.stateCountry.name)}/${toKebabCase(edge.node.name)}`,
          component: ProfessionalsByStatePageES,
          context: {
            stateId: edge.node._id,
            country: edge.node.stateCountry.nameSpanish,
            language: "es",
          },
        });
      }
  });
  // CREACION DE LANDINGS POR LOCALIDAD
  result.data.localities.edges.forEach((edge) => {
    const findedProfessionals = result.data.professionals.edges.filter(professional => {
      const localityMatches = professional.node.locality !== null && professional.node.locality._id === edge.node._id;
      const nearbyMatches = professional.node.nearbyLocations.some(location => location._id === edge.node._id);
      return  localityMatches || nearbyMatches;
    })
    if(findedProfessionals && findedProfessionals.length > 0) {
      const ProfessionalsByLocalityPageEN = require.resolve(
        "./src/templates/search/professionalsByLocalityEN.js"
      );
      createPage({
        path: `/en/${toKebabCase(edge.node.localityState.stateCountry.name)}/${toKebabCase(edge.node.localityState.name)}/${toKebabCase(edge.node.name)}`,
        component: ProfessionalsByLocalityPageEN,
        context: {
          localityId: edge.node._id,
          nearbyLocalityIds: edge.node._id,
          country: edge.node.localityState.stateCountry.nameEnglish,
          language: "en",
        },
      });
      const ProfessionalsByLocalityPageDE = require.resolve(
        "./src/templates/search/professionalsByLocalityDE.js"
      );
      createPage({
        path: `/de/${toKebabCase(edge.node.localityState.stateCountry.name)}/${toKebabCase(edge.node.localityState.name)}/${toKebabCase(edge.node.name)}`,
        component: ProfessionalsByLocalityPageDE,
        context: {
          localityId: edge.node._id,
          nearbyLocalityIds: edge.node._id,
          country: edge.node.localityState.stateCountry.nameGerman,
          language: "de",
        },
      });
      const ProfessionalsByLocalityPageES = require.resolve(
        "./src/templates/search/professionalsByLocalityES.js"
      );
      createPage({
        path: `/es/${toKebabCase(edge.node.localityState.stateCountry.name)}/${toKebabCase(edge.node.localityState.name)}/${toKebabCase(edge.node.name)}`,
        component: ProfessionalsByLocalityPageES,
        context: {
          localityId: edge.node._id,
          nearbyLocalityIds: edge.node._id,
          country: edge.node.localityState.stateCountry.nameSpanish,
          language: "es",
        },
      });
    }
  });
};
