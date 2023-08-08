import { useStaticQuery, graphql } from "gatsby";

const useHome = () => {
  return useStaticQuery(graphql`
    {

        sanityHome {
          titlePage
          descriptionPage
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
            ... on SanityImageCarousel {
              _key
              _type
              firstLineSlides {
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
              secondLineSlides {
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
            ... on SanityTextImageCarousel {
              _key
              _type
              title
              slides {
                image {
                  alt
                  image {
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
                    asset {
                      _id
                    }
                  }
                }
                textBlock {
                  title
                  _rawContent
                }
                _type
              }
            }
            ... on SanityTextBlockList {
              _key
              _type
              titleSubtitle {
                title
                _rawContent
              }
              textBlocks {
                title
                _rawContent
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
            ... on SanityAccordion {
              _key
              _type
              title
              accordionItems {
                title
                _rawContent
              }
            }
            ... on SanityTextBlock {
              _key
              _type
              title
              _rawContent
            }
            ... on SanityTextImage {
              _key
              _type
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
              textBlock {
                title
                _rawContent
              }
            }
          }
        }
        sanityHomeES: sanityHome {
          titlePage
          descriptionPage
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
            ... on SanityImageCarousel {
              _key
              _type
              firstLineSlides {
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
              secondLineSlides {
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
            ... on SanityTextImageCarousel {
              _key
              _type
              title
              slides {
                image {
                  alt
                  image {
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
                    asset {
                      _id
                    }
                  }
                }
                textBlock {
                  title
                  _rawContent
                }
                _type
              }
            }
            ... on SanityTextBlockList {
              _key
              _type
              titleSubtitle {
                title
                _rawContent
              }
              textBlocks {
                title
                _rawContent
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
            ... on SanityAccordion {
              _key
              _type
              title
              accordionItems {
                title
                _rawContent
              }
            }
            ... on SanityTextBlock {
              _key
              _type
              title
              _rawContent
            }
            ... on SanityTextImage {
              _key
              _type
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
              textBlock {
                title: titleSpanish
                _rawContent: _rawContentSpanish
              }
            }
          }
        }
        sanityHomeDE: sanityHome {
          titlePage
          descriptionPage
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
            ... on SanityImageCarousel {
              _key
              _type
              firstLineSlides {
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
              secondLineSlides {
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
            ... on SanityTextImageCarousel {
              _key
              _type
              title
              slides {
                image {
                  alt
                  image {
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
                    asset {
                      _id
                    }
                  }
                }
                textBlock {
                  title
                  _rawContent
                }
                _type
              }
            }
            ... on SanityTextBlockList {
              _key
              _type
              titleSubtitle {
                title
                _rawContent
              }
              textBlocks {
                title
                _rawContent
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
            ... on SanityAccordion {
              _key
              _type
              title
              accordionItems {
                title
                _rawContent
              }
            }
            ... on SanityTextBlock {
              _key
              _type
              title
              _rawContent
            }
            ... on SanityTextImage {
              _key
              _type
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
              textBlock {
                title: titleGerman
                _rawContent: _rawContentGerman
              }
            }
          }
        }
      
    }
  `);
};

export default useHome;
