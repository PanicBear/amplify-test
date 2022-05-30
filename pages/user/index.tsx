import { NavLayout } from '@components/index';
import { withSsrSession } from '@libs/server';
import { apiFetcher } from '@utils/common';
import type { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';

const User: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR('/test');

  return (
    <NavLayout>
      <h1>다이렉트 </h1>
    </NavLayout>
  );
};

const Page: NextPage<{ idToken: string }> = ({ idToken: token }) => {
  const fetcher = (url: string) => apiFetcher({ url, token, method: 'GET' });

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <User />
    </SWRConfig>
  );
};

export const getServerSideProps = withSsrSession(async function ({ req }: NextPageContext) {
  if (!req?.session.user?.idToken) {
    return {
      redirect: {
        destination: '/enter',
        permanent: false,
      },
    };
  }
  return { props: { idToken: req.session.user.idToken } };
});

export default Page;
