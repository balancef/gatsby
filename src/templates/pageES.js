import React from "react";
import { graphql } from "gatsby";
import { Layout, CustomSection, Banner} from "../components";

const Page = ({location,  data }) => {
  const { dinamicContent, banner} = data?.allSanityPages?.nodes[0]

  return (
    <Layout location={location}>
      {(banner !== null) ? <Banner banner={banner}/> : <></>}
      <div className="container">      
        {dinamicContent !== null  && dinamicContent.length !==0  &&(
          <CustomSection sections={dinamicContent}/>
        )}
      </div>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    allSanityPages(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        titlePage
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
          ... on SanityAccordion {
            _key
            _type
            title
            accordionItems {
              title
              _rawContent
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
          ... on SanityFullCardList {
            _key
            _type
            title
            fullCardsItems {
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
              text {
                title
                _rawContent
              }
              link {
                url
                title
              }
              icon {
                icon
              }
              textIcon
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
