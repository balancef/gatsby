import React from "react";
import { graphql } from "gatsby";
import { Layout, Seo } from "../../components";
import Article from "../../components/Articles/Article";

const ArticlePage = ({ location, data }) => {
  const ArticleQuery = data.data.nodes[0];
  const bannerData = data.banner.nodes[0];

  const titlePage = bannerData?.title

  const banner = {bannerData}
  const publicationDate = ArticleQuery?._createdAt
  const content = ArticleQuery?._rawContent;
  const author = ArticleQuery?.author;
  const relatedArticles = ArticleQuery?.relatedArticles;

  return (
    <Layout location={location}>
      <Seo  //AGREGAR SEO
        title={titlePage}
        description=""
        keywords=""
      />
      <Article
        banner={banner}
        publicationDate={publicationDate}
        content={content}
        author={author}
        relatedArticles={relatedArticles}
      />
    </Layout>
  );
};

export default ArticlePage;

export const query = graphql`
  query ($slug: String!) {
      data: allSanityArticle(filter: { slug: { current: { eq: $slug } } }) {
        nodes {
          _createdAt
          _rawContent: _rawContentGerman
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
      banner: allSanityArticle(filter: { slug: { current: { eq: $slug } } }) {
        nodes{
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
        }
      }
    }
`;