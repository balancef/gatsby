import React from "react";
import { PortableText } from "@portabletext/react";
import IconCard from "./IconCard";
import "./IconTextBlock.scss";

const IconsTextBlocks = ({ title, subtitle, iconBlock }) => {
  const iconCards = iconBlock?.map((card ) => <IconCard data={card} />);
  return (
    <div className='container iconsTextBlock py-5'>
      <div className='iconsTextBlock__textTitle'>
        {title && <h3 className='mb-4'>{title}</h3>}
        {subtitle && <div className='mb-5'><PortableText value={subtitle} /></div> }
      </div>
      <div className='iconsTextBlock__iconsContainer'>{iconCards}</div>
    </div>
  );
};

export default IconsTextBlocks;
