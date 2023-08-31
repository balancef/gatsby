import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { PortableText } from "@portabletext/react";
import "./Accordion.scss";
import { FaArrowRight } from "react-icons/fa"

function AccordionComponent({ title, items }) {
  const accordionItems = items?.map((item, id) => (
    <Accordion.Item eventKey={id} key={`item-${id}`}>
      <Accordion.Header>
        <p>{item.title}</p>
        <icon>{<FaArrowRight className="icon" />}</icon>
      </Accordion.Header>
      <Accordion.Body>
        <PortableText value={item._rawContent} />
      </Accordion.Body>
    </Accordion.Item>
  ));

  return (
    <div className="AccordionComponent" >
      <h5 className="mb-4 AccordionBlocks__title" id={title}>{title}</h5>
      <Accordion defaultActiveKey="0" flush >
        {accordionItems}
      </Accordion>
    </div>

  );
}

export default AccordionComponent;


