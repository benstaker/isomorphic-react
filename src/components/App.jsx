import React from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexPage from './IndexPage';
import PersonPage from './PersonPage';
import NotFoundPage from './NotFoundPage';

const App = () => (
  <div className="app">
    <Switch>
      <Route exact name="index" path="/" component={IndexPage} />
      <Route exact path="person/:id" component={PersonPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
