import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextBlockList.scss";

const TextBlockList = ({ title, subtitle, blocks }) => {
  const textBlocks = blocks?.map((block, id) => (
    <div key={`textItem-${id}`} className="textItem">
      <h5 className="mb-3 textItem__title">{block.title}</h5>
      <div className="textItem__content">
        <PortableText value={block?._rawContent} />
      </div>
    </div>
  ));
  return (
    <div className="py-5 container">
      <div className="mb-4 textItemList__heading">
        {title && <h3 className="mb-4">{title}</h3>}
        {subtitle && (
          <div className="mb-5">
            <PortableText value={subtitle} />
          </div>
        )}
      </div>

      <div className="textItemList">{textBlocks}</div>
    </div>
  );
};

export default TextBlockList;
