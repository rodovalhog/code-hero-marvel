import React from 'react';

import { Container } from './styles';

interface ComicsHero {
  name: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const CardComics: React.FC<ComicsHero> = ({
  description,
  title,
  thumbnail,
  name,
}) => {
  return (
    <Container>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />

      <div>
        <header>
          <h3>{title}</h3>
        </header>
        <footer>
          <p>{description ? description.substring(0, 120) : description}</p>
        </footer>
      </div>
    </Container>
  );
};
