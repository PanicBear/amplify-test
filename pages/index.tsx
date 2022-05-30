import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import useMutation from '../libs/client/useMutation';

const Page: NextPage = () => {
  const router = useRouter();
  const [signIn, { isLoading, data, error }] = useMutation<{ ok: boolean }>('/api/user/login');
  const { data: dummy } = useSWR<{ ok: boolean; msg: string }>('/api/dummy');

  const onClick = ({}) => {
    signIn({ idToken: 'test' });
  };

  useEffect(() => {
    if (!isLoading && data?.ok) {
      router.push('/main');
    }
  });

  useEffect(() => {
    console.log(dummy);
  }, [dummy]);

  return (
    <div>
      <h1>{router.pathname}</h1>
      <button onClick={onClick}>login</button>
      <button onClick={() => router.push('/main')}>main</button>
      <button onClick={() => router.push('/user')}>user</button>
    </div>
  );
};

export default Page;
