import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { PortableText } from "@portabletext/react";
import "./IconTextBlock.scss";

const IconCard = ({ data }) => {
  return (
    <div className="contentIconCard">
      <div className="contentIconCard__icon">
        {data.iconImage.image !== null ? (
          <SanityImage
            {...data.iconImage.image}
            alt={`${data.iconImage.alt}`}
          />
        ) : (
          <></>
        )}
      </div>

      {data.contentBlock && (
        <h6 className="title-medium pt-3 text-center">
          {data.contentBlock.title}
        </h6>
      )}
      {data.contentBlock && (
        <div className="textCard text-center">
          <PortableText value={data.contentBlock._rawContent} />
        </div>
      )}
    </div>
  );
};

export default IconCard;
