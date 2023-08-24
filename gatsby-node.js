const path = require("path")



exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // CREACION DE PAGINAS
  const { data: pageQueryData } = await graphql(`
    query Pages {
      allSanityPages {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  if (pageQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas")
  }

  pageQueryData.allSanityPages.nodes.forEach(node => {
    const pageEN = path.resolve("./src/templates/pageEN.js")
    createPage({
      path: "/" + node.slug.current,
      component: pageEN,
      context: { slug: node.slug.current, language: "en" },
    })

    const pageES = path.resolve("./src/templates/pageES.js")
    createPage({
      path: "/es/" + node.slug.current,
      component: pageES,
      context: { slug: node.slug.current, language: "es" },
    })

    const pageGER = path.resolve("./src/templates/pageDE.js")
    createPage({
      path: "/de/" + node.slug.current,
      component: pageGER,
      context: { slug: node.slug.current, language: "de" },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // CREACION DE PAGINAS DE AYUDA
  const { data: pageQueryData } = await graphql(`
    query HelpPages {
      allSanityHelp {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  if (pageQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas")
  }

  pageQueryData.allSanityHelp.nodes.forEach(node => {
    const pageEN = path.resolve("./src/templates/helpEN.js")
    createPage({
      path: "/help/" + node.slug.current,
      component: pageEN,
      context: { slug: node.slug.current, language: "en" },
    })

    const pageES = path.resolve("./src/templates/helpES.js")
    createPage({
      path: "/es/help/" + node.slug.current,
      component: pageES,
      context: { slug: node.slug.current, language: "es" },
    })

    const pageGER = path.resolve("./src/templates/helpDE.js")
    createPage({
      path: "/de/help/" + node.slug.current,
      component: pageGER,
      context: { slug: node.slug.current, language: "de" },
    })
  })
}