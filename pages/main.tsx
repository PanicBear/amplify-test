import type { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { withSsrSession } from '../libs/server/withSsrSession';

const Page: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.pathname}</h1>
      <button onClick={() => router.push('/')}>index</button>
      <button onClick={() => router.push('/main')}>main</button>
      <button onClick={() => router.push('/user')}>user</button>
    </div>
  );
};

export const getServerSideProps = withSsrSession(async function ({ req }: NextPageContext) {
  const idToken = req?.session.user?.idToken;
  if (!idToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
});

export default Page;
