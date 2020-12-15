import React from 'react';
import ListHero from '../ListHero';
import Pagination from '../Pagination';
import Search from '../Search';

import { Container } from './styles';

const Body: React.FC = () => {
  return (
    <Container>
      <h2>Busca de personagens</h2>
      <div>
        <h3>Nome do personagem</h3>
        <Search />
        <ListHero />
      </div>
      <Pagination />
    </Container>
  );
};

export default Body;
