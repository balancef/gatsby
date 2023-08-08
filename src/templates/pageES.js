import React from "react";
import { graphql } from "gatsby";
import { Layout, CustomSection, Banner} from "../components";

const Page = ({location,  data }) => {
  const {
    dinamicContent
  } = data?.allSanityPages?.nodes[0]

  const bannerInfo = data?.allSanityPages?.nodes[0]
  

  return (
    <Layout location={location}>
      <div className="container">
      {(bannerInfo.banner !== null && bannerInfo.banner?.slides?.length !== 0) ? <Banner banner={bannerInfo.banner}/> : <></>}
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
          autoplay
          slides {
            title
            text
            url
            overlay
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
        }
        dinamicContent {
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
            title
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
                text
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
      
        descriptionPage
        banner {
          slides {
            url
            title
            text
            overlay
            _key
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
          autoplay
        }
      }
    }
  }
`;
