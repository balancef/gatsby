exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions


  const result = await graphql(`
    {
      pages: allSanityPages {
        edges {
        node {
          slug {
            current
          }
        }
      }
      }
      help: allSanityHelp {
        edges {
        node {
          slug {
            current
          }
        }
      }
      }
      legal: allSanityLegalPages {
        edges {
        node {
          slug {
            current
          }
        }
      }
      }
      professionals: allSanityProfessional {
        edges {
        node {
          slug {
            current
          }
        }
      }
      }
    }
`)

  if (result.errors) {
    throw result.errors
  }


  result.data.pages.edges.forEach(node => {
    const pageEN = require.resolve("./src/templates/pageEN.js")
    createPage({
      path: "/" + node.node.slug.current,
      component: pageEN,
      context: { slug: node.node.slug.current, language: "en" },
    })

    const pageES = require.resolve("./src/templates/pageES.js")
    createPage({
      path: "/es/" + node.node.slug.current,
      component: pageES,
      context: { slug: node.node.slug.current, language: "es" },
    })

    const pageGER = require.resolve("./src/templates/pageDE.js")
    createPage({
      path: "/de/" + node.node.slug.current,
      component: pageGER,
      context: { slug: node.node.slug.current, language: "de" },
    })
  })

  result.data.help.edges.forEach(node => {
    const pageEN = require.resolve("./src/templates/helpEN.js")
    createPage({
      path: "/help/" + node.node.slug.current,
      component: pageEN,
      context: { slug: node.node.slug.current, language: "en" },
    })

    const pageES = require.resolve("./src/templates/helpES.js")
    createPage({
      path: "/es/help/" + node.node.slug.current,
      component: pageES,
      context: { slug: node.node.slug.current, language: "es" },
    })

    const pageGER = require.resolve("./src/templates/helpDE.js")
    createPage({
      path: "/de/help/" + node.node.slug.current,
      component: pageGER,
      context: { slug: node.node.slug.current, language: "de" },
    })
  })

  result.data.legal.edges.forEach(node => {
    const LegalPagesEN = require.resolve("./src/templates/legalEN.js")
    createPage({
      path: "/legal/" + node.node.slug.current,
      component: LegalPagesEN,
      context: { slug: node.node.slug.current, language: "en" },
    })

    const LegalPagesES = require.resolve("./src/templates/legalES.js")
    createPage({
      path: "/es/legal/" + node.node.slug.current,
      component: LegalPagesES,
      context: { slug: node.node.slug.current, language: "es" },
    })

    const LegalPagesGER = require.resolve("./src/templates/legalDE.js")
    createPage({
      path: "/de/legal/" + node.node.slug.current,
      component: LegalPagesGER,
      context: { slug: node.node.slug.current, language: "de" },
    })
  })

  //   // CREACION DE PAGINAS PROFESIONALES  
  result.data.professionals.edges.forEach(node => {
    const ProfessionalPagesEN = require.resolve("./src/templates/professionals/proEN.js")
    createPage({
      path: "/search/" + node.node.slug.current,
      component: ProfessionalPagesEN,
      context: { slug: node.node.slug.current, language: "en" },
    })

    const ProfessionalPagesES = require.resolve("./src/templates/professionals/proES.js")
    createPage({
      path: "/es/search/" + node.node.slug.current,
      component: ProfessionalPagesES,
      context: { slug: node.node.slug.current, language: "es" },
    })

    const ProfessionalPagesGER = require.resolve("./src/templates/professionals/proDE.js")
    createPage({
      path: "/de/search/" + node.node.slug.current,
      component: ProfessionalPagesGER,
      context: { slug: node.node.slug.current, language: "de" },
    })
  })

}

