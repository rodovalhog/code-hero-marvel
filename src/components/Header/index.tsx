import React from 'react';
import logo from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <section>
        <span>
          <h4>Guilherme Rodovalho</h4>
          <p>Teste Front-end</p>
        </span>
        <div>
          <h2>GR</h2>
        </div>
      </section>
    </Container>
  );
};

export default Header;
