import React from 'react';
import { Link } from 'react-router-dom';

export default class PersonPreview extends React.Component {
  render() {
    const name = this.props.first + ' ' + this.props.last;
    return (
      <Link to={`/person/${this.props.id}`}>
        <div>
          <span>{name}</span>
        </div>
      </Link>
    );
  }
};
