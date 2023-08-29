import { useStaticQuery, graphql } from "gatsby";

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      sanityFooter {
        socialMediaBlock {
          links {
            style
            link {
              url
              title
            }
            icon {
              icon
            }
            _key
          }
        }
        logo {
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
        internalLinks {
          title
          links {
            url
            title
            _key
          }
        }
        externalLinks {
          title
          links {
            url
            title
            _key
          }
        }
        customLinkBlock {
          title
          _key
          links {
            _key
            style
            link {
              url
              title
              _key
            }
            icon {
              icon
            }
          }
          _type
        }
        bottomMenu {
          links {
            url
            title
            _key
          }
        }
        copyright
      }
      sanityFooterES: sanityFooter {
        socialMediaBlock {
          links {
            style
            link {
              url
              title:titleSpanish
            }
            icon {
              icon
            }
            _key
          }
        }
        logo: logoSpanish {
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
        internalLinks {
          title:titleSpanish
          links {
            url
            title:titleSpanish
            _key
          }
        }
        externalLinks {
          title: titleSpanish
          links {
            url: urlSpanish
            title:titleSpanish
            _key
          }
        }
        customLinkBlock {
          title: titleSpanish
          _key
          links {
            _key
            style
            link {
              url
              title: titleSpanish
              _key
            }
            icon {
              icon
            }
          }
          _type
        }
        bottomMenu {
          links {
            url
            title:titleSpanish
            _key
          }
        }
        copyright
      }
      sanityFooterDE: sanityFooter {
        socialMediaBlock {
          links {
            style
            link {
              url              
              title:titleGerman
            }
            icon {
              icon
            }
            _key
          }
        }
        logo: logoGerman {
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
        internalLinks {
          title: titleGerman
          links {
            url
            title:titleGerman
            _key
          }
        }
        externalLinks {
                    title: titleGerman
          links {
            url: urlGerman
            title:titleGerman
                        _key
          }
        }
        customLinkBlock {
          title: titleGerman
          _key
          links {
            _key
            style
            link {
              url
              title: titleGerman
              _key
            }
            icon {
              icon
            }
          }
          _type
        }
        bottomMenu {
          links {
            url
            title: titleGerman
            _key
          }
        }
        copyright
      }
    }
  `);
};

export default useFooter;
