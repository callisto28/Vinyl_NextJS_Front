import { ApolloClient, InMemoryCache } from "@apollo/client";

// const GRAPHQL_URL = "http://localhost:3001/graphql";
const HEROKU_URL = "http://nestvinyl.herokuapp.com/graphql";

const client = new ApolloClient({
  uri: HEROKU_URL,
  cache: new InMemoryCache(),
});

export default client;
