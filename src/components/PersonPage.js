import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import NotFoundPage from './NotFoundPage';
import persons from '../data/persons';

export default class PersonPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const person = persons.filter((person) => person.id === id);
    console.log('person: ', person);

    if (!person || !person.length) {
      return <NotFoundPage/>;
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
  }
};
