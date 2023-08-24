import React from "react";
import { Card, Pagination } from "../";

const FullCard = ({ title, cards }) => {
  const cardsComponent = cards.map((card) => {
    const cardData = {
      title: card?.text?.title,
      _rawContent: card?.text?._rawContent,
      image: card?.image?.image,
      icon: card?.icon?.icon,
      iconText: card?.textIcon,
      link: card?.link,
    };
    return <Card data={cardData} key={card?._key} />;
  });

  return (
    <div className="container section-padding">
      <h3 className="text-center mb-4">{title}</h3>
      <div>
        <Pagination posts={cardsComponent} postPerPage={3} />
      </div>
    </div>
  );
};

export default FullCard;
