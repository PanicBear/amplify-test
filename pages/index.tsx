import { useUserContext } from '@context/index';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const { user, isLoading } = useUserContext();

  useEffect(() => {
    if (!isLoading) {
      user ? router.push('/main') : router.push('/enter');
    }
  }, []);

  return <></>;
};

export default Home;
