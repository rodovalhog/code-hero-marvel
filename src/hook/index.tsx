import React from 'react';
import HerosProvider from './heros';

const Hook: React.FC = ({ children }) => {
  return <HerosProvider>{children}</HerosProvider>;
};

export default Hook;
