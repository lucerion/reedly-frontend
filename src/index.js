import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './api/client';
import App from './containers/App';

render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
), document.getElementById('app'));
