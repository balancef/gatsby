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
                    separated
                    link {
                      url
                      title
                      _key
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
          }
    }
  `)
}

export default useHeader