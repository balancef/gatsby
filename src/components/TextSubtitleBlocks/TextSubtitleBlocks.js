import React from "react";
import { PortableText } from "@portabletext/react";
import { FaStar } from "react-icons/fa";
import "./TextSubtitleBlocks.scss";

const TextSubtitleBlocks = ({ title, blocks }) => {
  const textSubtitleBlocks = blocks?.map((block, id) => (
    <div key={`textItem-${id}`} className="textSubtitleItem">
      <div className="textSubtitleItem__icons">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      {block?._rawText && (
        <div className="textSubtitleItem__content">
          <PortableText value={block?._rawText} />
        </div>
      )}
      {block?.author && (
        <p className="textSubtitleItem__title">{block.author}</p>
      )}
      {block?.authorDetail && (
        <label className="textSubtitleItem__subtitle">
          {block.authorDetail}
        </label>
      )}
    </div>
  ));
  return (
    <div className="section-padding container">
      <div className="textSubtitleItemList__heading">
        {title && <h4 className="mb-5">{title}</h4>}
      </div>

      <div className="textSubtitleItemList">{textSubtitleBlocks}</div>
    </div>
  );
};

export default TextSubtitleBlocks;
