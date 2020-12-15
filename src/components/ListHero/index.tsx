import React from 'react';
import { Link } from 'react-router-dom';
import { useHero } from '../../hook/heros';
import CardHero from '../CardHero';

import { Container } from './styles';

const ListHero: React.FC = () => {
  const { listHero } = useHero();
  console.log('🚀 ~ file: index.tsx ~ line 9 ~ listHero', listHero);
  return (
    <Container>
      <div className="header-card">
        <div>
          <p>Personagem</p>
        </div>
        <div className="dn">
          <p>Series</p>
        </div>
        <div className="dn">
          <p>eventos</p>
        </div>
      </div>

      {listHero.map((hero) => (
        <Link to={`/Hero/${hero.id}`}>
          <CardHero
            key={hero.id}
            name={hero.name}
            image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            series={hero.series}
            events={hero.events}
          />
        </Link>
      ))}
    </Container>
  );
};

export default ListHero;
