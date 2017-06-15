import React from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends React.Component {
  render() {
    return (
      <div class="container">
        <header>
          <Link to="/">Home</Link>
        </header>
        <br />
        <div class="content">{this.props.children}</div>
        <br />
        <footer>
          <p>Isomorphic React</p>
        </footer>
      </div>
    );
  }
};
