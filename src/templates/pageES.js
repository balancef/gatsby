import React from "react";
import { graphql } from "gatsby";
import { Layout, CustomSection, Banner, Seo} from "../components";

const Page = ({location,  data }) => {
  const { dinamicContent, banner, titlePage, descriptionPage, pageKeywords} = data?.allSanityPages?.nodes[0]

  return (
    <Layout location={location}>
      <Seo title={titlePage} description={descriptionPage} keywords={pageKeywords} />
      {(banner !== null) ? <Banner banner={banner}/> : <></>}    
        {dinamicContent !== null  && dinamicContent.length !==0  &&(
          <CustomSection sections={dinamicContent}/>
        )}
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    allSanityPages(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        titlePage: titlePageSpanish
        descriptionPage: descriptionPageSpanish
        pageKeywords: pageKeywordsSpanish
        slug {
          current
        }
        id
        banner {
            title:titleSpanish
            subtitle:subtitleSpanish
            image {
              alt
              image {
                _key
                asset {
                  _id
                }
                crop {
                  top
                  right
                  left
                  bottom
                }
                hotspot {
                  y
                  x
                  width
                  height
                }
              }
            }          
        }
        dinamicContent {
          ... on SanityAccordionBlocks {
            _key
            _type
            blocks {
              _key
              _type
              title: titleSpanish
              accordionItems {
                _key
                _type
                title: titleSpanish
                _rawContent: _rawContentSpanish
              }
            }
          }
          ... on SanityAuthorReference {
            _key
            _type
            authorAppearance {
              _key
              _type
              alt
              image {
                _key
                _type
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
            authorReference {
              _key
              _type
              author
              authorDetail: authorDetailSpanish
              _rawText: _rawTextSpanish
            }
          }
          ... on SanityLogoText {
            _key
            _type
            image {
              _key
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
            textBlock {
              title: titleSpanish
              _rawContent: _rawContentSpanish
            }
          }
          ... on SanityIconsTextBlocks {
            _key
            _type
            titleSubtitle {
              title
              _rawContent
            }
            iconsBlock {
              _key
              contentBlock {
                title
                _rawContent
              }
              iconImage {
                  alt
                  image {
                    asset {
                      _id
                    }
                    hotspot {
                      y
                      x
                      width
                      height
                    }
                    crop {
                      top
                      right
                      left
                      bottom
                    }
                  }
              }
            }
          }
          ... on SanityLogosCarousel {
            _key
            _type
            title: titleSpanish
            carousel {
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
          ... on SanityTextImage {
            _key
            _type
            videoUrl
            imageRight
            textBlock {
              title: titleSpanish
              _rawContent: _rawContentSpanish
            }
            image {
              alt
              _key
              image {
                _key
                asset {
                  _id
                }
                crop {
                  top
                  right
                  left
                  bottom
                }
                hotspot {
                  y
                  x
                  width
                  height
                }
              }
            }
          }
          ... on SanityTextBlock {
            _key
            _type
            title
            _rawContent
          }
        }
      }
    }
  }
`;
