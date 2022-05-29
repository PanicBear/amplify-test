import { amplifyLocalStorage } from '@nitric/amplify-secure-js';
import Amplify from 'aws-amplify';
import type { AppProps } from 'next/app';
import awsmobile from '../src/aws-exports';
import '../styles/globals.css';

Amplify.configure({ ...awsmobile, ssr: true, storage: amplifyLocalStorage });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
