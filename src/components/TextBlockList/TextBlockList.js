import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextBlockList.scss";
//import {FaEllipsisH} from 'react-icons/fa';

const TextBlockList = ({ blocks }) => {
  const textBlocks = blocks?.map((block, id) => (
    <div key={`textItem-${id}`} className="textItem">
      <h5 className="mb-3 textItem__title">{block.title}</h5>
      <div className="textItem__content">
        <PortableText value={block?._rawContent} />
        {/* {id < blocks.length - 1 && <FaEllipsisH className="textItem__icon" />} */}
      </div>
    </div>
  ));
  return (
    <div className="py-5 container">
      <div className="textItemList">{textBlocks}</div>
    </div>
  );
};

export default TextBlockList;
