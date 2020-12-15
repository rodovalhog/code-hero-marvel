import React from 'react';

import { Container } from './styles';

interface CardHerosProp {
  name: string;
  image: string;
  series: {
    items: {
      name: string;
    }[];
  };
  events: {
    items: {
      name: string;
    }[];
  };
}

const CardHero: React.FC<CardHerosProp> = ({ name, image, series, events }) => {
  return (
    <Container>
      <div className="image-card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
      </div>
      <div className="series-card">
        {series.items.slice(0, 3).map((item) => {
          return <p>{item.name}</p>;
        })}
      </div>
      <div className="events-card">
        {events.items.slice(0, 3).map((item) => {
          return <p>{item.name}</p>;
        })}
      </div>
    </Container>
  );
};

export default CardHero;
