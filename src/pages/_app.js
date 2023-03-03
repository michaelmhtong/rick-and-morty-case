import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../../apollo/apolloClient";
import Layout from "../../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
