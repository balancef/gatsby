import React from "react";
import AccordionComponent from "../Accordion/Accordion";
import "./AccordionBlocks.scss";

function AccordionBlocks({ blocks }) {
  const accordionLinks = blocks?.map((item) => (
    <li><a href={`#${item.title}`}>{item.title}</a></li>
  ));
  const accordionComponents = blocks?.map((item, id) => (
    <AccordionComponent key={`accordion-${id}`} title={item.title} items={item.accordionItems} />
  ));

  return (
    <div className="AccordionBlocks container section-padding">
      <div className="AccordionBlocks__links">
        <ul>
          {accordionLinks}
        </ul>
      </div>
      <div className="AccordionBlocks__components">
        {accordionComponents}
      </div>
    </div>
  );
}

export default AccordionBlocks;