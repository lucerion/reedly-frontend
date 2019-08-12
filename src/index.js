import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './api/client';
import Layout from './containers/Layout';

import './app.css';

const App = () => (
  <ApolloProvider client={client}>
    <Layout />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
