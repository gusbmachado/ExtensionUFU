import React, { createContext, useCallback, useContext, useMemo } from 'react';

import { useLocalStorage, LocalStorageKeys } from '../../hooks';

interface AuthContextData {
  getCredentials(): { token: string; refreshToken: string };
  resetCredentials(): void;
  setCredentials(credentials: { token: string; refreshToken: string }): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useLocalStorage(LocalStorageKeys.AUTH_DATA, {
    token: '',
    refreshToken: '',
  });

  const getCredentials = useCallback(
    () => authData || { token: '', refreshToken: '' },
    [authData],
  );
  const resetCredentials = useCallback(() => {
    // api.setToken('');
    setAuthData({ token: '', refreshToken: '' });
  }, [setAuthData]);
  const setCredentials = useCallback(
    ({ token, refreshToken }) => {
      // api.setToken(token);
      setAuthData({ token, refreshToken });
    },
    [setAuthData],
  );

  const contextData = useMemo(
    () => ({ getCredentials, resetCredentials, setCredentials }),
    [getCredentials, resetCredentials, setCredentials],
  );

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => useContext(AuthContext);

export { AuthProvider, useAuth };
