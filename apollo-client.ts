import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = "http://localhost:3001/graphql";

const client = new ApolloClient({
  uri: process.env.HEROKU_URL || GRAPHQL_URL,

  cache: new InMemoryCache(),
});

export default client;
