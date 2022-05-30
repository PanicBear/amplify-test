import { useMutation } from '@libs/client';
import { firebaseClientApp } from '@utils/client';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type UserContextType = {
  user: User | null;
  isLoading: boolean;
  error: string;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
};

const auth = getAuth(firebaseClientApp);

const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: true,
  error: '',
  login: () => {},
  logout: () => {},
});

export const useUserContext = () => useContext<UserContextType>(UserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [signIn] = useMutation('/api/user/login');
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (credential) => {
      credential ? setUser(credential) : setUser(null);
      setError('');
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async ({ email, password }: { email: string; password: string }) => {
    const idToken = await signInWithEmailAndPassword(auth, email, password)
      .then((res) => res.user.getIdToken())
      .catch((err) => setError(err.message));

    signIn({ idToken });
  };

  const logout = () => {
    signOut(auth);
  };

  const contextValue = {
    user,
    isLoading,
    error,
    login,
    logout,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
