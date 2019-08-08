import { ApolloClient } from 'apollo-client';

const Client = () => new ApolloClient({ uri: process.env.SERVER });

export default Client;
