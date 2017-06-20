import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import NotFoundPage from './NotFoundPage';
import persons from '../../data/persons.json';

const PersonPage = (props) => {
  const id = props.params.id;
  const person = persons.filter(item => item.id === id);

  if (!person || !person.length) {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <div>
        <Link to="/">&lt;&lt; Back to index</Link>
        <div>ID: {person.id}</div>
        <div>First name: {person.first}</div>
        <div>Last name: {person.last}</div>
        <div>Email: {person.email}</div>
        <div>Address: {person.address}</div>
        <div>Created: {person.created}</div>
        <div>Balance: {person.balance}</div>
      </div>
    </Layout>
  );
};

PersonPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PersonPage;
