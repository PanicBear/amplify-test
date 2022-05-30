import AuthGuard from '@components/organisms/AuthGuard';
import { UserContextProvider } from '@context/index';
import { withSsrSession } from '@libs/server';
import { Color, GlobalStyles, Layout } from '@styles/index';
import { NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ Color, Layout }}>
      <GlobalStyles />
      <UserContextProvider>
        <AuthGuard>
          <SWRConfig value={{ fetcher: (url: string) => fetch(url).then((response) => response.json()) }}>
            <Component {...pageProps} />
          </SWRConfig>
        </AuthGuard>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps = withSsrSession(async function ({ req }: NextPageContext) {
  const router = useRouter();
  req?.session.user?.idToken ?? router.replace('/enter');
  return {};
});

export default MyApp;
