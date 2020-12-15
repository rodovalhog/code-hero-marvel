import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hook from '../hook';
import Home from '../pages/Home';
import HeroDetails from '../pages/HeroDetails';

const Routes: React.FC = () => (
  <Switch>
    <Hook>
      <Route path="/" exact component={Home} />
      <Route path="/hero/:idhero" component={HeroDetails} />
    </Hook>
  </Switch>
);

export default Routes;
