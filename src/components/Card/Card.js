import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"
import { Icon } from "..";

import "./Card.scss"

const Card = ({
  data: { title, _rawContent, image, icon, iconText, link }
}) => {

  return (
    <div  className="Card">
    {image && (
        <div>
          <SanityImage {...image} alt={`${title}`} className="ImageContainer" />
        </div>
      )}
      {title && <h5 className="title-small Title">{title}</h5>}
      {_rawContent && (
        <div className="Content">
          <PortableText value={_rawContent} />
        </div>
      )}
      
      { icon && (
        <div className="PersonContainer">
          <div className="Profile">
            <Icon code={icon}></Icon>
          </div>
          <div className="Person">{iconText}</div>
        </div>
      )}

      { link && (
          <a
            href={link?.url}
            rel="noopener noreferrer"
            className="Link"
            target="_blank"
          >
            <small>{link?.text}</small>
          </a>
        )
      } 
    </div>
  )
}

export default Card
