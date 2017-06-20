import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PersonPreview = (props) => {
  const name = `${props.first} ${props.last}`;
  return (
    <Link to={`/person/${props.id}`}>
      <div>
        <span>{name}</span>
      </div>
    </Link>
  );
};

PersonPreview.propTypes = {
  first: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  last: PropTypes.string.isRequired,
};

export default PersonPreview;
