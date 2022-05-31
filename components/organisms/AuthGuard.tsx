import { useUserContext } from '@context/index';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const { user, isLoading } = useUserContext();

  // useEffect(() => {
  //   if (!isLoading) {
  //     if (user && router.asPath === '/enter') {
  //       router.push('/main');
  //     }
  //     if (!user && router.asPath !== '/enter') {
  //       router.push('/enter');
  //     }
  //   }
  // });

  return <>{isLoading ? <></> : children}</>;
};

export default AuthGuard;
