import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const API_PATH = process.env.API_PATH || '/api';

const client = new ApolloClient({
  link: new HttpLink({ uri: API_PATH }),
  cache: new InMemoryCache(),
});

export default client;
