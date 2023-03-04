import Head from "next/head";
import styled from "styled-components";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty Case</title>
        <meta name="description" content="Assignment of Gracious" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}
