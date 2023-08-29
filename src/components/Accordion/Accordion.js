import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { PortableText } from "@portabletext/react";
import "./Accordion.scss";

function AccordionComponent({ title, items }) {
  const accordionItems = items?.map((item, id) => (
    <Accordion.Item eventKey={id} key={`item-${id}`}>
      <Accordion.Header>{item.title}</Accordion.Header>
      <Accordion.Body>
        <PortableText value={item._rawContent} />
      </Accordion.Body>
    </Accordion.Item>
  ));

  return (
    <div className="section-padding container">
      <h3 className="mb-4">{title}</h3>
      <Accordion defaultActiveKey="0" flush>
        {accordionItems}
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
