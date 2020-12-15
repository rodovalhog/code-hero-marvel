import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardComics } from '../../components/CardComics';
import { useHero } from '../../hook/heros';

import { Container } from './styles';

const HeroDetails: React.FC = () => {
  const {
    requestCharacterId,
    detailsHero,
    requestComicsHero,
    comicsHero,
  } = useHero();
  const { idhero } = useParams<{ idhero: string }>();

  console.log('comicsHero lala', comicsHero);
  useEffect(() => {
    requestCharacterId(idhero);
    requestComicsHero(idhero);
  }, [requestCharacterId, idhero]);

  const {
    name,
    description,
    thumbnail: { path, extension },
  } = detailsHero;
  return (
    <Container>
      <div>
        <img src={`${path}.${extension}`} alt={name} />
        <div className="information">
          <h1>{name}</h1>
          {description && <p>{description}</p>}
        </div>
      </div>

      <h2>COMICS</h2>
      <div className="comic-card">
        {comicsHero.map((comic) => {
          return (
            <CardComics
              description={comic.description}
              title={comic.title}
              thumbnail={comic.thumbnail}
              name={name}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default HeroDetails;
