import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = "http://localhost:3001/graphql";
// const HEROKU_URL = process.env.NEXT_PUBLIC_HEROKU_URL;
const HEROKU_URL = "https://nestvinyl.herokuapp.com/graphql";

const cache = new InMemoryCache();


const client = new ApolloClient({
  uri: HEROKU_URL,
  cache: cache,
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
