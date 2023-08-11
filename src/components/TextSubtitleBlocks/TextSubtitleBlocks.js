import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextSubtitleBlocks.scss";

const TextSubtitleBlocks = ({ title, blocks }) => {
  const textSubtitleBlocks = blocks?.map((block, id) => (
    <div key={`textItem-${id}`} className="textSubtitleItem">
      <h5 className="mb-3 textSubtitleItem__title">{block.author}</h5>
      <div className="textSubtitleItem__content">
        <PortableText value={block?._rawText} />
      </div>
    </div>
  ));
  return (
    <div className="py-5 container">
      <div className="mb-4 textSubtitleItemList__heading">
        {title && <h3 className="mb-4">{title}</h3>}
      </div>

      <div className="textSubtitleItemList">{textSubtitleBlocks}</div>
    </div>
  );
};

export default TextSubtitleBlocks;