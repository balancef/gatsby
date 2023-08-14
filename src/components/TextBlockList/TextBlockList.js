import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextBlockList.scss";
import separador from "./images/image-separador.svg";

const TextBlockList = ({ blocks }) => {
  const textBlocks = blocks?.map((block, id) => (
      <div key={`textItem-${id}`} className="textItem mb-3">
          <h2 className="textItem__title">{block.title}</h2>
          <div className="textItem__content">
            <PortableText value={block?._rawContent} />
          </div>
          {id < blocks.length - 1 && <img src="separador" alt="separador"/>}
      </div>
  ));
  return (
    <div className="py-5 container">
      <div className="textItemList">{textBlocks}</div>
    </div>
  );
};

export default TextBlockList;
