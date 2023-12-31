import { useStaticQuery, graphql } from "gatsby"

const useContact = () => {
  return useStaticQuery(graphql`
  {
  allSanityContact {
    ContactEN: nodes {
      _id
      title
      text
      subTitle
      titlePage
      descriptionPage
      ccEmails
      destinationEmails
      banner {
        title
        subtitle
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
              x
              y
              width
              height
            }
          }
        }
      }
    }

    ContactES: nodes {
        _id
        title: titleSpanish
        text: textSpanish
        subTitle: subTitleSpanish
        titlePage: titlePageSpanish
        descriptionPage: descriptionPageSpanish
        ccEmails
        destinationEmails
        banner {
          title: titleSpanish
          subtitle: subtitleSpanish
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
                x
                y
                width
                height
              }
            }
          }
        }
      }

      ContactDE: nodes {
        _id
        title: titleGerman
        text: textGerman
        subTitle: subTitleGerman
        titlePage: titlePageGerman
        descriptionPage: descriptionPageGerman
        ccEmails
        destinationEmails
        banner {
          title: titleGerman
          subtitle: subtitleGerman
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
                x
                y
                width
                height
              }
            }
          }
        }
      }
  }
} 
    `)
}

export default useContact