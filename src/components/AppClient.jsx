import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const AppClient = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppClient;
