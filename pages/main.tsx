import type { NextPage } from 'next';
import { useRouter } from 'next/router';

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

export default Page;
