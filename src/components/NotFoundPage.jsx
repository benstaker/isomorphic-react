import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to="/">Go back to home</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
