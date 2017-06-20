import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const AppServer = (req, context) => (
  <StaticRouter
    location={req.url}
    context={context}>
    <App />
  </StaticRouter>
);

export default AppServer;
