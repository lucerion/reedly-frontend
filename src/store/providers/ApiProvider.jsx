import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../api/client';

const ApiProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default ApiProvider;
