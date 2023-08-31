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
            ... on SanityTextButton {
              _key
              _type
              textBlock {
                title
                _rawContent
              }
              link {
                _key
                title
                url
              }
            }
            ... on SanityTextSubtitleBlocks {
              _key
              _type
              title
              textBlocks {
                authorDetail
                author
                _rawText
              }
            }
            ... on SanityTextImageButton {
              _key
              _type
              textImage {
                textBlock {
                  title
                  _rawContent
                }
                image {
                  alt
                  _key
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
                    _key
                  }
                }
                _type
                _key
              }
              link {
                url
                title
              }
              callToActionLink {
                title
                link {
                  url
                  title
                }
              }
            }
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
                  title
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
              videoUrl
              imageRight
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
          titlePage: titlePageSpanish
          descriptionPage: descriptionPageSpanish
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
            ... on SanityTextButton {
              _key
              _type
              textBlock {
                title: titleSpanish
                _rawContent: _rawContentSpanish
              }
              link {
                _key
                title: titleSpanish
                url
              }
            }
            ... on SanityTextSubtitleBlocks {
              _key
              _type
              title: titleSpanish
              textBlocks {
                authorDetail: authorDetailSpanish
                author
                _rawText: _rawTextSpanish
              }
            }
            ... on SanityTextImageButton {
              _key
              _type
              textImage {
                textBlock {
                  title: titleSpanish
                  _rawContent: _rawContentSpanish
                }
                image {
                  alt
                  _key
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
                    _key
                  }
                }
                _type
                _key
              }
              link {
                url
                title: titleSpanish
              }
              callToActionLink {
                title: titleSpanish
                link {
                  url
                  title: titleSpanish
                }
              }
            }
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
              textBlocks {
                title: titleSpanish
                _rawContent: _rawContentSpanish
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
              title: titleSpanish
              accordionItems {
                title: titleSpanish
                _rawContent: _rawContentSpanish
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
              videoUrl
              imageRight
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
          titlePage: titlePageGerman
          descriptionPage: descriptionPageGerman
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
            ... on SanityTextButton {
              _key
              _type
              textBlock {
                title: titleGerman
                _rawContent: _rawContentGerman
              }
              link {
                _key
                title: titleGerman
                url
              }
            }
            ... on SanityTextSubtitleBlocks {
              _key
              _type
              title:  titleGerman
              textBlocks {
                authorDetail: authorDetailGerman
                author
                _rawText: _rawTextGerman
              }
            }
            ... on SanityTextImageButton {
              _key
              _type
              textImage {
                textBlock {
                  title: titleGerman
                  _rawContent: _rawContentGerman
                }
                image {
                  alt
                  _key
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
                    _key
                  }
                }
                _type
                _key
              }
              link {
                url
                title: titleGerman
              }
              callToActionLink {
                title: titleGerman
                link {
                  url
                  title: titleGerman
                }
              }
            }
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
              textBlocks {
                title: titleGerman
                _rawContent: _rawContentGerman
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
              title: titleGerman
              accordionItems {
                title: titleGerman
                _rawContent: _rawContentGerman
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
              videoUrl
              imageRight
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
