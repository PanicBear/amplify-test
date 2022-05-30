import { amplifyLocalStorage } from '@nitric/amplify-secure-js';
import Amplify from 'aws-amplify';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import awsmobile from '../src/aws-exports';
import '../styles/globals.css';

Amplify.configure({ ...awsmobile, ssr: true, storage: amplifyLocalStorage });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: (url: string) => fetch(url).then((response) => response.json()) }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
