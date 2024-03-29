import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = "http://localhost:3001/graphql";
// const HEROKU_URL = process.env.NEXT_PUBLIC_HEROKU_URL;
const HEROKU_URL = "https://nestvinyl.herokuapp.com/graphql";
//const O2SWITCH_URL = "https://o2switch.com/graphql";

const client = new ApolloClient({
  uri: HEROKU_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-first',
    },
  },
});

export default client;
