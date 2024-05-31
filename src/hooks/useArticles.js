import { useStaticQuery, graphql } from "gatsby";

const useArticles = () => {
  return useStaticQuery(graphql`
  {
    allSanityBlogPage {
      nodes {
        titlePage
        titlePageGerman
        titlePageSpanish
        descriptionPage
        descriptionPageSpanish
        descriptionPageGerman
        pageKeywords
        pageKeywordsSpanish
        pageKeywordsGerman
      }
    }

    allSanityArticle {
      ArticleEN: nodes {
        _createdAt
        image {
          alt
          image {
            asset {
              _id
            }
            crop {
              bottom
              left
              right
              top
            }
            hotspot {
              height
              width
              x
              y
            }
          }
        }
        title
        slug{
          current
        }
        _rawContent
        author {
          name
          _rawDescription
          photo {
            alt
            image {
              asset {
                _id
              }
              crop {
                bottom
                left
                right
                top
              }
              hotspot {
                height
                width
                x
                y
              }
            }
          }
        }
        relatedArticles {
          image {
            alt
            image {
              asset {
                _id
              }
              crop {
                bottom
                left
                right
                top
              }
              hotspot {
                height
                width
                x
                y
              }
            }
          }
          title
          _createdAt
          slug {
            current
          }
        }
      }
      ArticleES: nodes {
        _createdAt
        image {
          alt
          image {
            asset {
              _id
            }
            crop {
              bottom
              left
              right
              top
            }
            hotspot {
              height
              width
              x
              y
            }
          }
        }
        title: titleSpanish
        _rawContent: _rawContentSpanish
        slug{
          current
        }
        author {
          name
          _rawDescription: _rawDescriptionSpanish
          photo {
            alt
            image {
              asset {
                _id
              }
              crop {
                bottom
                left
                right
                top
              }
              hotspot {
                height
                width
                x
                y
              }
            }
          }
        }
        relatedArticles {
          image {
            alt
            image {
              asset {
                _id
              }
              crop {
                bottom
                left
                right
                top
              }
              hotspot {
                height
                width
                x
                y
              }
            }
          }
          title: titleSpanish
          _createdAt
          slug {
            current
          }
        }
      }
      ArticleDE: nodes {
        _createdAt
        image {
          alt
          image {
            asset {
              _id
            }
            crop {
              bottom
              left
              right
              top
            }
            hotspot {
              height
              width
              x
              y
            }
          }
        }
        title: titleGerman
        _rawContent: _rawContentGerman
        slug{
          current
        }
        author {
          name
          _rawDescription: _rawDescriptionGerman
          photo {
            alt
            image {
              asset {
                _id
              }
              crop {
                bottom
                left
                right
                top
              }
              hotspot {
                height
                width
                x
                y
              }
            }
          }
        }
        relatedArticles {
          image {
            alt
            image {
              asset {
                _id
              }
              crop {
                bottom
                left
                right
                top
              }
              hotspot {
                height
                width
                x
                y
              }
            }
          }
          title: titleGerman
          _createdAt
          slug {
            current
          }
        }
      }
    }
  }
  `);
};

export default useArticles;