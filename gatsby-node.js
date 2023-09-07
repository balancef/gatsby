const path = require("path")



exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // CREACION DE PAGINAS
  // const { data: pageQueryData } = await graphql(`
  //   query Pages {
  //     allSanityPages {
  //       nodes {
  //         slug {
  //           current
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (pageQueryData.errors) {
  //   reporter.panicOnBuild("Error creando paginas")
  // }

  // pageQueryData.allSanityPages.nodes.forEach(node => {
  //   const pageEN = path.resolve("./src/templates/pageEN.js")
  //   createPage({
  //     path: "/" + node.slug.current,
  //     component: pageEN,
  //     context: { slug: node.slug.current, language: "en" },
  //   })

  //   const pageES = path.resolve("./src/templates/pageES.js")
  //   createPage({
  //     path: "/es/" + node.slug.current,
  //     component: pageES,
  //     context: { slug: node.slug.current, language: "es" },
  //   })

  //   const pageGER = path.resolve("./src/templates/pageDE.js")
  //   createPage({
  //     path: "/de/" + node.slug.current,
  //     component: pageGER,
  //     context: { slug: node.slug.current, language: "de" },
  //   })
  // })


  // CREACION DE PAGINAS DE AYUDA
  // const { data: helpQueryData } = await graphql(`
  //   query HelpPages {
  //     allSanityHelp {
  //       nodes {
  //         slug {
  //           current
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (helpQueryData.errors) {
  //   reporter.panicOnBuild("Error creando paginas")
  // }

  // helpQueryData.allSanityHelp.nodes.forEach(node => {
  //   const pageEN = path.resolve("./src/templates/helpEN.js")
  //   createPage({
  //     path: "/help/" + node.slug.current,
  //     component: pageEN,
  //     context: { slug: node.slug.current, language: "en" },
  //   })

  //   const pageES = path.resolve("./src/templates/helpES.js")
  //   createPage({
  //     path: "/es/help/" + node.slug.current,
  //     component: pageES,
  //     context: { slug: node.slug.current, language: "es" },
  //   })

  //   const pageGER = path.resolve("./src/templates/helpDE.js")
  //   createPage({
  //     path: "/de/help/" + node.slug.current,
  //     component: pageGER,
  //     context: { slug: node.slug.current, language: "de" },
  //   })
  // })

  // CREACION DE PAGINAS LEGALES  
  const { data: legalPageQueryData } = await graphql(`
    query LegalPages {
      allSanityLegalPages {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  if (legalPageQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas legales")
  }

  legalPageQueryData.allSanityLegalPages.nodes.forEach(node => {
    const LegalPagesEN = path.resolve("./src/templates/legalEN.js")
    createPage({
      path: "/legal/" + node.slug.current,
      component: LegalPagesEN,
      context: { slug: node.slug.current, language: "en" },
    })

    const LegalPagesES = path.resolve("./src/templates/legalES.js")
    createPage({
      path: "/es/legal/" + node.slug.current,
      component: LegalPagesES,
      context: { slug: node.slug.current, language: "es" },
    })

    const LegalPagesGER = path.resolve("./src/templates/legalDE.js")
    createPage({
      path: "/de/legal/" + node.slug.current,
      component: LegalPagesGER,
      context: { slug: node.slug.current, language: "de" },
    })
  })

    // CREACION DE PAGINAS PROFESIONALES  
    const { data: professionalsDataPages } = await graphql(`
    query ProfessionalsPages {
      allSanityProfessional {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  if (professionalsDataPages.errors) {
    reporter.panicOnBuild("Error creando paginas de profesionales")
  }

  professionalsDataPages.allSanityProfessional.nodes.forEach(node => {
    const ProfessionalPagesEN = path.resolve("./src/templates/professionals/proEN.js")
    createPage({
      path: "/search/" + node.slug.current,
      component: ProfessionalPagesEN,
      context: { slug: node.slug.current, language: "en" },
    })

    const ProfessionalPagesES = path.resolve("./src/templates/professionals/proES.js")
    createPage({
      path: "/es/search/" + node.slug.current,
      component: ProfessionalPagesES,
      context: { slug: node.slug.current, language: "es" },
    })

    const ProfessionalPagesGER = path.resolve("./src/templates/professionals/proDE.js")
    createPage({
      path: "/de/search/" + node.slug.current,
      component: ProfessionalPagesGER,
      context: { slug: node.slug.current, language: "de" },
    })
  })

}

