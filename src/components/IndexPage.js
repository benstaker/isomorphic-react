import React from 'react';
import Layout from './Layout';
import PersonPreview from './PersonPreview';
import persons from '../data/persons';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          {persons.map(person => <PersonPreview key={person.id} {...person} />)}
        </div>
      </Layout>
    );
  }
};
