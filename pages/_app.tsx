import { NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { withSsrSession } from '../libs/server/withSsrSession';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
