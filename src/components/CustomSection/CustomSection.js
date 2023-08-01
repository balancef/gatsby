import React from "react";
import {
  Accordion,
  TextBlock,
  TextImage,
  IconsTextBlocks,
  FullCard,
  TextBlockList,
  LogosCarousel,
  ImageCarousel,
  TextImageCarousel
} from "../";

const CustomSection = ({ sections }) => {
  const sectionResult = sections.map((section) => {
    {
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textBlock"
      ) {
        return (
          <TextBlock
            key={section._key}
            title={section?.title}
            text={section._rawContent}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textImage"
      ) {
        return (
          <TextImage
            key={section._key}
            title={section.textBlock?.title}
            text={section.textBlock?._rawContent}
            image={section.image.image}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "iconsTextBlocks"
      ) {
        return (
          <IconsTextBlocks
            key={section._key}
            title={section.titleSubtitle?.title}
            subtitle={section.titleSubtitle?._rawContent}
            iconBlock={section.iconsBlock}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "accordion"
      ) {
        return (
          <Accordion
            key={section._key}
            title={section?.title}
            items={section?.accordionItems}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "fullCardList"
      ) {
        return (
          <FullCard
            key={section._key}
            title={section.title}
            cards={section.fullCardsItems}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textBlockList"
      ) {
        return (
          <TextBlockList
            key={section._key}
            title={section?.titleSubtitle?.title}
            subtitle={section?.titleSubtitle?._rawContent}
            blocks={section?.textBlocks}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "logosCarousel"
      ) {
        return <LogosCarousel key={section._key} data={section}/>;
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "imageCarousel"
      ) {
        return <ImageCarousel key={section._key} data={section} />;
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textImageCarousel"
      ) {
        return (
          <TextImageCarousel
            key={section._key}
            slides={section.slides}
            title={section.title}
            text={section.textBlock?._rawContent}
          />
        );
      }
    }
  });

  return <>{sectionResult}</>;
};

export default CustomSection;
