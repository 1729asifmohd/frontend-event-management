import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import Header from "@components/Header";

import "/styles/globals.css";
import theme from '../styles/theme';
import {
  InMemoryCache,
  ApolloProvider,
  ApolloClient,
  from,
  HttpLink
} from '@apollo/client';

import { onError } from '@apollo/client/link/error';



const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`graphql error ${message} , location: ${location},path:${path}`);
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: `http://localhost:8000/graphql` })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Event mangement Website 2022</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
      </ApolloProvider>
    </CacheProvider>
  );
}