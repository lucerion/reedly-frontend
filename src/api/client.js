import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.SERVER }),
  cache: new InMemoryCache(),
});

export default client;
