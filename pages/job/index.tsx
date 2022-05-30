import { NavLayout } from '@components/index';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Page: NextPage = () => {
  const router = useRouter();
  return (
    <NavLayout>
      <h1>{router.asPath}</h1>
    </NavLayout>
  );
};

export default Page;
