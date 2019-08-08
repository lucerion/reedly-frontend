import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Client from './api/client';
import Layout from './containers/Layout';

import './app.css';

const App = () => (
  <ApolloProvider client={Client}>
    <Layout />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
