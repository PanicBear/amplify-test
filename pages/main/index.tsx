import { NavLayout } from '@components/index';
import { withSsrSession } from '@libs/server';
import { apiFetcher } from '@utils/common';
import type { NextPage, NextPageContext } from 'next';
import useSWR, { SWRConfig } from 'swr';

const Main: NextPage = () => {
  const { data } = useSWR('/api/test');

  return (
    <NavLayout>
      <h1>API 라우팅</h1>
    </NavLayout>
  );
};

const Page: NextPage<{ idToken: string }> = ({ idToken: token }) => {
  const fetcher = (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE') => apiFetcher({ url, token, method });

  return (
    <SWRConfig
      value={
        {
          // fetcher,
        }
      }
    >
      <Main />
    </SWRConfig>
  );
};

export const getServerSideProps = withSsrSession(async function ({ req }: NextPageContext) {
  const idToken = req?.session.user?.idToken;
  if (!idToken) {
    return {
      redirect: {
        destination: '/enter',
        permanent: false,
      },
    };
  }
  return { props: { idToken } };
});

export default Page;
