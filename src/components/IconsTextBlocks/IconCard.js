import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { PortableText } from "@portabletext/react";
import { useTheme } from "../../context/themeContext";
import "./IconTextBlock.scss";

const IconCard = ({ data }) => {
  const { theme } = useTheme();
  return (
    <div className="contentIconCard">
      <div className="contentIconCard__icon">
        {theme === "dark" ? (
          data.iconImage.imageDark !== null ? (
            <SanityImage
              {...data.iconImage.imageDark}
              alt={`${data.iconImage.image.alt}`}
            />
          ) : (
            <></>
          )
        ) : data.iconImage.image.image !== null ? (
          <SanityImage
            {...data.iconImage.image.image}
            alt={`${data.iconImage.image.alt}`}
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
