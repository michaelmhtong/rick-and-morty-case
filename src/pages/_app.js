import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../../apollo/apolloClient";
import Layout from "../../components/Layout";
import GlobalStyle, { Container, Section } from "./globalStyle";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient()}>
      <GlobalStyle />
      <Layout>
        <Section>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Section>
      </Layout>
    </ApolloProvider>
  );
}
