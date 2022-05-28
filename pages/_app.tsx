import type { AppProps } from 'next/app';
import Amplify from 'aws-amplify';
import '../styles/globals.css';
import awsmobile from '../src/aws-exports';

Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
