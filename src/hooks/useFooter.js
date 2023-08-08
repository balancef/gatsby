import { useStaticQuery, graphql } from "gatsby";

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      sanityFooter {
        socialMediaBlock {
          title
          links {
            link {
              url
              title
              _key
            }
            icon {
              icon
            }
            style
          }
        }
        qrCode {
          url
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
        logo {
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
        linkBlock {
          _key
          title
          links {
            url
            title
            _key
          }
        }
        id
      }
    }
  `);
};

export default useFooter;
