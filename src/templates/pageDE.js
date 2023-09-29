import React from "react";
import { graphql } from "gatsby";
import { Layout, CustomSection, Banner, Seo} from "../components";

const Page = ({location,  data }) => {
  const { dinamicContent, banner, titlePage, descriptionPage} = data?.allSanityPages?.nodes[0]

  return (
    <Layout location={location}>
      <Seo title={titlePage} description={descriptionPage} keywords="" />
      {(banner !== null) ? <Banner banner={banner}/> : <></>}
        {dinamicContent !== null  && dinamicContent.length !==0  &&(
          <CustomSection sections={dinamicContent} />
        )}
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    allSanityPages(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        titlePage: titlePageGerman
        descriptionPage: descriptionPageGerman
        slug {
          current
        }
        id
        banner {
            title:titleGerman
            subtitle:subtitleGerman
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
              title: titleGerman
              accordionItems {
                _key
                _type
                title: titleGerman
                _rawContent: _rawContentGerman
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
              authorDetail: authorDetailGerman
              _rawText: _rawTextGerman
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
              title: titleGerman
              _rawContent: _rawContentGerman
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
            title: titleGerman
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
            title: titleGerman
            accordionItems {
              title: titleGerman
              _rawContent: _rawContentGerman
            }
          }
          ... on SanityTextImage {
            _key
            _type
            videoUrl
            imageRight
            textBlock {
              title: titleGerman
              _rawContent: _rawContentGerman
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
