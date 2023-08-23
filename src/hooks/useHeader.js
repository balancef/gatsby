import { useStaticQuery, graphql } from "gatsby"

const useHeader = () => {
  return useStaticQuery(graphql`
  {
    sanityHeader {
        menu {
          links {
            ... on SanityDropdown {
              _key
              _type
              text
              links {
                ... on SanityDropdownExternalLink {
                  _key
                  _type
                  externalLink {
                    title
                    url
                    _type
                    _key
                  }
                  separated
                }
                ... on SanityDropdownLink {
                  _key
                  _type
                  separated
                  link {
                    _key
                    _type
                    title
                    url
                  }
                }
              }
              icon {
                icon
                _type
                _key
              }
            }
            ... on SanityMenuLink {
              _key
              _type
              link {
                url
                title
                _type
                _key
              }
              icon {
                icon
                _type
                _key
              }
            }
            ... on SanityMenuExternalLink {
              _key
              _type
              externalLink {
                _key
                _type
                title
                url
              }
              icon {
                _key
                _type
                icon
              }
            }
          }
          _type
        }
        logo {
            alt
            image {
              hotspot {
                height
                width
                x
                y
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
          _type
          _key
        }
        customLinkBlock {
          links {
            style
            link {
              url
              title
            }
            icon {
              icon
            }
          }
        }
        _type
        _key
        headerMenu {
          dropdownTitle
          links {
            ... on SanityDropdown {
              _key
              _type
              text
              links {
                ... on SanityDropdownExternalLink {
                  _key
                  _type
                  externalLink {
                    title
                    url
                    _type
                    _key
                  }
                  separated
                }
                ... on SanityDropdownLink {
                  _key
                  _type
                  separated
                  link {
                    _key
                    _type
                    title
                    url
                  }
                }
              }
              icon {
                icon
                _type
                _key
              }
            }
            ... on SanityMenuLink {
              _key
              _type
              link {
                url
                _key
                _type
                title
              }
              icon {
                icon
                _key
                _type
              }
            }
          }
        }
        buttonMenu {
          _key
          _type
          title
          url
        }
      }

      sanityHeaderES: sanityHeader {
        menu {
          links {
            ... on SanityDropdown {
              _key
              _type
              text: textSpanish
              links {
                ... on SanityDropdownExternalLink {
                  _key
                  _type
                  externalLink {
                    title: titleSpanish
                    url: urlSpanish
                    _type
                    _key
                  }
                  separated
                }
                ... on SanityDropdownLink {
                  _key
                  _type
                  separated
                  link {
                    _key
                    _type
                    title: titleSpanish
                    url
                  }
                }
              }
              icon {
                icon
                _type
                _key
              }
            }
            ... on SanityMenuLink {
              _key
              _type
              link {
                url
                title: titleSpanish
                _type
                _key
              }
              icon {
                icon
                _type
                _key
              }
            }
            ... on SanityMenuExternalLink {
              _key
              _type
              externalLink {
                _key
                _type
                title: titleSpanish
                url: urlSpanish
              }
              icon {
                _key
                _type
                icon
              }
            }
          }
          _type
        }
        logo: logoSpanish {
            alt
            image {
              hotspot {
                height
                width
                x
                y
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
          _type
          _key
        }
        customLinkBlock {
          links {
            style
            link {
              url
              title
            }
            icon {
              icon
            }
          }
        }
        _type
        _key
        headerMenu {
          dropdownTitle: dropdownTitleSpanish 
          links {
            ... on SanityDropdown {
              _key
              _type
              text: textSpanish
              links {
                ... on SanityDropdownExternalLink {
                  _key
                  _type
                  externalLink {
                    title: titleSpanish
                    url: urlSpanish
                    _type
                    _key
                  }
                  separated
                }
                ... on SanityDropdownLink {
                  _key
                  _type
                  separated
                  link {
                    _key
                    _type
                    title: titleSpanish
                    url
                  }
                }
              }
              icon {
                icon
                _type
                _key
              }
            }
            ... on SanityMenuLink {
              _key
              _type
              link {
                url
                _key
                _type
                title: titleSpanish
              }
              icon {
                icon
                _key
                _type
              }
            }
          }
        }
        buttonMenu {
          _key
          _type
          title: titleSpanish          
          url: urlSpanish
        }
      }

      sanityHeaderDE: sanityHeader {
        menu {
          links {
            ... on SanityDropdown {
              _key
              _type
              text: textGerman
              links {
                ... on SanityDropdownExternalLink {
                  _key
                  _type
                  externalLink {
                    title: titleGerman
                    url: urlGerman
                    _type
                    _key
                  }
                  separated
                }
                ... on SanityDropdownLink {
                  _key
                  _type
                  separated
                  link {
                    _key
                    _type
                    title: titleGerman
                    url
                  }
                }
              }
              icon {
                icon
                _type
                _key
              }
            }
            ... on SanityMenuLink {
              _key
              _type
              link {
                url
                title: titleGerman
                _type
                _key
              }
              icon {
                icon
                _type
                _key
              }
            }
            ... on SanityMenuExternalLink {
              _key
              _type
              externalLink {
                _key
                _type
                title: titleGerman
                url: urlGerman
              }
              icon {
                _key
                _type
                icon
              }
            }
          }
          _type
        }
        logo: logoGerman {
            alt
            image {
              hotspot {
                height
                width
                x
                y
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
          _type
          _key
        }
        customLinkBlock {
          links {
            style
            link {
              url
              title
            }
            icon {
              icon
            }
          }
        }
        _type
        _key
        headerMenu {
          dropdownTitle: dropdownTitleGerman
          links {
            ... on SanityDropdown {
              _key
              _type
              text: textGerman
              links {
                ... on SanityDropdownExternalLink {
                  _key
                  _type
                  externalLink {
                    title: titleGerman
                    url: urlGerman
                    _type
                    _key
                  }
                  separated
                }
                ... on SanityDropdownLink {
                  _key
                  _type
                  separated
                  link {
                    _key
                    _type
                    title: titleGerman
                    url
                  }
                }
              }
              icon {
                icon
                _type
                _key
              }
            }
            ... on SanityMenuLink {
              _key
              _type
              link {
                url
                _key
                _type
                title: titleGerman
              }
              icon {
                icon
                _key
                _type
              }
            }
          }
        }
        buttonMenu {
          _key
          _type
          title: titleGerman
          url: urlGerman
        }
      }
} 
  `)
}

export default useHeader