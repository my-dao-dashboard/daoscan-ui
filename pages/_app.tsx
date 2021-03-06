import * as React from "react";
import "graphiql/graphiql.css";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-title" content="Daoscan" />
        <meta name="description" content="Daoscan - DAO Indexer" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/images/logo192.png" />
        <link rel="icon" href="/images/logo192.png" sizes="192x192" />
        <link rel="icon" href="/images/logo512.png" sizes="512x512" />
        <title>DAO Indexer</title>
      </Head>
      <Component {...pageProps} />
      <script data-goatcounter="https://daoscan.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
    </>
  );
}

export default MyApp;
