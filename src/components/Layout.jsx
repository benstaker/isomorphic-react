import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Layout = props => (
  <div className="container">
    <header>
      <Link to="/">Home</Link>
    </header>
    <br />
    <div className="content">{props.children}</div>
    <br />
    <footer>
      <p>Isomorphic React</p>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Layout;
