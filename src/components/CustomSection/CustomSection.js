import React from "react";
import {
  TextBlock,
  TextImage,
  IconsTextBlocks,
  TextBlockList,
  LogosCarousel,
  TextImageButton,
  TextSubtitleBlocks,
  TextLogoButton,
  AuthorReference,
  MainCourses,
} from "../";
import AccordionBlocks from "../AccordionBlocks/AccordionBlocks";

const CustomSection = ({ sections }) => {
  const sectionResult = sections.map((section) => {


    if (section?._type !== null && section?._type !== undefined) {
      if (section?._type === "textBlock") {
        return (
          <TextBlock
            key={section._key}
            title={section?.title}
            text={section._rawContent}
          />
        );
      }

      if (section?._type === "textImage") {
        return (
          <TextImage
            key={section._key}
            title={section.textBlock?.title}
            text={section.textBlock?._rawContent}
            image={section.image?.image}
            videoUrl={section.videoUrl}
            imageRight={section.imageRight}
          />
        );
      }

      if (section?._type === "iconsTextBlocks") {
        return (
          <IconsTextBlocks
            key={section._key}
            title={section.titleSubtitle?.title}
            subtitle={section.titleSubtitle?._rawContent}
            iconBlock={section.iconsBlock}
          />
        );
      }

      if (section?._type === "textBlockList") {
        return (
          <TextBlockList
            key={section._key}
            blocks={section?.textBlocks}
          />
        );
      }

      if (section?._type === "logosCarousel") {
        return <LogosCarousel key={section._key} data={section}/>;
      }
 
      
      if (section?._type === "textImageButton") {
        return (
          <TextImageButton
            key={section._key}
            title={section.textImage.textBlock?.title}
            text={section.textImage.textBlock?._rawContent}
            image={section.textImage.image.image}
            button={section.link}
            callToActionLink={section.callToActionLink}
          />
        );
      }  

      if (section?._type === "textSubtitleBlocks") {
        return (
          <TextSubtitleBlocks
            key={section._key}
            title={section.title}
            blocks={section.textBlocks}
          />
        );
      } 
      
      if (section?._type === "textButton" || section?._type === "logoText") {
        return (
          <TextLogoButton
            key={section._key}
            title={section.textBlock?.title}
            text={section.textBlock?._rawContent}
            button={section.link}
            image={section.image?.image}
          />
        );
      }

      if (section?._type === "authorReference") {
        return (
          <AuthorReference
            key={section._key}
            author={section.authorReference?.author}
            detail={section.authorReference?.authorDetail}
            text={section.authorReference?._rawText}
            image={section.authorAppearance?.image}
          />
        );
      }

      if (section?._type === "accordionBlocks") {
        return (
          <AccordionBlocks
            key={section._key}
            blocks={section?.blocks}
          />
        );
      }

      if (section?._type === "highlightedExternalAccess") {
        return (
          <MainCourses
            key={section._key}
            highlightedLink={section.highlightedLink}
            externalLinks={section.fullCardsItems}
            button={section.externalLink}
          />
        );
      }

      return <></>
    } else {
      return <></>
    }


  });

  return <>{sectionResult}</>;
};

export default CustomSection;
