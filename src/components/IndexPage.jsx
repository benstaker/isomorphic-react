import React from 'react';
import Layout from './Layout';
import PersonPreview from './PersonPreview';
import persons from '../../data/persons.json';

const IndexPage = () => (
  <Layout>
    <div>
      {persons.map(person => <PersonPreview key={person.id} {...person} />)}
    </div>
  </Layout>
);

export default IndexPage;
