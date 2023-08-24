import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextBlockList.scss";
import separadorImage from "../../images/image-separador.svg";


const TextBlockList = ({ blocks }) => {
  const textBlocks = blocks?.map((block, id) => (
      <div key={`textItem-${id}`} className="textItem">
        <h2 className="textItem__title">{block.title}</h2>
        {id < blocks.length - 1 && <img src={separadorImage} alt="separador" className="textItem__separador" />}
        <div className="textItem__content">
          <PortableText value={block?._rawContent} />
        </div>
      </div>
  ));
  return (
    <div className="section-padding container">
      <div className="textItemList">{textBlocks}</div>
    </div>
  );
};

export default TextBlockList;
