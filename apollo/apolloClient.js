import { ApolloClient, InMemoryCache } from "@apollo/client";

export function apolloClient() {
  return new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });
}
