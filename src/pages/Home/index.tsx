import React, { useEffect } from 'react';
import Body from '../../components/Body';
import Header from '../../components/Header';
import { useHero } from '../../hook/heros';

import { Container } from './styles';

const Home: React.FC = () => {
  const { getHerosRequest } = useHero();

  useEffect(() => {
    getHerosRequest();
  }, [getHerosRequest]);
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

export default Home;
